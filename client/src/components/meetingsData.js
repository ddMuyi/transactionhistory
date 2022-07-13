import React, {useEffect, useState} from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import groupMeetings from "../helpers/groupMeetings";
import MeetingsTable from "./meetingsTable";
import MeetingDetails from "./meetingDetails";
import { QUERY_ALL_MEETINGS, GET_MEETING_BY_ID, FILTER_MEETINGS } from "../helpers/queries";


const Meetings = () =>{
    const [meetings, setMeetings] = useState([])
    const [showDetails, setShowDetails] = useState(false)
    const {data} = useQuery(QUERY_ALL_MEETINGS)

    const [fetchMeeting, {data:meetingSearchedData}] = useLazyQuery(GET_MEETING_BY_ID)

    const [filterMeetings, {data:filteredMeetingsData, error:filteredMeetingsError}] = useLazyQuery(FILTER_MEETINGS)

   
    // const [meetingId, setMeetingId] = useState("")
    if(filteredMeetingsError) console.log(filteredMeetingsError)

    useEffect(()=>{
        if(data){
            setMeetings(groupMeetings(data.meetings))
        }
    }, [data])

    useEffect(()=>{
        if(filteredMeetingsData) {
            console.log(filteredMeetingsData.filterMeeting)
            setMeetings(groupMeetings(filteredMeetingsData.filterMeeting))
        }
    },[filteredMeetingsData])

    const selectClass = "border rounded bg-white h-11 w-full px-4"

    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    let speciallizations = ["Psychosis", "Stress management", "Medical Doctor", "Health Management", "Insurance"]
    let durations = ["40", "45", "50", "55", '60']
    
    // if(data) console.log(data)
    return (
        <div className="pb-24">
            <header className="text-center py-4 bg-blue-200">
                <h1 className="font-bold text-3xl text-blue-700">Muyi</h1>
            </header>

            <main className="w-full px-4 lg:px-8 xl:px-12">
                {/* Fiilters */}
                <div className="grid grid-cols-12 gap-4 mt-6">
                    <div className="col-span-12 lg:col-span-8 flex items-center justify-between gap-4">
                        <select className={selectClass}
                            onChange={(e)=>{
                                filterMeetings({
                                    variables:{
                                        text:e.target.value
                                    }
                                })
                            } }
                        >
                            <option value="">Filter Status</option>
                            <option value="true">Completed</option>
                            <option value="false">Pending</option>
                        </select>

                        <select className={selectClass} 
                            onChange={(e)=>{
                                filterMeetings({
                                    variables:{
                                        text:e.target.value
                                    }
                                })
                            } }
                        >
                            <option value="">Filter Speciallization</option>
                            {speciallizations.map(s=>{
                                return <option key={s} value={s}>{s}</option>
                            })}
                        </select>

                        <select className={selectClass}
                            onChange={(e)=>{
                                filterMeetings({
                                    variables:{
                                        text:e.target.value
                                    }
                                })
                            } }
                        >
                            <option value="">Filter Duration</option>
                            {durations.map(s=>{
                                return <option key={s} value={s}>{s}</option>
                            })}
                        </select>
                    </div>
                    <input className="col-span-12 lg:col-span-4 border rounded h-11 px-2" placeholder="Search Counsellor and Client name" 
                        onChange={(e)=>{
                            filterMeetings({
                                variables:{
                                    text:e.target.value
                                }
                            })
                        } }
                    />
                </div>
                
                {/* Datas */}
                <section className="w-full">
                    {meetings && meetings.length > 0 && meetings.map(m=>{
                        return <MeetingsTable m={m} fetchMeeting={fetchMeeting} key={m.date} setShowDetails={setShowDetails}/> 
                    })}
                </section>
            </main>

            <div className="fixed bottom-4 right-4 xl:bottom-12 lg:right-12 p-4 bg-green-200 rounded-lg font-4xl flex items-center justify-center text-4xl cursor-pointer" onClick={scrollToTop}>
                👆🏾
            </div>

            {showDetails && meetingSearchedData && <MeetingDetails meeting={meetingSearchedData.meeting} setShowDetails={setShowDetails}/>}
        </div>
    )
}

export default Meetings
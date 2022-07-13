import React from "react"
import dateConverter from "../helpers/dateConverter"
import timeConverter from "../helpers/timeConverter"

const MeetingsTable = ({m, fetchMeeting, setShowDetails}) =>{

    const colClass = "flex items-center"

    return (
        <div className="mt-12">
            <p className="bg-red-200 inline-flex px-4 py-1 rounded-lg">{dateConverter(m.date)}</p>

            <div className="w-full divide-y mt-4 border rounded-xl">
                {m.meetings.map(meet=>{
                    return <div key={meet.meetingId} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 w-full p-4">
                        <div className="flex items-center justify-start">
                            <img src={meet.counsellor.avatar} alt="counsellor Avatar" className="w-8 h-auto rounded-full"/>
                            <p className="ml-2 ">{meet.counsellor.firstName} {meet.counsellor.lastName}</p>
                        </div>

                        <div className={`${colClass} justify-end lg:justify-start`}>{meet.client.firstName} {meet.client.lastName}</div>

                        <div className={`${colClass} justify-start`}>{meet.meetingId}</div> 

                        <div className="text-right hidden lg:block">{timeConverter(meet.meetingDate)}</div>

                        <div className="text-right hidden lg:block">
                            {meet.isCompleted === "true" ? <span className="py-1 px-4 rounded-full bg-green-100 text-green-600 cursor-pointer">Completed</span> : 
                            <span className="py-1 px-4 rounded-full bg-gray-200 cursor-pointer">Pending</span>}
                        </div>

                        <div className={`${colClass} justify-end text-right hidden lg:block`}>{meet.meetingDuration} mins</div>

                        <div className={`${colClass} justify-end`}>
                            <span className="py-1 px-4 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-200"  
                                onClick={()=>{
                                    fetchMeeting({
                                        variables:{
                                            meetingId:meet.meetingId
                                        }
                                    })
                                    setShowDetails(true)
                            }}>More</span>
                        </div>
                    </div>
                })}
            </div>
        </div> 
    )
}

export default MeetingsTable
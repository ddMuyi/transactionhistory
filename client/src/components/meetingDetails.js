import React from "react";
import dateConverter from "../helpers/dateConverter";

const MeetingDetails = ({meeting, setShowDetails})=>{
    return (
        <div className="fixed top-0 left-0 w-full min-h-screen bg-white transparent-bg bg-opacity-50 flex justify-center items-start pt-12 px-4 md:px-8 lg:px-0">
                <div className="w-full lg:w-96 h-auto rounded-lg bg-white shadow-md p-4 relative">
                    {/* Counsellor */}
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 font-semibold">Counsellor details</div>
                        <div className="col-span-5">
                            <img src={meeting.counsellor.avatar} alt="Counsellor's avatar" className="w-12 h-12 rounded-full"/>
                        </div>
                        <div className="col-span-7">
                            <p>{meeting.counsellor.firstName} {meeting.counsellor.lastName}</p>
                            <p>{meeting.counsellor.speciallization}</p>
                            <p>${meeting.counsellor.charge}/hr</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-1 mt-6">
                        <div className="col-span-12 font-semibold">Client's details</div>
                        <div className="col-span-12">
                            <p>Name: {meeting.client.firstName} {meeting.client.lastName}</p>
                            <p>Phone Number: {meeting.client.phoneNumber}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-1 mt-6">
                        <div className="col-span-12 font-semibold">Client's company</div>
                        <div className="col-span-12">
                            <p>Company name: {meeting.company.name}</p>
                            <p>Company sector: {meeting.company.sector}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-1 mt-6">
                        <div className="col-span-12 font-semibold">Other details</div>
                        <div className="col-span-12">
                            <p>Meeting ID: {meeting.meetingId}</p>
                            <p>Date: {dateConverter(meeting.meetingDate)}</p>
                            <p>Duration: {meeting.meetingDuration} minutes</p>
                        </div>
                    </div>

                    {/* Close button */}
                    <div className="w-8 h-8 flex items-center justify-center absolute -top-10 right-0 md:-right-4 lg:-right-8 border border-red-600 rounded-full" onClick={()=>setShowDetails(false)}>
                        ❌
                    </div>
                </div>
            </div>
    )
}

export default MeetingDetails
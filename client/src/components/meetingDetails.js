import React from "react";
import dateConverter from "../helpers/dateConverter";
import timeConverter from '../helpers/timeConverter'

const MeetingDetails = ({transaction, setShowDetails})=>{
    return (
        <div className="fixed top-0 left-0 w-full min-h-screen bg-white transparent-bg bg-opacity-50 flex justify-center items-start pt-12 px-4 md:px-8 lg:px-0">
                <div className="w-full md:w-3/4 lg:w-3/5 xl:2/5 h-auto rounded-lg bg-white shadow-md p-4 lg:p-8 relative">
                    {/* Counsellor */}
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 font-semibold">Sneder details</div>
                        <div className="col-span-5">
                            <img src={transaction.sender.avatar} alt="Counsellor's avatar" className="w-12 h-12 rounded-full"/>
                        </div>
                        <div className="col-span-7 space-y-2">
                            <p>{transaction.sender.firstName} {transaction.sender.lastName}</p>
                            <p>{transaction.sender.email}</p>
                            <p>{transaction.sender.phone_number}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 font-semibold">Beneficiary details</div>
                        <div className="col-span-5">
                            <img src={transaction.beneficiary.avatar} alt="Counsellor's avatar" className="w-12 h-12 rounded-full"/>
                        </div>
                        <div className="col-span-7 space-y-2">
                            <p>{transaction.beneficiary.firstName} {transaction.beneficiary.lastName}</p>
                            <p>{transaction.beneficiary.email}</p>
                            <p>{transaction.beneficiary.phone_number}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-1 mt-6">
                        <div className="col-span-12 font-semibold">Other details</div>
                        <div className="col-span-12 space-y-2">
                            <p>Transaction ID: {transaction.id}</p>
                            <p>Date: {dateConverter(transaction.date)}</p>
                            <p>Time: {timeConverter(transaction.date)}</p>
                            <p>Amount: #{transaction.amount}</p>
                        </div>
                    </div>

                    {/* Close button */}
                    <div className="w-8 h-8 flex items-center justify-center absolute -top-10 right-0 md:-right-4 lg:-right-8 border border-red-600 rounded-full cursor-pointer" onClick={()=>setShowDetails(false)}>
                        ❌
                    </div>
                </div>
            </div>
    )
}

export default MeetingDetails
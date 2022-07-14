import React from "react"
import dateConverter from "../helpers/dateConverter"

const MeetingsTable = ({t, fetchTransaction, setShowDetails}) =>{

    const colClass = "flex items-center"

    const Status = (status)=>{
        return (
            <>
                {status === "successful" ? <span className="py-1 px-4 rounded-full bg-green-100 text-green-600 cursor-pointer">Successful</span> : 
                status === "failed" ? <span className="py-1 px-4 rounded-full bg-red-100 text-red-500 cursor-pointer">Failed</span> : 
                <span className="py-1 px-4 rounded-full bg-gray-100 cursor-pointer">Pending</span>}
            </>
        )
    }

    return (
        <div className="mt-12">
            <p className="bg-gray-700 text-white inline-flex px-4 py-1 rounded-lg">{dateConverter(t.date)}</p>

            <div className="w-full divide-y mt-4 border rounded-xl text-sm xl:text-base">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full p-4 font-semibold">
                    <div className="flex items-center justify-start">Sender</div>
                    <div className={`${colClass} justify-end md:justify-start`}>Beneficiary</div>
                    <div className={`${colClass} justify-start`}>ID</div>
                    <div className="text-right hidden lg:block">Status</div>
                    <div className="text-right hidden lg:block">Type</div>
                    <div className={`${colClass} justify-end text-right hidden lg:block`}>Amount</div>
                    <div className={`${colClass} justify-end`}>More</div>
                </div>
                {t.transactions.map(transaction=>{
                    return <div key={transaction.mid} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full p-4">
                        <div className="flex items-center justify-start">
                            <img src={transaction.sender.avatar} alt="counsellor Avatar" className="w-8 h-auto rounded-full"/>
                            <p className="ml-2 ">
                                {transaction.sender.firstName} {transaction.sender.lastName}
                            </p>
                        </div>

                        <div className={`${colClass} justify-end md:justify-start`}>{transaction.beneficiary.firstName} {transaction.beneficiary.lastName}</div>

                        <div className={`${colClass} justify-start`}>{transaction.id}</div> 

                        {/* <div className="text-right hidden lg:block">{timeConverter(meet.meetingDate)}</div> */}

                        <div className="text-right hidden lg:block">
                            {Status(transaction.status)}
                        </div>

                        <div className="text-right hidden lg:block capitalize">
                            {transaction.type}
                        </div>

                        <div className={`${colClass} justify-end text-right hidden lg:block`}># {transaction.amount}</div>

                        <div className={`${colClass} justify-end`}>
                            <span className="py-1 px-4 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-200"  
                                onClick={()=>{
                                    fetchTransaction({
                                        variables:{
                                            transaction_id:transaction.id
                                        }
                                    })
                                    setShowDetails(true)
                            }}>View details</span>
                        </div>
                    </div>
                })}
            </div>
        </div> 
    )
}

export default MeetingsTable
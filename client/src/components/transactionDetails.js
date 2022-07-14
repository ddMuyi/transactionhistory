import React, { useEffect } from "react";
import dateConverter from "../helpers/dateConverter";
import timeConverter from '../helpers/timeConverter'

const TransactionDetails = ({transaction, setShowDetails})=>{
   useEffect(()=>{
        window.addEventListener("click", (e)=>{
            let detailsCont = document.querySelector('.detailsCont')
            if(e.target === detailsCont){
                setShowDetails(false)
            }
        })

        return ()=>window.removeEventListener("click",()=>{})
        // eslint-disable-next-line
   },[])


    return (
        <div className="fixed top-0 left-0 w-full min-h-screen bg-white transparent-bg bg-opacity-50 flex justify-center items-start pt-12 px-4 md:px-8 lg:px-0 detailsCont">
                <div className="w-full md:w-3/4 lg:w-3/5 xl:w-2/5 h-auto rounded-lg bg-white shadow-md p-4 lg:p-8 relative ">
                    <div className="text-center text-4xl font-semibold py-2">Transaction Details</div>

                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 font-semibold">Sender details</div>
                        <div className="col-span-5">
                            <img src={transaction.sender.avatar} alt="Counsellor's avatar" className="w-24 h-24 rounded-full"/>
                        </div>
                        <div className="col-span-7 space-y-2">
                            <p><span className="font-semibold">Name:</span> {transaction.sender.firstName} {transaction.sender.lastName}</p>
                            <p><span className="font-semibold">Email:</span> {transaction.sender.email}</p>
                            <p><span className="font-semibold">Phone:</span> {transaction.sender.phone_number}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4 mt-6">
                        <div className="col-span-12 font-semibold">Beneficiary details</div>
                        <div className="col-span-5">
                            <img src={transaction.beneficiary.avatar} alt="Counsellor's avatar" className="w-24 h-24 rounded-full"/>
                        </div>
                        <div className="col-span-7 space-y-2">
                            <p><span className="font-semibold">Name:</span> {transaction.beneficiary.firstName} {transaction.beneficiary.lastName}</p>
                            <p><span className="font-semibold">Email:</span> {transaction.beneficiary.email}</p>
                            <p><span className="font-semibold">Phone:</span> {transaction.beneficiary.phone_number}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-1 mt-6">
                        <div className="col-span-12 font-semibold">Other details</div>
                        <div className="col-span-12 space-y-2 mt-2">
                            <p><span className="font-semibold">Transaction ID:</span> {transaction.id}</p>
                            <p><span className="font-semibold">Transaction Date:</span> {dateConverter(transaction.date)}</p>
                            <p><span className="font-semibold">Transaction Time:</span> {timeConverter(transaction.date)}</p>
                            <p><span className="font-semibold">Amount:</span> #{transaction.amount}</p>
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

export default TransactionDetails
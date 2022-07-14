import React, {useEffect, useState} from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import groupTransactions from "../helpers/groupTransactions";
import dateConverter from "../helpers/dateConverter";
import MeetingsTable from "./meetingsTable";
import MeetingDetails from "./meetingDetails";
import { QUERY_ALL_TRANSACTIONS, GET_TRANSACTION_BY_ID, FILTER_TRANSACTION_BY_NAME, FILTER_TRANSACTION_BY_TYPE_STATUS, FILTER_TRANSACTION_BY_DATE } from "../helpers/queries";

let dates = [
    '2022-06-12T09:50:42.874Z',
    '2022-05-19T12:50:42.874Z',
    '2022-04-14T09:50:42.874Z',
    '2022-03-10T01:50:42.874Z',
    '2022-02-17T14:50:42.874Z'
]


const Meetings = () =>{
    const [transactions, setTransactions] = useState([])
    const [showDetails, setShowDetails] = useState(false)
    const {data} = useQuery(QUERY_ALL_TRANSACTIONS)

    const [fetchTransaction, {data:fetchedTransactionById}] = useLazyQuery(GET_TRANSACTION_BY_ID)

    const [filterTransactionsByTypeStatus, {data:filteredTransactionsByTypeStatus}] = useLazyQuery(FILTER_TRANSACTION_BY_TYPE_STATUS)

    const [filterTransactionsByName, {data:filteredTransactionsByName}] = useLazyQuery(FILTER_TRANSACTION_BY_NAME)

    const [filterTransactionsByDate, {data:filteredTransactionsByDate}] = useLazyQuery(FILTER_TRANSACTION_BY_DATE)


    // The default data from fetching all meetings
    useEffect(()=>{
        if(data){
            // console.log(data)
            setTransactions(groupTransactions(data.transactions))
        }
    }, [data])


    // To filter other queries aside duration
    useEffect(()=>{
        if(filteredTransactionsByName) {
            setTransactions(groupTransactions(filteredTransactionsByName.filter_transaction_name))
        }
    },[filteredTransactionsByName])


    // To filter durations
    useEffect(()=>{
        if(filteredTransactionsByTypeStatus) {
            setTransactions(groupTransactions(filteredTransactionsByTypeStatus.filter_transaction_type_status))
        }
    },[filteredTransactionsByTypeStatus])

    useEffect(()=>{
        if(filteredTransactionsByDate) {
            setTransactions(groupTransactions(filteredTransactionsByDate.filter_transaction_by_date))
        }
    },[filteredTransactionsByDate])

    const selectClass = "border rounded bg-white h-11 w-full px-4 border-gray-600"

    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    let speciallizations = ["withdrawal", "deposit", "transfer", "airtime"]
    // let durations = ["40", "45", "50", "55", '60']
    
    // if(data) console.log(data)
    return (
        <div className="pb-28 px-4 lg:px-8 xl:px-12">
            <header className="text-center py-4">
                <h1 className="font-bold text-3xl">TRANSACTION HISTORY</h1>
            </header>

            <main className="container mx-auto">
                {/* Fiilters */}
                <div className="grid grid-cols-12 gap-4 mt-6">
                    <div className="col-span-12 lg:col-span-12 flex items-center justify-center">
                        <input className="w-full lg:w-1/2 border border-gray-600 rounded h-11 px-2" placeholder="Search name or ID" 
                            onChange={(e)=>{
                                filterTransactionsByName({
                                    variables:{
                                        query_text:e.target.value
                                    }
                                })
                            } }
                        />
                    </div>
                    <div className="col-span-12  flex items-center justify-between gap-4">
                        <select className={selectClass}
                            onChange={(e)=>{
                                filterTransactionsByDate({
                                    variables:{
                                        date:e.target.value
                                    }
                                })
                            } }
                        >
                            <option value="">Filter Date</option>
                            {dates.map(date=>{
                                return <option value={date}>{dateConverter(date)}</option>
                            })}
                        </select>

                        <select className={selectClass}
                            onChange={(e)=>{
                                filterTransactionsByTypeStatus({
                                    variables:{
                                        type_or_status:e.target.value
                                    }
                                })
                            } }
                        >
                            <option value="">Filter Status</option>
                            <option value="successful">Successful</option>
                            <option value="failed">Failed</option>
                            <option value="pending">Pending</option>
                        </select>

                        <select className={selectClass} 
                            onChange={(e)=>{
                                filterTransactionsByTypeStatus({
                                    variables:{
                                        type_or_status:e.target.value
                                    }
                                })
                            } }
                        >
                            <option value="">Filter Type</option>
                            {speciallizations.map(s=>{
                                return <option key={s} value={s}>{s}</option>
                            })}
                        </select>
                    </div>
                </div>
                
                {/* Datas */}
                <section className="w-full">
                    {(transactions && transactions.length > 0) ? transactions.map(t=>{
                        return <MeetingsTable t={t} fetchTransaction={fetchTransaction} key={t.date} setShowDetails={setShowDetails}/> 
                    }) : <div className="text-center mt-12 text-2xl font-semibold">There is no data available...</div>}
                </section>
            </main>

            <div className="fixed bottom-4 right-4 xl:bottom-12 lg:right-12 p-4 bg-green-200 rounded-lg font-4xl flex items-center justify-center text-4xl cursor-pointer" onClick={scrollToTop}>
                👆🏾
            </div>

            {showDetails && fetchedTransactionById && <MeetingDetails transaction={fetchedTransactionById.transaction} setShowDetails={setShowDetails}/>}
        </div>
    )
}

export default Meetings
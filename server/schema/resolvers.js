let transactions_list  =  require("../FakeData")


// NB: The parent in each query is always the first parameter before we can access the args. It's not required for this exercise

const resolvers = {
    Query:{
        transactions() {
            return transactions_list
        },

        // Get transactions by ID
        transaction:(parent, args )=>{
            const id = args.transaction_id
            const transaction = transactions_list.find((t)=>{
                return t.id === id
            })
            return transaction
        },

        filter_transaction_name:(parent, args)=>{
            let queryArg = args.query_text

            let transactions = transactions_list.filter(t =>{
                return t.sender.first_name.toUpperCase().match(queryArg.toUpperCase()) || 
                t.sender.last_name.toUpperCase().match(queryArg.toUpperCase()) || 
                t.beneficiary.first_name.toUpperCase().match(queryArg.toUpperCase()) || 
                t.beneficiary.last_name.toUpperCase().match(queryArg.toUpperCase())
            })
            return transactions
        },

        filter_transaction_type_status:(parent, args )=>{
            const queryArg = args.type_or_status
            const transactions = transactions_list.filter( t =>{
                return t.status.toUpperCase().match(queryArg.toUpperCase()) || 
                    t.type.toUpperCase().match(queryArg.toUpperCase())
            })
            return transactions
        },

        filter_transaction_by_date:(parent, args )=>{
            const queryArg = args.date
            const transactions = transactions_list.filter((t)=>{
                return t.date === queryArg
            })
            return transactions
        },
    } 
}

module.exports = resolvers
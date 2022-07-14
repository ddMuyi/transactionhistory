let transactions_list  =  require("../FakeData")
let _ = require('lodash')

const resolvers = {
    Query:{
        transactions() {
            return transactions_list
        },
        transaction:(parent, args )=>{
            const id = args.transaction_id
            const transaction = _.find(transactions_list, {id:id})
            return transaction
        },
        filter_transaction_name:(parent, args)=>{
            let queryArg = args.query_text
            const transactions = _.filter(transactions_list, (t)=>{
                return t.sender.firstName.toUpperCase().match(queryArg.toUpperCase()) || 
                        t.sender.lastName.toUpperCase().match(queryArg.toUpperCase()) || 
                        t.beneficiary.firstName.toUpperCase().match(queryArg.toUpperCase()) || 
                        t.beneficiary.lastName.toUpperCase().match(queryArg.toUpperCase())
            })
            return transactions
        },
        filter_transaction_type_status:(parent, args )=>{
            const queryArg = args.type_or_status
            const transactions = _.filter(transactions_list, (t)=>{
                return t.status.toUpperCase().match(queryArg.toUpperCase()) || 
                    t.type.toUpperCase().match(queryArg.toUpperCase())
            })
            return transactions
        },

        filter_transaction_by_date:(parent, args )=>{
            const queryArg = args.date
            const transactions = _.filter(transactions_list, (t)=>{
                return t.date === queryArg
            })
            return transactions
        },

        
        // || p.isCompleted.toUpperCase().match(queryArg.toUpperCase())
        // || 
        // p.id.toUpperCase().match(queryArg.toUpperCase())
    } 
}

module.exports = resolvers
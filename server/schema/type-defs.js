const {gql} = require('apollo-server')


// To define the expected Type of each key in the objects
const typeDefs = gql`
    # the expected objeect is supposed to look like this
    # {
    #     id
    #     date
    #     status
    #     beneficiary{
    #         first_name
    #         last_name
    #         phone_number
    #         avatar
    #         email
    #         bank_name
    #         account_number
    #     },
    #     sender{
    #         first_name
    #         last_name
    #         avatar
    #         email
    #         phone_number
    #     },
    #     type
    #     charge
    #     amount
    # }
    type Beneficiary{
        first_name:String!
        last_name:String!
        phone_number:String!
        email:String!
        avatar:String!
        bank_name:String!
        account_number:Int!
    }

    type Sender{
        first_name:String!
        last_name:String!
        avatar:String!
        email:String!
        phone_number:String!
    }

    type Transaction {
        id:String!
        date:String!
        status:String!
        charge: Float!
        type:String!
        amount:String!
        beneficiary:Beneficiary
        sender:Sender
    }
    
    type Query{
        transactions:[Transaction!]!
        transaction(transaction_id:String!):Transaction!
        filter_transaction_name(query_text:String!):[Transaction!]!
        filter_transaction_type_status(type_or_status:String!):[Transaction!]!
        filter_transaction_by_date(date:String!):[Transaction!]!
    }
`;

module.exports = typeDefs
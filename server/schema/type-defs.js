const {gql} = require('apollo-server')

const typeDefs = gql`
    type Beneficiary{
        firstName:String!
        lastName:String!
        phone_number:String!
        email:String!
        avatar:String!
    }

    type Sender{
        firstName:String!
        lastName:String!
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
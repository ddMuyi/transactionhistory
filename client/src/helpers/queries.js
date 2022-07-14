import { gql } from "@apollo/client"

export const QUERY_ALL_TRANSACTIONS = gql`
    query getTransactions{
        transactions {
            id
            date
            status
            charge
            type
            amount
            beneficiary{
                firstName
                lastName
                avatar
            }
            sender{
                firstName
                lastName
                avatar
            }
        }
    }
`

export const GET_TRANSACTION_BY_ID = gql`
query getTransaction($transaction_id:String!){
    transaction(transaction_id:$transaction_id){
        id
        date
        status
        charge
        type
        amount
        beneficiary{
            firstName
            lastName
            phone_number
            email
            avatar
        }
        sender{
            firstName
            lastName
            phone_number
            email
            avatar
        }
    }
}
`

export const FILTER_TRANSACTION_BY_NAME = gql`
    query filterTransactionsName($query_text:String!){
        filter_transaction_name(query_text: $query_text) {
            id
            date
            status
            charge
            type
            amount
            beneficiary{
                firstName
                lastName
                avatar
            }
            sender{
                firstName
                lastName
                avatar
            }
        }
    }
`

export const FILTER_TRANSACTION_BY_TYPE_STATUS = gql`
    query filterTransactionStatus($type_or_status:String!){
        filter_transaction_type_status(type_or_status: $type_or_status) {
            id
            date
            status
            charge
            type
            amount
            beneficiary{
                firstName
                lastName
                avatar
            }
            sender{
                firstName
                lastName
                avatar
            }
        }
    }
`

export const FILTER_TRANSACTION_BY_DATE = gql`
    query filterTransactionDate($date:String!){
        filter_transaction_by_date(date: $date) {
            id
            date
            status
            charge
            type
            amount
            beneficiary{
                firstName
                lastName
                avatar
            }
            sender{
                firstName
                lastName
                avatar
            }
        }
    }
`
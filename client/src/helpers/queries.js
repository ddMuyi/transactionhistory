import { gql } from "@apollo/client"

export const QUERY_ALL_MEETINGS = gql`
    query getMeetings{
        meetings {
            meetingId
            meetingDate
            meetingDuration
            isCompleted
            client {
                firstName
                lastName
            }
            counsellor {
                firstName
                lastName
                avatar
            }
        }
    }
`

export const GET_MEETING_BY_ID = gql`
query getMeeting($meetingId:String!){
    meeting(meetingId:$meetingId){
        meetingId
        meetingDate
        meetingDuration
        isCompleted
        client {
            firstName
            lastName
            phoneNumber
        }
        counsellor {
            firstName
            lastName
            avatar
            speciallization
            charge
        }
        company {
            name
            sector
        }
    }
}
`

export const FILTER_MEETINGS = gql`
    query filterMeetings($text:String!){
        filterMeeting(text: $text) {
            meetingId
            meetingDate
            meetingDuration
            isCompleted
            client {
                firstName
                lastName
            }
            counsellor {
                firstName
                lastName
                avatar
                speciallization
            }
            company {
                name
            }
        }
    }
`
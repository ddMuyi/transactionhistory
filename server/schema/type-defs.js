const {gql} = require('apollo-server')

const typeDefs = gql`
    type Company{
        sector:String!
        name:String!
    }

    type Client{
        firstName:String!
        lastName:String!
        phoneNumber:String!
    }

    type Counsellor{
        firstName:String!
        lastName:String!
        speciallization: String!
        charge: Int!,
        avatar:String!
    }

    type Meeting {
        id:ID!
        meetingId:String!
        meetingDate:String!
        meetingDuration:String!
        isCompleted:String!
        company:Company
        client:Client
        counsellor:Counsellor
    }
    
    type Query{
        meetings:[Meeting!]!
        meeting(meetingId:String!):Meeting!
        filterMeeting(text:String!):[Meeting!]!
    }
`;

module.exports = typeDefs
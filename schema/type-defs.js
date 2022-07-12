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
        charge: Int!
    }

    type Meeting {
        id:ID!
        meetingId:String!
        meetingDate:String!
        meetingDuration:Int!
        isCompleted:Boolean!
        company:Company
        client:Client
        counsellor:Counsellor
    }
    
    type Query{
        meetings:[Meeting!]!
    }
`;

module.exports = typeDefs
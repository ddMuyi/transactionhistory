let meetingList  =  require("../FakeData")
let _ = require('lodash')

const resolvers = {
    Query:{
        meetings() {
            return meetingList
        },
        meeting:(parent, args )=>{
            const meetingId = args.meetingId
            const meeting = _.find(meetingList, {meetingId})
            return meeting
        },
        filterMeeting:(parent, args)=>{
            let queryArg = args.text
            const meetings = _.filter(meetingList, (p)=>{
                return p.counsellor.firstName.toUpperCase().match(queryArg.toUpperCase()) || p.counsellor.lastName.toUpperCase().match(queryArg.toUpperCase()) || p.client.firstName.toUpperCase().match(queryArg.toUpperCase()) || p.client.lastName.toUpperCase().match(queryArg.toUpperCase()) || p.company.name.toUpperCase().match(queryArg.toUpperCase()) || p.meetingId.toUpperCase().match(queryArg.toUpperCase()) || p.counsellor.speciallization.toUpperCase().match(queryArg.toUpperCase()) || p.isCompleted.toUpperCase().match(queryArg.toUpperCase())
            })
            return meetings
        }
    } 
}

module.exports = resolvers
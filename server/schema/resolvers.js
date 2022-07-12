let meetingList  =  require("../FakeData")
let _ = require('lodash')

const resolvers = {
    Query:{
        meetings() {
            return meetingList
        },
        meeting:(parent, args )=>{
            const meetingId = args.meetingId
            const user = _.find(meetingList, {meetingId})
            return user
        }
    } 
}

module.exports = resolvers
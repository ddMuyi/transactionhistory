let meetingList  =  require("../FakeData")

const resolvers = {
    Query:{
        meetings() {
            return meetingList
        }
    }
}

module.exports = resolvers
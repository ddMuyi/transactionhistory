let groupMeetings = (arr)=>{
    const groups = arr.reduce((groups, meeting) => {
        const date = meeting.meetingDate;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(meeting);
        return groups;
    }, {});
        
        // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
        return {
            date,
            meetings: groups[date]
        };
    });

    let ordered = groupArrays.sort((a,b)=>{

        if (a.date.valueOf() > b.date.valueOf()) {
            return -1
        }

        return false
    })

    return ordered
}

export default groupMeetings
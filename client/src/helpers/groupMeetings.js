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

    return groupArrays
}

export default groupMeetings
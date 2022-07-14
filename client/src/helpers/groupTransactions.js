let groupTransactions = (arr)=>{
    const groups = arr.reduce((groups, transaction) => {
        const date = transaction.date;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(transaction);
        return groups;
    }, {});
        
        // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
        return {
            date,
            transactions: groups[date]
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

export default groupTransactions
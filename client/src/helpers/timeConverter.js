const timeConverter = (time) =>{
    const formattedTime = time.split(':')
    const afterT = formattedTime[0].substring(formattedTime[0].indexOf('T') + 1);
     var min = formattedTime[1]
     var hour = Number(afterT)
     let period = ""
     
     if(hour > 12) {
         hour = hour - 12
         period = "PM"
     } 
     else {
         period = "AM"
     }
 
     return `${hour} : ${min}  ${period}`
 }
 
 export default timeConverter
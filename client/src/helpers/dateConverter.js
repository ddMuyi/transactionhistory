const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const dateConverter = (date) =>{
   const formatted = new Date(date)
   const day = formatted.getDate()
   const month = Months[formatted.getMonth()]
   const year = formatted.getFullYear()

   return `${day} ${month}, ${year}`
}

export default dateConverter
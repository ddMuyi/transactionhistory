// let {faker} = require('@faker-js/faker')
let _ = require('lodash')
let casual = require('casual')

let dates = [
    new Date('January 17, 2022 03:24:00'),
    new Date('February 17, 2022 03:24:00'),
    new Date('March 17, 2022 03:24:00'),
    new Date('April 17, 2022 03:24:00'),
    new Date('May 17, 2022 03:24:00')
]

let sectors = [ "Fintech", "Food Supply", "Transport", "Finance", 'Education']

let company = ["Ajax ltd", "Cowrywise", "Moneyrise", "Risevest", "Providence"]

let speciallization = ["Psychosis", "Stress management", "Medical Doctor", "Health Management", "Insurance"]

let duration = [40, 45, 50, 55, 60]

const meetingList = [
    
]



_.times(40, (i)=>{
    let randomNumber = Math.floor(Math.random() * 5)
    meetingList.push({
        meetingId:require('crypto').randomBytes(10).toString('hex'),
        meetingDate:dates[randomNumber],
        meetingDuration:duration[randomNumber],
        isCompleted:([true, false])[Math.floor(Math.random() * 2)],
        company:{
            sector:sectors[randomNumber],
            name:company[randomNumber],
        },
        client:{
            firstName:casual.first_name,
            lastName:casual.last_name,
            phoneNumber:casual.phone,
        },
        counsellor:{
            firstName:casual.first_name,
            lastName:casual.last_name,
            speciallization: speciallization[randomNumber],
            charge: duration[randomNumber]
        }
    })
})

module.exports = meetingList
let {faker} = require('@faker-js/faker')
let _ = require('lodash')
let casual = require('casual') //for values for the fake data

let dates = [
    '2022-06-12T09:50:42.874Z',
    '2022-05-19T12:50:42.874Z',
    '2022-04-14T09:50:42.874Z',
    '2022-03-10T01:50:42.874Z',
    '2022-02-17T14:50:42.874Z'
]

let sectors = [ "Fintech", "Food Supply", "Transport", "Finance", 'Education']

let company = ["Ajax ltd", "Cowrywise", "Moneyrise", "Risevest", "Providence"]

let speciallization = ["Psychosis", "Stress management", "Medical Doctor", "Health Management", "Insurance"]

let duration = ["40", "45", "50", "55", '60']

const meetingList = [
    
]


// Lodash to create 40 instances of a meeting schema 
_.times(40, (i)=>{
    let random1 = Math.floor(Math.random() * 5)
    let random2 = Math.floor(Math.random() * 5)
    let random3 = Math.floor(Math.random() * 5)
    let random4 = Math.floor(Math.random() * 5)
    let random5 = Math.floor(Math.random() * 5)
    let random6 = Math.floor(Math.random() * 5)


    meetingList.push({
        id:Number(i) + 1,
        meetingId:require('crypto').randomBytes(10).toString('hex'),
        meetingDate:dates[random1],
        meetingDuration:duration[random2],
        isCompleted:(["true", "false"])[Math.floor(Math.random() * 2)],
        company:{
            sector:sectors[random3],
            name:company[random4],
        },
        client:{
            firstName:casual.first_name,
            lastName:casual.last_name,
            phoneNumber:casual.phone,
        },
        counsellor:{
            firstName:casual.first_name,
            lastName:casual.last_name,
            speciallization: speciallization[random5],
            charge: duration[random6],
            avatar:faker.image.avatar()
        }
    })
})

module.exports = meetingList
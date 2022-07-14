let {faker} = require('@faker-js/faker')
let casual = require('casual')

faker.locale = 'en'

let dates = [
    '2022-06-12T09:50:42.874Z',
    '2022-05-19T12:50:42.874Z',
    '2022-04-14T09:50:42.874Z',
    '2022-03-10T01:50:42.874Z',
    '2022-02-17T14:50:42.874Z'
]

const transactions_list = [
    
]


// Lodash to create 40 instances of a meeting schema 
for(let i =0; i<40; i++) {
    let random1 = Math.floor(Math.random() * 5)
    let random_for_types = Math.floor(Math.random() * 4)


    transactions_list.push({
        id:require('crypto').randomBytes(10).toString('hex'),
        date:dates[random1],
        status:(["successful", "failed", "pending"])[Math.floor(Math.random() * 3)],
        beneficiary:{
            firstName:casual.first_name,
            lastName:casual.last_name,
            phone_number:faker.phone.number(),
            avatar:faker.image.avatar(),
            email:faker.internet.email()
        },
        sender:{
            firstName:casual.first_name,
            lastName:casual.last_name,
            avatar:faker.image.avatar(),
            email:faker.internet.email(),
            phone_number:faker.phone.number(),
        },
        type:(["withdrawal", "deposit", "transfer", "airtime"])[random_for_types],
        charge: ([0, 0, 10.23, 1])[random_for_types],
        amount:faker.finance.amount()
    })
}

module.exports = transactions_list
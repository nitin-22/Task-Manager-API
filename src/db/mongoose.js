const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect( process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// So basically mongoose file connect to the mongoDB database

// const me = new User({
//     name: '  Mike ',
//     email: 'MIKE@mike.io  ',
//     password: 'phone098'
//     // age: -24
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })


// const task = new Task({
//     description: '   eat lunch',
//     // completed: false
// })

// task.save().then (() =>{
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })
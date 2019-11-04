const express = require('express')
const router = express.Router()

const User = require('../modules/user')

const mongoose = require('mongoose')
const db = "mongodb+srv://anbarasan:darkshadow@mangodb01-x6xja.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true}, err =>{

    if (err){
        console.log('Error' +err)
    } else {
        console.log('connected to mongodb')
    }
})

router.post('/register', function(req, res){
    let userData = req.body
    let user = new User(userData)
    user.save((error, registerUser) =>{
        if(error){
            console.log(error)
        } else {
            res.status(200).send(registerUser)
        }
    }) 
})

router.post('/login', function(req, res){
    let userData = req.body
    
    User.findOne({email: userData.email}, (error,user) =>{
        if(error){
            console.log(error)
        } else {
            if(!user){
                res.status(401).send('Invalid email')
            } else 
            if( user.password !== userData.password){
                res.status(401).send('Invalid password')
            }
            else{
                res.status(200).send(user)
            }
        }
    })
})

router.get('/events', (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  })
// router.get('/events', (req,res) =>{
//     let events = [
//         {
//             "id":"1",
//             "name":"ram",
//             "description":"Login event",
//             "date":"2019-04-23"
//         },
//         {
//             "id":"2",
//             "name":"sam",
//             "description":"Home event",
//             "date":"2019-04-27"
//         },
//         {
//             "id":"3",
//             "name":"sandy",
//             "description":"landing event",
//             "date":"2019-07-23"
//         },
//         {
//             "id":"6",
//             "name":"gokul",
//             "description":"group event",
//             "date":"2019-11-23"
//         }
//     ]
//     res.json(events)
// })

router.get('/special', (req,res) =>{
    let special = [
        {
            "id":"1",
            "name":"ram",
            "description":"Login event",
            "date":"2019-04-23"
        },
        {
            "id":"2",
            "name":"sam",
            "description":"Home event",
            "date":"2019-04-27"
        },
        {
            "id":"3",
            "name":"sandy",
            "description":"landing event",
            "date":"2019-07-23"
        },
        {
            "id":"6",
            "name":"gokul",
            "description":"group event",
            "date":"2019-11-23"
        }
    ]
    res.json(special)
})

router.get('/', function(req,res){
   res.send('From Api router')
})

module.exports = router
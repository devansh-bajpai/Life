const express = require('express')
const app = express()

const cors = require('cors');

const person = require('./models/Person');


app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000', // change this to your frontend URL
    credentials: true               // allow credentials like cookies if needed
  }));

app.get('/hello', (req, res) => {
    res.json({myMessage: "Hello welcome"})
})


app.post('/signup', async (req, res) => {

    if (req.body.password === req.body.confirmPassword){
        try{
            let personDetails = await person.create({
                email: req.body.email,
                password: req.body.password
            })

            res.json({message: "User created"})
        }
        catch(err) {
            console.log(err)
            res.json({message: "Error occured"})
        }
        
    }
    else {
        res.json({message: "Passwords do not match"})
    }



    console.log(req.body)
    // res.json({message: "Message sent from backend"})
})

app.post('/login', async (req, res) => {

    let userData = await person.findOne({email: req.body.email});
    if (!userData) {
        res.json({message: "Error"})
    }
    else {
        if (req.body.password === userData.password){
            // save in session
        }
        else {
            res.json({message: "Incorrect email or password"})
        }
    }


})

app.get('/logout', (req, res) => {
    // delete session
})


app.listen(5000, () => {
    console.log("App is listening on PORT 5000")
})
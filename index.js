// 1) Use npm to install ejs in the terminal


// 2) create a views and a public folder



// 3) In your public folder create an index.html and add your code from the planning document 
// You can also add your CSS files here too if applicable 




// 4) Now in your views folder create your EJS file and add your HTML code from your planning document



const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})


// 5) Paste in your data array of objects from the planning documents here. 

const posts = [
  {
    id: 1,
    username: "alex",
    content: "Just finished a long walk outside. Feeling calm and relaxed.",
    mood: "peaceful",
    likes: 12
  },
  {
    id: 2,
    username: "maya",
    content: "Had my favorite coffee today and it made my morning way better!",
    mood: "happy",
    likes: 18
  },
  {
    id: 3,
    username: "jordan",
    content: "A little stressed about homework but pushing through.",
    mood: "stressed",
    likes: 7
  },
  {
    id: 4,
    username: "sam",
    content: "Listening to music and chilling tonight.",
    mood: "relaxed",
    likes: 10
  },
  {
    id: 5,
    username: "taylor",
    content: "Excited for the weekend plans with friends!",
    mood: "excited",
    likes: 21
  }
];

// 6) Add static file middleware here

app.use(express.static('public'))
// 7) Set the view engine to ejs here
app.set('view engine', 'ejs')

// 8) Create a route handler to path / and send your index.html 
// run your server with node index.js to test it

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})

// 9) Create a route handler to your overview route from your planning document
// Pass in your data array


app.get("/posts", (req, res) => {
    res.render('posts', {posts})
})

// 10) Go to your EJS file and turn the HTML into EJS
// Test and run your server then submit if working (git add . git commit -m 'message' git push)


app.listen(3000, ()=> {
    console.log("Server Started")
})
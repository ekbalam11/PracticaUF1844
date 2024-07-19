//Modules from third parties
const express = require('express');
const morgan = require('morgan');

//Creating an instance of the express server
const app = express();
//Set the view engine "ejs":
app.set('view engine', 'ejs');

//Middleware to indicate express we want to process POST requests
app.use(express.urlencoded({ extended: true}));
//Middleware for the clien that able oding GET requests to the public resources (public folder)
app.use(express.static('public'));
//Let's log the clients's requests:
app.use(morgan('tiny'));

let images = [{
  id: 1,
  title: "happy cat",
  url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
}, {
  id: 2,
  title: "happy dog",
  url: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
  id:3,
  title: "cat snow",
  url: "https://images.pexels.com/photos/3923387/pexels-photo-3923387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}];

//Render home.ejs when the client do a GET request
app.get('/', (req, res)=>{
  res.render('home', {
    images 
  });
});

//New endopoint for the search view
app.get('/search', (req, res)=>{
     //array method to filter the DB
     const filteredImages = images.filter(()=> true);
  res.render('home', {
    image: filteredImages
  })
})
//New endopoint for GET requests in /add-image-form, then render
app.get('/add-image-form', (req, res) =>{
  res.render('form', {
    isImagePosted: undefined
  })
});
  //--------------------------------------------Setting up the server
    //Variable to indicate the port
    const PORT = process.env.PORT || 3000;
  app.listen(PORT, (req, res) => {
    console.log(`The server is listenting correctly in the port ${PORT} `);
  })
  
  
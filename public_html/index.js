const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const path = require("path")

app.use(express.static(__dirname + '/assets' ));
app.use(bodyParser.urlencoded({ extended: true }));
// Connect to MongoDB
mongoose.connect("mongodb+srv://mrohit03:rohit1999@cluster0.pf8ovgn.mongodb.net/contactDb")

const contactSchema ={
  name:String,
  email:String,
  comment:String,
}

const Note = mongoose.model("Note",contactSchema)

// Create an HTML form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+"/index.html"));
});

// Handle the form submission
app.post("/", (req, res) => {
  // Get the data from the form
  let newContact = new Note({
    name:req.body.name,
    email:req.body.email,
    comment:req.body.comment,
  });
  newContact.save();
  res.redirect("/")
  // Create a new document

  });

  // Insert the document into the database

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

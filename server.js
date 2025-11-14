const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/contactForm", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  msg: String
});

// Model
const Contact = mongoose.model("Contact", contactSchema);

// API Route to Save Data
app.post("/index", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: "Data saved successfully!" });
  } catch (error) {
    res.json({ message: "Error saving data", error });
  }
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});




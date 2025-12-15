const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.options("/*", cors());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
 .then(() => console.log("MongoDB Connected"))
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
app.post("/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: "Data saved successfully!" });
  } catch (error) {
    res.json({ message: "Error saving data", error });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});



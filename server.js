const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Serve main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Pokemon.html"));
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
  console.log("📥 प्राप्त डेटा:", { name, email, message });

  res.send(`
    <h2>शुक्रिया, ${name}!</h2>
    <p>हमने आपका संदेश प्राप्त कर लिया है।</p>
    <a href="/">🔙 वापस जाएँ</a>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ सर्वर चालू है: http://localhost:${PORT}`);
});

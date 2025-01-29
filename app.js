const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  const response = {
    email: "adewobiadetayo1@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/LivingHopeDev/hng-1",
  };

  res.status(200).json(response);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

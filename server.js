import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 3000;
const up = "UP";

app.listen(port, (req,res) => {
  console.log(`Server is running ${up} http://localhost:${port}`);
})

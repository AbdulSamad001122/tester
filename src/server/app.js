import express from "express";

let app = express();

let userId = 123;

app.get("/userId", (req, res) => {
  res.json({ userId: userId });
});

app.listen(9000, () => {
  console.log("Server is listenign");
});

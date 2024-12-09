import express from "express";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    res.status(200).json({ message: "Hello World" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/", async (req, res) => {
  const { data } = req.body;
  const user = data.users[1];
  const number = user.crm.tlf.number;

  try {
    // read/write row values
    res.status(200).json(number);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

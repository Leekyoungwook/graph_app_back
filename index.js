const PORT = 8000;

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(require('./routes/salesMapeRoute'));
app.use(require('./routes/visitorsRoute'));
app.use(require('./routes/customers'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
const express = require("express");
const app = express();
const clientRouter = require("./routes/router");
const port = 8000;

app.use(express.json());
app.use("/clients", clientRouter);

app.listen(port, () => console.log(`Server started on port ${port}`));

const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/task.routes");

const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json());

app.use("/api/task", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
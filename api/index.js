const app = require("./src/app");
require("dotenv").config();
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});

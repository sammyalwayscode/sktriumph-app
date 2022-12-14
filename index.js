const express = require("express");
require("./config/db");
const cors = require("cors");
const PORT = 2221 || process.env.PORT;
const app = express();
const productRoute = require("./router/productRouter");
const adminRoute = require("./router/adminRouter");
const blogRoute = require("./router/blogRouter");
const storeRoute = require("./router/stockListRouter");
const shipRoute = require("./router/shppingRouter");
const orderRoute = require("./router/orderedRouter");
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Readyπππ...");
});

app.use("/api/product", productRoute);
app.use("/api/admin", adminRoute);
app.use("/api/blog", blogRoute);
app.use("/api/stocklist", storeRoute);
app.use("/api/shipping", shipRoute);
app.use("/api/order", orderRoute);

app.listen(PORT, () => {
  console.log(`Server on PORT: ${PORT}`);
});

module.exports = app;

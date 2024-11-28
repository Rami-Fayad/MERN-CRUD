const express = require("express");
const conndb = require("./config/db");
const Productroutes = require('./routes/products.routes')
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/products', Productroutes);


app.listen(PORT, () => {
  conndb();
  console.log(`Server running on port ${PORT}`);
});


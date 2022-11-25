const express = require("express");
const router = express.Router();
const Api = require("../models/apiModel");

router.route("/createApi").post((req, res)=> {
  const data = req.body.newApis;
  for(let i=0; i<data.length; i++){
    const api = new Api({
      API: data[i].API,
      Description: data[i].Description,
      Auth: data[i].Auth,
      HTTPS: data[i].HTTPS,
      Cors: data[i].Cors,
      Link: data[i].Link,
      Category: data[i].Category
    });
    api.save();
  }
  console.log("APIs saved to MongoDB");
})

module.exports = router;


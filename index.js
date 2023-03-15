const express = require("express");
const cors = require("cors");

const db = require("./db/database");
const app = express();
const port = process.env.port || 3000;
const path = require('path');

const { outer } = require("express");

const product = require("./routes/product");



    (async () => {
        try{
            await db.authenticate();
            await db.sync();
            console.log("connected");
        }catch(error){
            
        }

    })();


 app.use(express.json());
 app.use(cors());






 //Rountes
 app.use("/product", product);
 




app.use("",  (req, res) => {
    res.send("boyphoneapi");
  });
  
 app.use("*", (req, res) => {
   res.send("404 - not found");
 });

  


 const rootPath = path.join(__dirname, './images');
app.use('/File', express.static(rootPath));


app.listen(port,() => {
    console.log('server on:', port);
});


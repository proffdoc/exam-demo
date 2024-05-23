const express = require('express')
const mongoose= require("mongoose")
const app = express()
const port = 2020
const {Schema} = mongoose
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
  

  app.get('/', (req, res) => {
  res.send('Hello World!')
})

const userName="mi7layp4g"
const password="cavidan21"

const DB_URL= "mongodb+srv://mi7layp4g:cavidan21@cluster0.zhndzav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



const ProductSchema = new Schema(
    {
      title: { type: String, require: true },
      image: { type: String, require: true },
      description: { type: String, require: true },
      author:{ type: String, require:true},
      price: { type: Number, require: true }
    }
  );
  
  const ProductModel = mongoose.mongoose.model("Products", ProductSchema);
  
  
  
  app.get('/api/products', async (req, res) => {
    try {
      const products = await  ProductModel.find({});
      if (products.length > 0) {
        res.status(200).send({message: "success", data: products})
      }else{
        res.status(204).send({message: "empty data", data: null})
      }
    } catch (error) {
      res.status(500).message({message: error.message})
    }
  })
  app.get('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const product = await ProductModel.findById(id);
      if (product) {
        res.status(200).send({message: "succes", data: product })
      } else {
        res.status(404).send({message: "not found", data: null })
      }
    } catch (error) {
      res.status(500).message({message: error.message})
    }
  })
  app.post('/api/products', async (req, res) => {
    try {
      const newProduct = new ProductModel({ ...req.body });
      await newProduct.save();
      const products = await ProductModel.find({});
  
      res.status(201).send({
        message: "created succesfully",
        newProduct: newProduct,
        allProducts: products,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
  app.delete('/api/products/:id', async(req, res) => {
    const { id } = req.params;
    try {
      const deletedProduct = await ProductModel.findByIdAndDelete(id)
      const products = await ProductModel.find({})
  
      res.status(200).send({
        message: "deleted successfully",
        deletedProduct: deletedProduct,
        allProducts: products
      }
      )
    } catch (error) {
      res.status(500).message({message: error.message})
    }
  })
  app.put('/api/products/:id', (req, res) => {
  })
  app.patch('/api/products/:id', (req, res) => {
  })


mongoose.connect(DB_URL)
  .then(() => {console.log('Connected!');app.listen(port, () => {
  console.log(`Example app listening on port ${port}, base url is http://localhost:${port} `)
})}
).catch((err)=>{
    console.log(err);
  })
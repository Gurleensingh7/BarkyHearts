const { PetProductModel } = require("../models/PetProducts");

const createNewPetProduct = async (request, response) => {
    try {
        const { description, title, price, brand, imageURL } = request.body;

        //create function is used to create new data
        const newProduct = await PetProductModel.create({ description, title, price, brand, imageURL })

        response.send(newProduct)

    } catch (error) {
        response.send(error.message);
    }
}


const getAllProducts = async (req,res)=>{
    try{
const productsData = await PetProductModel.find();

res.json({
    success:true,
    message:"Data Fetched",
    Data:productsData
})
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}


const getSingleProduct=async(req,res)=>{
    try{

        const {ID}=req.params;

        const productsData = await PetProductModel.findById(ID);

        if(!productsData){
            throw new Error("product not found")
        }
        res.json({
            success:true,
            message:"Data Fatched Successfully",
            Data:productsData,
        })
    }catch(error){
res.json({
    success:false,
    message:error.message,
})
    }
}
const deleteProduct = async (req, res) => {
    try {
      const { Id } = req.params;
  
      const deletedProduct = await PetProductModel.findByIdAndDelete(Id);
  
      if (!deletedProduct) {
        throw new Error("Product not found or already deleted");
      }
  
      res.json({
        success: true,
        message: "Product deleted successfully",
        data: deletedProduct
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message
      });
    }
  };
  


  const updateProduct = async (req, res) => {
    try {
      const { Id } = req.params;
      const updateData = req.body;
  
      const updatedProduct = await PetProductModel.findByIdAndUpdate(Id, updateData, { new: true });
  
      if (!updatedProduct) {
        throw new Error("Product not found or update failed");
      }
  
      res.json({
        success: true,
        message: "Product updated successfully",
        data: updatedProduct
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };
  
  
module.exports = {
    createNewPetProduct,
    getAllProducts,
    getSingleProduct   ,
    deleteProduct ,
    updateProduct
}
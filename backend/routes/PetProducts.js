const { createNewPetProduct, getAllProducts, getSingleProduct,deleteProduct ,updateProduct} = require('../controller/PetProducts');

const petProductRouter = require('express').Router();

petProductRouter.post("/add_new_product", createNewPetProduct);
petProductRouter.get("/Get_all_Products",getAllProducts);
petProductRouter.get("/Single_Products/:Id",getSingleProduct)
petProductRouter.delete("/delete/:Id",deleteProduct)
petProductRouter.put("/update/:Id",updateProduct)

module.exports = {
    petProductRouter,
}
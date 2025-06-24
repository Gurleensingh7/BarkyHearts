const mongoose = require('mongoose');

/* Create the Schema for Pet Products Model */
const PetProductSchema = new mongoose.Schema({
    title: { type: String, required: true  },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true , },
    imageURL: { type: String, required: true },
    createdAt : {type : Date , default : Date.now()}
})

/* Create a model with the desired schema */

const PetProductModel = new mongoose.model("petproducts" , PetProductSchema);

module.exports = {
    PetProductModel
}
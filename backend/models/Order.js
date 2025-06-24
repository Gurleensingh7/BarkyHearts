const mongoose = require("mongoose");

const placeOrderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user-model",
        required:true,
    },
    cartItems:{type:Array},

    address:{
        street:{type:String,required:true},
        city:{type:String,required:true},
        state:{type:String},
        postalCode:{type:String,required:true},
        country:{type:String,required:true},
    },

    payment:Number,

    paymentMethod:{
        type:String,
        default:"Cash-on-Delivery",
        required:true,
    },

    orderStatus:{
        type:String,
        enum:[
            "Order-Confirmed",
            "Being-Processed",
            "Shipped",
            "Delivered",
            "Rejected",
        ],
        default:"Order-Confirmed"
    },

    checkoutData:{
        type:Date,
        default:Date.now,
    },
});

const PlaceOrder = mongoose.model("PlaceOrder",placeOrderSchema);

module.exports = PlaceOrder;
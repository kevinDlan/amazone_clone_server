const mongoose = require('mongoose');
const {productSchema} = require('./product');

const orderSchema = mongoose.Schema(
{
    products:[{
        product:productSchema,
        quantity:{
            type: Number,
            require:true
        }
    }],
    totalPrice:{
        type:Number,
        require:true,
    },
    address:{
        type:String,
        require:true
    },
    userId:
    {
        type:String,
        require:true
    },
    orderAt:
    {
        type:Number,
        require:true,
    },
    status:
    {
        type:Number,
        default:0
    }
});

const Order = mongoose.model('orders',orderSchema)

module.exports = Order;
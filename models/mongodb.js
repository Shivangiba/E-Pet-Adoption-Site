import mongoose from "mongoose";

const petSchema = mongoose.Schema({
    petid:{type:Number,required:true},
    name:{ type: String, required: true },
    species:{ type: String, required: true },
    age:{ type: Number, required: true },
    available:{ type: Boolean, default: true },
    image:{ type:String,required:true},
    catagory:{type:String,required:true}
});
let Pet = mongoose.model('Pet', petSchema);
export default Pet;

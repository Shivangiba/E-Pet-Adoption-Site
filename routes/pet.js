
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Pet from '../models/mongodb.js';
// const app = express();
const PORT = process.env.PORT || 4300; // Dynamic port assignment

// MongoDB connection
mongoose.connect("mongodb+srv://SJ:Jadeja1703@mydatabase.wlih1.mongodb.net/myDatabaseName", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to database"))
.catch(err => console.error("Could not connect to MongoDB:", err));

// Middleware

const router = express.Router(); // Corrected from express.router() to express.Router()
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));





// Get all pets
router.get('/pets', async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get pet by ID
router.get('/pets/:id', async (req, res) => {
    try {
        const pet = await Pet.find({petid:parseInt(req.params.id)}); // Changed to findById
        if (!pet) return res.status(404).json({ message: "Pet not found" });
        res.json(pet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update pet
router.patch('/pets/update/:id', async (req, res) => {
    try {
        const pet = await Pet.findById({petid:req.params.id}); // Changed to findById
        if (!pet) return res.status(404).json({ message: "Pet not found" });

        pet.name = req.body.name || pet.name; // Preserve existing values
        const updatedPet = await pet.save();
        res.json(updatedPet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new pet
router.post('/pets/add', async (req, res) => {
    const pet = new Pet(req.body);
    try {
        const savedPet = await pet.save();
        res.status(201).json(savedPet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a pet
router.delete('/pets/delete/:id', async (req, res) => {
    try {
        const result = await Pet.findByIdAndDelete({petid:req.params.id}); // Changed to findByIdAndDelete
        if (!result) return res.status(404).json({ message: "Pet not found" });
        res.json({ message: "Pet deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
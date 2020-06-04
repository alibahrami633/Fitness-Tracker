const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        desfault: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true,
                unique: true
            },
            name: {
                type: String,
                trim: true
            },
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
});



const Workout = mongoose.model("NotWorkoute", WorkoutSchema);

module.exports = Workout;
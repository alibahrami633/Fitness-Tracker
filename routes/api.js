const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .sort({ day: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});



module.exports = router;
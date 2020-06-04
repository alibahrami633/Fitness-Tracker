const router = require("express").Router();
const db = require("../models");


// html routers
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: "./public" });
});

router.get('/exercise', (req, res) => {
    res.sendFile('exercise.html', { root: "./public" });
});

router.get('/stats', (req, res) => {
    res.sendFile('stats.html', { root: "./public" });
});

// app routers
router.get("/api/workouts", async function (req, res) {
    try {
        const result = await db.Workout.find({});
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(400).send("Error fetching Workouts list!");
    }
});

router.get("/api/workouts/range", async function (req, res) {
    try {
        const result = await db.Workout.find({});
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(400).send("Error fetching Workouts list!");
    }
});

router.post("/api/workouts", async function ({ body }, res) {
    try {
        const result = await db.Workout.create(body);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(400).send("Add workout failed!");
    }
});

router.put("/api/workouts/:id", async function (req, res) { //  { body }
    try {
        let id = req.params.id;
        let body = req.body;
        // console.log("---------------> ID = " + id);
        // console.log(JSON.stringify(body));
        // let { id } = body;
        const result = await db.Workout.findByIdAndUpdate({ _id: id }, { $push: { exercises: body } });
        // console.log(result);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(200).send("Edit Workout failed!");
    }
});

module.exports = router;
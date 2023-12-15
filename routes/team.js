const router = require("express").Router();
const Team = require("../models/Team");

// CREATE TEAM
router.post("/", async (req, res) => {
  const newTeam = new Team(req.body);
  try {
    const savedTeam = await newTeam.save();
    res.status(200).json(savedTeam);
  } catch (error) {
    res.status(200).json(error);
  }
});

//UPDATE
router.put("/:id", async(req, res) => {
    try {
        const updatedTeam = await Team.findByIdAndUpdate(req.params.id, {
            $set : req.body
        }, { new: true })
        res.status(200).json(updatedTeam);
    } catch (err) {
        res.status(500).json(err);
    }
})

//DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Team.findByIdAndDelete(req.params.id);
        res.status(200).json("Team has been Deleted")
    } catch (error) {
        res.status(500).json(error);
    }
})
//GET TEAM
router.get("/find/:id", async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET ALL TEAMS
router.get("/", async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
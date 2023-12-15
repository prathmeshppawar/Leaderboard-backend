const router = require("express").Router();
const Event = require("../models/Event");

// CREATE EVENT
router.post("/", async (req, res) => {
  const newEvent = new Event(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (error) {
    res.status(200).json(error);
  }
});

//UPDATE EVENT
router.put("/:name", async (req, res) => {
    try {
    const foundEvent = await Event.findOne({ name: req.params.name });
    const updatedEvent = await Event.findByIdAndUpdate(
      foundEvent._id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedEvent);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE EVENT
router.delete("/:id", async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json("Event has been Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET EVENT
router.get("/find/:name", async (req, res) => {
    try {
    const foundEvent = await Event.findOne({ name: req.params.name });
    res.status(200).json(foundEvent);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL EVENTS
router.get("/", async (req, res) => {
  try {
    const Events = await Event.find();
    res.status(200).json(Events);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

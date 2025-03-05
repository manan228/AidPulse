import express from "express";
import Victim from "../models/victim.js";

const router = express.Router();

// GET all victims
router.get("/victims", async (req, res) => {
  try {
    const victims = await Victim.find();
    res.json(victims);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific victim by ID
router.get("/victims/:id", async (req, res) => {
  try {
    const victim = await Victim.findById(req.params.id);
    if (!victim) {
      return res.status(404).json({ message: "Victim not found" });
    }
    res.json(victim);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new victim
router.post("/victims", async (req, res) => {
  const victim = new Victim(req.body);
  
  try {
    const newVictim = await victim.save();
    res.status(201).json(newVictim);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a victim
router.put("/victims/:id", async (req, res) => {
  try {
    const victim = await Victim.findById(req.params.id);
    if (!victim) {
      return res.status(404).json({ message: "Victim not found" });
    }
    
    const updatedVictim = await Victim.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );
    res.json(updatedVictim);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a victim
router.delete("/victims/:id", async (req, res) => {
  try {
    const victim = await Victim.findById(req.params.id);
    if (!victim) {
      return res.status(404).json({ message: "Victim not found" });
    }
    
    await Victim.findByIdAndDelete(req.params.id);
    res.json({ message: "Victim deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
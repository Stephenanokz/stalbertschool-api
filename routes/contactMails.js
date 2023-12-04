const router = require("express").Router();
const ContactMail = require("../models/ContactMail");
const verify = require("../middlewares/verifyToken");

//CREATE
router.post("/", async (req, res) => {
    const newContactMail = new ContactMail(req.body);
    try {
      const savedContactMail = await newContactMail.save();
      res.status(200).json(savedContactMail);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET ONE
router.get("/find/:id", verify, async (req, res) => {
  try {
    const contactMail = await ContactMail.findById(req.params.id);
    res.status(200).json(contactMail);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", async (req, res) => {
  try {
    const contactMails = await ContactMail.find();
    res.status(200).json(contactMails);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedContactMail = await ContactMail.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(201).json(updatedContactMail);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to update a mail!");
  }
});

//DELETE
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await ContactMail.findByIdAndDelete(req.params.id);
      res.status(200).json("Mail has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

module.exports = router;
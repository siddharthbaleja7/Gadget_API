const express = require("express");
const {
  getGadgets,
  addGadget,
  updateGadget,
  deleteGadget,
  selfDestruct,
} = require("../controllers/gadgetController");
const authenticate = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authenticate, getGadgets);
router.post("/", authenticate, addGadget);
router.patch("/:id", authenticate, updateGadget);
router.delete("/:id", authenticate, deleteGadget);
router.post("/:id/self-destruct", authenticate, selfDestruct);

module.exports = router;

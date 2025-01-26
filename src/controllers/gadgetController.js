const Gadget = require("../models/gadget");
const generateCode = require("../utils/generateCode");

exports.getGadgets = async (req, res) => {
  const { status } = req.query;
  const where = status ? { status } : {};
  const gadgets = await Gadget.findAll({ where });
  const gadgetsWithProbability = gadgets.map(gadget => ({
    ...gadget.toJSON(),
    missionSuccessProbability: `${Math.floor(Math.random() * 100)}%`,
  }));
  res.json(gadgetsWithProbability);
};

exports.addGadget = async (req, res) => {
  const { name } = req.body;
  const gadget = await Gadget.create({ name });
  res.status(201).json(gadget);
};

exports.updateGadget = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;
  const gadget = await Gadget.update({ name, status }, { where: { id } });
  res.json(gadget);
};

exports.deleteGadget = async (req, res) => {
  const { id } = req.params;
  const gadget = await Gadget.update(
    { status: "Decommissioned", decommissionedAt: new Date() },
    { where: { id } }
  );
  res.json(gadget);
};

exports.selfDestruct = async (req, res) => {
  const { id } = req.params;
  const confirmationCode = generateCode();
  res.json({ message: `Self-destruct initiated. Code: ${confirmationCode}` });
};

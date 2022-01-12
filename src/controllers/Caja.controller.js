import Caja from "../models/Caja.model";
const cajaController = {};

// get Caja
cajaController.getCajas = async (req, res) => {
  try {
    const cajas = await Caja.find().lean().sort({ _id: "desc" });
    res.json(cajas);
  } catch (error) {
    console.log(error);
  }
};

// create Caja
cajaController.createCaja = async (req, res) => {
  try {
    const cajas = await new Caja(req.body);
    const newCaja = await cajas.save();
    res.json(newCaja);
  } catch (error) {
    console.log(error);
  }
};

// delete Caja
cajaController.deleteCaja = async (req, res) => {
  try {
    const { id } = req.params;
    await Caja.deleteOne({ _id: id });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

export default cajaController;

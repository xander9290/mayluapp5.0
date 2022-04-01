import { Schema, model } from "mongoose";

const compuestoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    unidad: {
      type: String,
      required: true,
      trim: true,
    },
    medida: {
      type: Number,
      required: true,
      trim: true,
    },
    price: { type: Number, required: true, default: 0 },
    punitario: { type: Number, required: true, default: 0 },
    insumo: { type: Number, required: true, default: 0 },
    rendimiento: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: { updatedAt: false },
  }
);

export default model("Compuestos", compuestoSchema);

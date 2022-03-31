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
  },
  {
    timestamps: { updatedAt: false },
  }
);

export default model("Compuestos", compuestoSchema);

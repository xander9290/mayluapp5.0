import { Schema, model } from "mongoose";

const cajaSchema = new Schema(
  {
    tipo: { type: String, required: true },
    concepto: { type: String, required: true },
    importe: { type: Number, required: true, default: 0 },
    createdBy: { type: String, required: true },
  },
  { timestamps: { updatedAt: false } }
);

export default model("Cajas", cajaSchema);

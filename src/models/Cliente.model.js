import { Schema, model } from "mongoose";

const clienteSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    tel: { type: String, required: true, trim: true },
    calle: { type: String, required: true },
    cruces: { type: String, required: true },
    colonia: { type: String, required: true },
    obs: { type: String },
    codigo: { type: Number, required: true },
    createdBy: { type: String, required: true },
    lastEdit: { type: Date },
  },
  { timestamps: { updatedAt: false } }
);

export default model("Clientes", clienteSchema);

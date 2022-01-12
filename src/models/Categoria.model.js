import { Schema, model } from "mongoose";

const categoriaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    fondo: {
      type: String,
      required: true,
      default: "#FFFFFF",
    },
    createdBy: {
      type: String,
      required: true,
    },
    lastEdit: Date,
  },
  {
    timestamps: {
      updatedAt: false,
    },
  }
);

export default model("Categorias", categoriaSchema);

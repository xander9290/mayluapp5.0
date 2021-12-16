import app from "./app";
import "./database";

app.listen(app.get("port"), () => {
  console.log("Servidor iniciado en puerto ", app.get("port"));
});

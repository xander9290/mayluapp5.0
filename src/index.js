import app from "./app";
import open from "open";
import "./database";

app.listen(app.get("port"), () => {
  console.log("Servidor iniciado en puerto ", app.get("port"));
});
(async () => {
  console.log("Iniciando aplicación");
  await open(`http://localhost:${app.get("port")}`);
})();

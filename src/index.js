import app from "./app";
import open from "open";
import "./database";

app.listen(app.get("port"), () => {
  console.log("Servidor iniciado en puerto ", app.get("port"));
});
(async () => {
<<<<<<< HEAD
  await open(`http://localhost:${app.get("port")}`);
=======
await open(`http://localhost:${app.get("port")}`);
>>>>>>> 59ecced73321a9eebdb9d4830ea0ce8fc76c8592
})();

let pathArr = [];
//llamando modula path y fs
const path = require("path");
const fs = require("fs");
//joining path of directory
const directoryPath = path.join(__dirname, "images");
//pasa la ruta del directorio y una función de callback
fs.readdir(directoryPath, function (err, files) {
  //mensaje de error
  if (err) {
    return console.log(`No es posible escanear el directorio: ${err}`);
  }

  files.forEach(function (file) {
    /* console.log(path.join(__dirname, "images") + "/" + file); */
    pathArr.push(path.join(__dirname, "images") + "/" + file);
    fs.writeFileSync("imagepath.json", JSON.stringify(pathArr));
  });
});

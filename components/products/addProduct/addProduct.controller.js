const newPool = require("../../../database/database");
const sqlText = require("./addProduct.sql");

async function addProductController(
  codigo,
  descripcion,
  listaDePrecios,
  imagen,
  productoParaLaVenta,
  porcentajeIva
) {
  try {
    const result = await newPool.query(sqlText[0], [
      codigo,
      descripcion,
      listaDePrecios,
      imagen,
      productoParaLaVenta,
      porcentajeIva,
    ]);
    console.log(result.rowCount);
    if(result.rowCount===1) return 200
    else return 400;

  } catch (e) {
    return `Error ${e}`;
  }
}

module.exports = addProductController;

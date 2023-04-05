const {Router} = require("express");
const router= Router();
const addProductController = require('./addProduct.controller');

router.post('/',async(req, res)=>{
    try{
        const { codigo, descripcion, listaDePrecios, imagen, productoParaLaVenta, porcentajeIva } = req.body;
        const result = await addProductController(codigo, descripcion, listaDePrecios, imagen, productoParaLaVenta, porcentajeIva)
        if (result===200) return res.status(200).json({status: 'agregado'})
        else return res.status(200).json({status: 'no agregado' })
    } catch(e) {
        return res.send(`Error \addProduct`);
    }
})

module.exports = router;
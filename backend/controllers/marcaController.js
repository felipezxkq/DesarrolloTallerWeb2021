var Marca = require('../modelos/marca.js');  


     
function guardar(req,res){

    try{
      
        let marca = new Marca()
        marca.descripcion = req.body.descripcion

        marca.save((err, marcastore) => {
    
            if (err) return res.status(400).send({mensaje:`Error al intentar guardar en base de datos> ${err}`})
    
            res.status(200).send({ marca: marcastore })
    
        })
    } catch (error) {
        res.status(500).send({ mensaje: `error:` + error })
    }
}

function actualizar(req,res){

    try{
      
        let descripcion = req.body.descripcion


        Marca.findByIdAndUpdate(marcaId, {descripcion: descripcion}, (err, marca) => {
    
            if (err) return res.status(500).send({mensaje:`Internal error`})
            if (!marca) return res.status(404).send({mensaje:`marca not found`})
    
            res.status(200).send({ message: 'Editado correctamente'})
    
        })
    } catch (error) {
        res.status(500).send({ mensaje: `error:` + error })
    }
}

    function listar(req,res)
    {
        Marca.find({}, (err, marcas) => {
            if (err) return res.status(500).send({ message: 'error al realizar la peticion' })
            res.status(200).send({ marcas })
        })
    }

    function recupera(req,res)
    {
        let idmarca = req.params.id
        Marca.findById(idmarca, (err, marca) => {
            if (err) return res.status(500).send({ message: `error al realizar la peticion> ${err}` })
            if (!marca) return res.status(404).send({ message: 'Error marca no existe' })
    
            res.status(200).send({ marca })
        })
    }

    function eliminar(req,res)
    {
        let idmarca = req.params.id
        Marca.findByIdAndDelete(idmarca, (err) => {
            if (err) return res.status(500).send({ message: 'error al eliminar> ${err}'  })
    
            res.status(200).send({ message: 'Marca eliminada papu' })
            
        })
    }
    
    module.exports = {
        guardar,
        listar,
        actualizar,
        recupera,
        eliminar
    };
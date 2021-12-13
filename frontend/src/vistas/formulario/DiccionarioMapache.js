import React,{Fragment,useState} from 'react'

const DiccionarioMapache = () =>{
    const [modelo,setModelo] = useState("")
    const [marca,setMarca] = useState("")
    const [patente,setPatente] = useState("")
    const [autos, setAutos] = useState([])


    const handleInputChangeModelo = (event) => {
        //console.log(event.target.value)
        setModelo(event.target.value)
    }

    const handleInputChangeMarca = (event) => {
        //console.log(event.target.value)
        setMarca(event.target.value)
    }

    const handleInputChangePatente = (event) => {
        //console.log(event.target.value)
        setPatente(event.target.value)
    }

    const enviarDatos = ()=>{

        if (modelo === "" || marca === "") {
            alert("Campos requeridos");
            return false;
        }

        if (patente.length !== 6){
            alert("La patente debe tener 6 digitos");
            return false;
        }

        console.log("Enviando datos nombre: "+modelo+" y apellido: "+marca)

        let nuevo = {
            model: modelo,
            brand: marca,
            patent: patente
        }
        setAutos(autos => [...autos, nuevo])
        setModelo("")
        setMarca("")
    }

    return(
        <Fragment>
            <h1>Formulario</h1>
                <div>
                    <div>
                        <input type="text" placeholder="Modelo" name="modelo" onChange={handleInputChangeModelo} required></input>
                    </div>

                    <div>
                        <input type="text" placeholder="Marca" name="marca" onChange={handleInputChangeMarca} required></input>
                    </div>

                    <div>
                        <input type="text" placeholder="Patente" name="patente" onChange={handleInputChangePatente}></input>
                    </div>

                    <div>
                        <button onClick={enviarDatos}>Enviar</button>
                    </div>

                    <div className="autos">
                        {autos.map((auto) => (
                            <li>{auto.model} {auto.brand} {auto.patent}</li>
                        ))}
                    </div>
                </div>
        </Fragment>
        
    )
}

export default DiccionarioMapache
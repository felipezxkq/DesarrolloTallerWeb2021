import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { useMediaQuery } from 'react-responsive';
import { Container, Grid, Button, Typography, TextField } from '@material-ui/core';
import MaterialDatatable from 'material-datatable';
import './PersonaMaterial.css';




const App = () => {
    const [nombre, setPatente] = useState("")
    const [marca, setMarca] = useState("")
    const [autos, setAutos] = useState([])
    const [disabled, setDisabled] = useState(true);
    var id;

    const handleInputChangePatente = (event) => {
        setPatente(event.target.value)
    }

    const handleInputChangeMarca = (event) => {
        setMarca(event.target.value)

    }

    const enviarDatos = () => {
      guardarPersona();
    }

    const borrarDatos = () =>{
      eliminarPersona();
    }

    useEffect(()=>{

        getAutos()
    },[])
    async function getAutos() {
        try {
          const response = await axios.get('http://localhost:5000/api/autosmarca');
          if(response.status == 200)
          {
            setAutos(response.data.autos)
            console.error("BBBBBBBBBB");
            console.log("AUTO: "+autos)
          }
         
        } catch (error) {
          console.error(error+"AAAAAAAAAAAAAA");
        }
      }
    
      function guardarPersona()
      {
        axios.post('http://localhost:5000/api/autos/', {
            nombre: nombre,
            marca: marca,
            grupo:7
          })
          .then(function (response) {

                if(response.status==200)
                {
                    alert("Registro correcto")
                    getAutos()

                }else{
                    alert("Error al guardar")
                }
            
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      function eliminarPersona()
      {
        axios.delete('http://192.99.144.232:5000/api/autos/'+id)
          .then(function (response) {
                if(response.status==200)
                {
                    alert("Eliminacion correcta")
                    getAutos()

                }else{
                    alert("Error al guardar")
                }
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      const columns = [
        {
         name: "Patente",
         field: "patente",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "Marca",
         field: "marca",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
          name: "Año",
          field: "anio",
          options: {
           filter: true,
           sort: false,
          }
         },
       ];
        
       const data = [];
      
       
       for (var auto of autos){
           data.push({patente: auto.patente, marca: auto.marca.descripcion, id: auto._id, anio: auto.anio})  
        }
        
        
      const handleRowClick = (rowData, rowMeta) => {
          id=rowData.id;
          setDisabled(false);
          
      };
      const options = {
        filterType: 'checkbox',
        onlyOneRowCanBeSelected:true,
        onRowClick: handleRowClick, 
      };

    return (
      <Container maxWidth="md">
      <Grid item xs={6} md={6}>  
          <Grid container spacing={3}>
            <Grid item xs={6} md={12}>
                <Typography variant="h6">
                    Registro de Autos
                </Typography>
            </Grid>
            <Grid item xs={6} md={12} fullWidth>
                <TextField id="patente" label="Patente" variant="outlined" fullWidth  onChange={handleInputChangePatente}/>
            </Grid>
            <Grid item xs={6} md={12}>
                <TextField id="marca" label="Marca" variant="outlined" fullWidth onChange={handleInputChangeMarca} />
            </Grid>
            <Grid item xs={6} md={12}>
                <TextField id="anio" label="Año" variant="outlined" fullWidth onChange={handleInputChangeMarca} />
            </Grid>
            <Grid item xs={6} md={7}>
                <Button variant="contained" color="primary" fullWidth onClick={enviarDatos}>Guardar</Button>
            </Grid>

            <Grid item xs={12} md={12} className="tabla">
              <MaterialDatatable
                title={"Lista de autos"}
                data={data}
                columns={columns}
                options={options}
              /> 
            </Grid> 
        </Grid>
      
        
      </Grid>
      <Grid item xs={6} md={6}></Grid>

    </Container>
   )
}
/*
            <Grid item xs={6} md={7}>
                <Button variant="contained" color="secondary" fullWidth disabled={disabled} onClick={borrarDatos}>Eliminar</Button>
            </Grid>
            */

export default App

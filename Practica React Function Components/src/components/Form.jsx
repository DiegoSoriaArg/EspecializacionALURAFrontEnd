import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import {FormGroup,FormControlLabel } from "@mui/material";
import { useState } from "react";

function FormSingUp (props){

    const {handleSubmit} = props;

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(false);

    const [errorsName, setErrorsName] = useState({
        nombre: {
            error: false,
            message: "Deben ser al menos 4 caracteres en nombre"
        }
    });

    const [errorsLastName, setErrorsLastName] = useState({
        apellido: {
            error: false,
            message: "Deben ser al menos 4 caracteres en apellido"
        }
    });

    const [errorsEmail, setErrorsEmail] = useState({
        email: {
            error: false,
            message: "Es necesario este formato: xxxx@xxx.com"
        },
    });

    const validar = (valor, atributo) => {

        if(atributo === "nombre"){
            if(valor.length >= 4){
                return { nombre: { error: false, message: "" }}
            } else {
                return { nombre: { error: true, message: "Deben ser al menos 4 caracteres en nombre" }}
            }
        }

        if(atributo === "apellido"){
            if(valor.length >= 4){
                return { apellido: { error: false, message: "" }}
            } else {
                return { apellido: { error: true, message: "Deben ser al menos 4 caracteres en apellido" }}
            }
        }

        if(atributo === "email"){
            if(valor.length >= 10 && !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]$/.test(valor)){
                return { email: { error: false, message: "" }}
            } else {
                return { email: { error: true, message: "Es necesario este formato: xxxx@xxx.com" }}
            }
        }
    }

    return <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit({
                    nombre, apellido, email, prom, nov
                });
            }}>
        <TextField 
            id="nombre" 
            label="Nombre" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            onChange={(e) => {
                setNombre(e.target.value);
            }}
            value={nombre}
            error={errorsName.nombre.error}
            helperText={errorsName.nombre.error ? errorsName.nombre.message : ""}
            onBlur={(e) => {
                setErrorsName(
                    validar(e.target.value, "nombre")
                )
            }}
        />
        <TextField 
            id="apellido" 
            label="Apellido" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            onChange={(e) => {
                setApellido(e.target.value);
            }}
            value={apellido}
            error={errorsLastName.apellido.error}
            helperText={errorsLastName.apellido.error ? errorsLastName.apellido.message : ""}
            onBlur={(e) => {
                setErrorsLastName(
                    validar(e.target.value, "apellido")
                )
            }}
        />
        <TextField 
            id="email" 
            label="Correo Electronico" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            value={email}
            error={errorsEmail.email.error}
            helperText={errorsEmail.email.error ? errorsEmail.email.message : ""}
            onBlur={(e) => {
                setErrorsEmail(
                    validar(e.target.value, "email")
                );
            }}
        />
        <FormGroup>
            <FormControlLabel 
                control={
                    <Switch
                        checked={prom} 
                        onChange={(e) => {
                            setProm(e.target.checked);
                        }} 
                    />
                } 
                label="Promociones"
            />
            <FormControlLabel 
                control={
                    <Switch
                        checked={nov} 
                        onChange={(e) => {
                            setNov(e.target.checked);
                        }}
                    />
                } 
                label="Novedades"
            />
        </FormGroup>
        <Button variant="contained" color="error" type="submit">Registrarse</Button>
    </form>
}

export default FormSingUp;
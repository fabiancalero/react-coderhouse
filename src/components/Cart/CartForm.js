import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

function CartForm ({endBuy}){
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		phone: "",
		email: "",
		repeat_email: "",
	});

	function handleOnChange(event){
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		});
	}

	function handleEndBuy () {
		endBuy(formData);
	}
	
	return (
		<Box>
			<Typography style={{marginBottom:"15px"}}>Complete los datos para finalizar su compra</Typography>
			<form noValidate onSubmit={handleSubmit(handleEndBuy)}>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<TextField
							name="name"
							label="Nombre"
							variant="outlined"
							value={formData.name}
							{...register("name", { required: true, onChange: (e) => handleOnChange(e), })}
							required
							error={!!errors["name"]}
							helperText={errors["name"] ? "Campo requerido" : ""}
							
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							name="surname"
							label="Apellido"
							variant="outlined"
							value={formData.surname}
							{...register("surname", { required: true, onChange: (e) => handleOnChange(e), })}
							required
							error={!!errors["surname"]}
							helperText={errors["surname"] ? "Campo requerido" : ""}
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							name="phone"
							label="Telefono"
							variant="outlined"
							value={formData.phone}
							{...register("phone", { required: true, onChange: (e) => handleOnChange(e), })}
							required
							error={!!errors["phone"]}
							helperText={errors["phone"] ? "Campo requerido" : ""}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							name="email"
							label="Email"
							variant="outlined"
							value={formData.email}
							{...register("email", { required: true, onChange: (e) => handleOnChange(e),})}
							required
							error={!!errors["email"]}
							helperText={errors["email"] ? "Campo requerido" : ""}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							name="repeat_email"
							label="Repetir Email"
							variant="outlined"
							value={formData.repeat_email}
							{...register("repeat_email", {
								onChange: (e) => handleOnChange(e),
								required:{value:true,message:'Campo requerido'},
								validate:{
									mails: m => m=== formData.email || "Los emails deben coincidir"
								}
							})}
							required
							error={!!errors["repeat_email"]}
							helperText={errors["repeat_email"] ? errors["repeat_email"]["message"] : ""}
						/>
					</Grid>
					<Grid item xs={12} style={{textAlign: "center"}}>
						<Button type="submit" variant="contained" >
							Finalizar compra
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
}

export default CartForm;

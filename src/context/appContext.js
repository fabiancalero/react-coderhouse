import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";
import React, { createContext, useState } from "react";

const appContext = createContext();

function AppContextProvider(props){
	const [message, setMessage] = useState ("");
	const [severity, setSeverity] = useState ("");
	const [loading, setLoading] = useState(false);

	function handleLoading(load) {
		setLoading(load);
	}

	function handleMessage(msg, sev){
		setMessage(msg);
		setSeverity(sev);
	}
	
	function handleClose() {
		setMessage("");
		setSeverity("");
	}
	
	return (
		<appContext.Provider value={{
			isLoading: loading,
			handleMessage,
			handleLoading,
		}}>
			{props.children}

			<Backdrop invisible={!loading} open={loading}>
				<CircularProgress color="inherit" />
			</Backdrop>

			{
				message !== "" && severity !== "" &&
				<Snackbar open={message !== ""} autoHideDuration={3000} onClose={(handleClose)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
					<Alert variant="filled" onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
						{message}
					</Alert>
				</Snackbar>
			}
		</appContext.Provider>
	);
}

export {appContext, AppContextProvider};
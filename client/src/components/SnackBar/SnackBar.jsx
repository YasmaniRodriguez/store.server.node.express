import React from "react";
import { Snackbar, makeStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { SnackBarStyles } from "./SnackBarStyles";

const useStyles = makeStyles((theme) => SnackBarStyles(theme));

export const SnackBarComponent = (props) => {
	const { catchedError, setCatchedError } = props;
	const classes = useStyles();

	const { open, message } = catchedError;

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setCatchedError({ open: false, message: "" });
	};

	return (
		<Snackbar
			className={classes.container}
			autoHideDuration={5000}
			open={open}
			message={message}
			onClose={handleClose}
			anchorOrigin={{ vertical: "top", horizontal: "center" }}>
			<Alert onClose={handleClose} severity='error'>
				{message}
			</Alert>
		</Snackbar>
	);
};

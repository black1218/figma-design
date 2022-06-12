import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    cLabel: {
      "&.Mui-focused": {
        color: "#2400FF",
      },
    },
    root: {
      "&.MuiFilledInput-root": {
        border: "1px solid #D8D8D8",
        borderRadius: "13px",
        background: "#fff",
        "&&&:before": {
          borderBottom: "none",
        },
        "&&:after": {
          borderBottom: "none",
        },
      },
      "&.Mui-focused": {
        "&.MuiInputLabel-root": {
          color: "red",
        },
        border: "1px solid #D8D8D8",
        borderRadius: "13px",
        background: "#fff",
        ".MuiInput-underline": {},
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      },
    },
  })
);

const Input = (props) => {
  const classes = useStyles();
  const { label, placeholder } = props;

  return (
    <TextField
      fullWidth
      id="outlined"
      label={label}
      placeholder={placeholder}
      multiline
      variant="filled"
      InputProps={{ className: classes.root }}
      InputLabelProps={{
        classes: {
          root: classes.cLabel,
        },
      }}
    />
  );
};

export default Input;

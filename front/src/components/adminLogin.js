import React from "react";
import { React, useState, useContext } from "react";
import { Context } from "../context/Context";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));
function adminLogin() {

const style = useStyles();
const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

 


  function usernamechanged(event) {
    setusername(event.target.value);
  }

  function passwordchanged(event) {
    setpassword(event.target.value);
  }
  function dispatchLs(){
    dispatch({type:"LoginStart"})
  }
     const  onSubmit=async(event)=> {

      event.preventDefault();
      dispatchLs()
      try{
        const res= await axios.post("http://localhost:3000/app/login", {

          username: username,
          password: password,
        })
        dispatch({type:"LoginSuccess",payload:res.data})
        navigate("/Dashboard")
      }catch(err) {
          dispatch({type:"LoginFailure"})
          alert("try again");
        };
  return (
    <div className={style.root}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Login </h2>
          </Grid>

          <TextField
            label="Username"
            placeholder="Enter username"
            onChange={usernamechanged}
            fullWidth
            required
          />

          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            onChange={passwordchanged}
            fullWidth
            required
          />
          <Typography>
            <b>Min 6 charecters. alpha/numeric characters</b>
          </Typography>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            disabled={isFetching}
            onClick={onSubmit}
          >
            login
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default adminLogin;

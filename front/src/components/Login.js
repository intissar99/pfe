import {React ,useState}from "react";

import axios from "axios";
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

function Login() {
    const style = useStyles();
    const paperStyle = {
      padding: 20,
      height: "70vh",
      width: 280,
      margin: "20px auto",
    };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const btnstyle = { margin: "8px 0" };
  
    
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
  
   
    function usernamechanged(event) {
      setusername(event.target.value);
    }
  
    function passwordchanged(event) {
      setpassword(event.target.value);
    }
  
    function onSubmit(event) {
      event.preventDefault();
      axios.post("http://localhost:3000/app/login", {

          username: username,
          password: password,
        })
        .then(() => {
          alert("user added");
        })
        .catch(() => {
          alert("try again");
        });
    }
  return (
      <div className={style.root}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign Up </h2>
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
            onClick={onSubmit}
          >
            login
          </Button>
         
        </Paper>
      </Grid>
  </div>
  )}

export default Login;

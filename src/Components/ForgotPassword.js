import * as React from "react";
import { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Alert from "@mui/material/Alert";
import "./ForgotPassword.css";
import insta from "../Assets/Instagram.JPG";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { database, storage } from "../firebase";

export default function Signup() {
  const useStyles = makeStyles({
    text1: {
      
      textAlign: "center",
    },
    card2: {
      height: "6vh",
      marginTop: "2%",
    },
  });
  const classes = useStyles();
  const [email, setEmail] = useState("");
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { forgotPassword } = useContext(AuthContext);

  const handleClick = async () => {
    
    if (email == "") {
      setError("Please enter your email ");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
   
    try {
      setError("");
      setLoading(true);
      let userObj = await forgotPassword(email);
      
        setLoading(false);
        history.push("/login");
      // }
    } catch (err) {
      // setLoading(false);
      setError(err);
      setTimeout(() => {
        setError("");
      }, 2000);
      setLoading(false);
    }
  };

  return (
    <div className="forgetWrapper">
      <div className="forgetCard">
        <Card variant="outlined" style={{ padding: "2rem" }}>
          <div className="insta-logo">
            <img src={insta} alt="" />
          </div>
          <CardContent>
            <Typography className={classes.text1} variant="subtitle1">
              <b style={{ fontSize: "1.1rem" }}>
                {" "}
                <h4>Having Trouble in Signing In?</h4>
                {" "}
              </b>
            </Typography>
            {error != "" && <Alert severity="error">{error.message}</Alert>}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
          
            
          </CardContent>
          <CardContent>
            <Typography
              className={classes.text1}
              variant="subtitle1"
              style={{ marginTop: "-2rem" }}
            >
              <p style={{ fontSize: "0.8rem",color : 'gray' }}>
                {" "}
                Enter your email and we'll send you a link to get back into your account.
              </p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              fullWidth={true}
              variant="contained"
              disabled={loading}
              onClick={handleClick}
            >
              Send Login Link
            </Button>
          </CardActions>
        </Card>
        <Card
          variant="outlined"
          className={classes.card1}
          style={{ marginTop: "1rem", width: "27vw", marginBottom: "1rem" }}
        >
          <CardContent>
            <Typography className={classes.text1} variant="subtitle1">
              Having an account ?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </Typography>
            <Typography className={classes.text1} variant="subtitle1">
              Create an Account ?{" "}
              <Link to="/signup" style={{ textDecoration: "none" }}>
                SignUp
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import {
  Button,
  CardHeader,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../redux/user/userSlice";
import regUsers from "../redux/users.json";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const getUser = regUsers.find(
      (user) => user.name === username && user.password === String(password)
    );

    if (getUser) {
      dispatch(loginUser(getUser.name));
      history.push("/display-todos");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <Container maxWidth="sm" className="mt-6 px-4">
      <Card raised>
        <CardHeader
          title={
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
          }
        ></CardHeader>
        <CardContent>
          <TextField
            label="Username"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Password"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            fullWidth
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Login;

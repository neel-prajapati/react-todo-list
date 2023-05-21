import LogoutIcon from "@mui/icons-material/Logout";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Paper, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../redux/user/userSlice";

const MainLayout = (props) => {
  const dispatch = useDispatch();
  const userLoginStatus = useSelector((state) => state.user.isLoggedIn);
  const history = useHistory();

  useEffect(() => {
    if (userLoginStatus === false && history.location.pathname !== "/") {
      history.push("/");
    }
  }, [userLoginStatus, history]);

  return (
    <Paper className="min-h-screen">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar
            className="flex flex-row justify-between items-center"
            disableGutters
          >
            <div className="flex items-center">
              <ReceiptLongIcon />

              <Typography variant="h6" noWrap>
                Todo App
              </Typography>
            </div>
            {userLoginStatus === true && (
              <Tooltip title="Log me out!">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    dispatch(logoutUser());
                    history.push("/");
                  }}
                >
                  <LogoutIcon />
                </div>
              </Tooltip>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <article className="p-4">{props.children}</article>
    </Paper>
  );
};

export default MainLayout;

import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import store from "./redux/store";
import Login from "./screens/Login";
import MainLayout from "./screens/MainLayout";
import AddTodo from "./screens/todos/AddTodo";
import DisplayTodo from "./screens/todos/DisplayTodo";
import UpdateTodo from "./screens/todos/UpdateTodo";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: "dark",
            primary: {
              main: "#6e95d4",
            },
            secondary: {
              main: "#f50057",
            },
            background: {
              default: "#0f1010",
            },
          },
        })}
      >
        <Router>
          <Switch>
            <MainLayout>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/display-todos">
                <DisplayTodo />
              </Route>
              <Route path="/add-todo">
                <AddTodo />
              </Route>
              <Route path="/update-todo/:todoID">
                <UpdateTodo />
              </Route>
            </MainLayout>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

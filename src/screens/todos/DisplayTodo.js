import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ContainerisedCard from "../../components/ContainerisedCard";

const DisplayTodo = () => {
  const todos = useSelector((state) => state.todos);
  const history = useHistory();

  return (
    <ContainerisedCard maxWidth="md" title="To-do List">
      <div className="float-right">
        <Button variant="outlined" onClick={() => history.push("/add-todo")}>
          Add items
        </Button>
      </div>
      <h2>Todo List</h2>

      <List sx={{ width: "100%", maxWidth: 360 }}>
        {todos.map((tItem) => (
          <React.Fragment key={tItem.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  className="cursor-pointer"
                  onClick={() => history.push("/update-todo/" + tItem.id)}
                >
                  <EditIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={tItem.title}
                secondary={tItem.description}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </ContainerisedCard>
  );
};

export default DisplayTodo;

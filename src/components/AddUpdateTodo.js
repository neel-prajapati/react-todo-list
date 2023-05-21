import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ContainerisedCard from "../../components/ContainerisedCard";
import { addTodoItem } from "../../redux/todos/todosSlice";

const AddUpdateTodo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoItem({ title, description }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContainerisedCard
        maxWidth="md"
        title="Add To-do"
        onSubmit={handleSubmit}
        buttonText="Add item"
      >
        <Button
          variant="outlined"
          onClick={() => history.push("/display-todos")}
        >
          Go back to the To-do List
        </Button>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <br />
      </ContainerisedCard>
    </form>
  );
};

export default AddUpdateTodo;

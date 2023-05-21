import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ContainerisedCard from "../../components/ContainerisedCard";
import { updateTodoItem } from "../../redux/todos/todosSlice";

const UpdateTodo = () => {
  const dispatch = useDispatch();
  const reduxTodos = useSelector((state) => state.todos);
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { todoID } = useParams();

  useEffect(() => {
    const getTodoItem = reduxTodos.find((tItem) => tItem.id === todoID);
    if (getTodoItem) {
      setTitle(getTodoItem.title);
      setDescription(getTodoItem.description);
    }
  }, [reduxTodos, todoID]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodoItem({ id: todoID, title, description }));
    history.push("/display-todos");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContainerisedCard
        maxWidth="md"
        title="Update To-do"
        onSubmit={handleSubmit}
        buttonText="Update item"
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

export default UpdateTodo;

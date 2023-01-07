import { useState } from "react";
import { add, remove, toggleCompleted } from "./features/todoSlice";
import { useAppDispatch, useAppSelector } from "./store";
import { Todo } from "./features/todoSlice";

function App() {
  const todos = useAppSelector((state) => state);
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const onSave = () => {
    if (!title) {
      window.alert("please add todo");
    } else {
      dispatch(add(title));
      setTitle("");
    }
  };

  const onRemove = (id: string) => {
    dispatch(remove(id));
  };

  const onCompletedToggle = (id: string) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <div>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <button onClick={onSave}>Save</button>
      </div>
      <ul>
        {todos?.map((todo: Todo) => (
          <li key={todo.id}>
            {" "}
            {todo.title}{" "}
            <button onClick={() => onRemove(todo.id)}>Remove</button>
            <button onClick={() => onCompletedToggle(todo.id)}>
              {todo?.completed ? "Mark Not Completed" : "Mark Completed"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { ITodo } from "./todo.model";
import { add, remove } from "./store/reducers/index";
import { RootState } from "./store/";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const App: React.FC = () => {
  const dispatch = useDispatch();

  const isActive = useSelector((state: RootState) => state.users.isActive);

  console.log("isActive: ", isActive);

  const [todos, setTodos] = useState<ITodo[]>([]);

  const todoAddHandler = (text: string) => {
    dispatch(add());
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text }]);
  };

  const onDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((v) => v.id !== id));
  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList todos={todos} onDeleteTodo={onDeleteTodo} />
    </div>
  );
};

export default App;

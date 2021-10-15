// import react from "react";
import { useRef } from "react";

type NewTodoProps = {
  onAddTodo: (enteredText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const ref = useRef<HTMLInputElement>(null);

  const todoSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = ref.current!.value;
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmit}>
      <div>
        <label htmlFor="todo-text">todo text</label>
        <input ref={ref} id="todo-text" type="text" />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;

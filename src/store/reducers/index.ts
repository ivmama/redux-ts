const initialState: IinitialState = {
  todos: [],
  isActive: false,
};

interface IinitialState {
  todos: [];
  isActive: false;
}

export const userReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "ADD":
      console.log("Add");
      return state;
    default:
      return state;
  }
};
export const todosReducer = (
  state = initialState,
  action: { type: string }
) => {
  switch (action.type) {
    case "REMOVE":
      console.log("remove");
      return state;
    default:
      return state;
  }
};

export const add = (): { type: "ADD" } => ({ type: "ADD" });
export const remove = (): { type: "REMOVE" } => ({
  type: "REMOVE",
});

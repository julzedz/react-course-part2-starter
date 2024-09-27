import { useReducer } from "react";
import "./App.css";
import TasksContext from "./state-management/contexts/tasksContext";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import tasksReducer from "./state-management/reducers/tasksReducer";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";

function App() {
  const [tasks, TasksDispatch] = useReducer(tasksReducer, []);
  const [user, AuthDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: AuthDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: TasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

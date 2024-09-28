import { useReducer } from "react";
import "./App.css";
import TasksContext from "./state-management/contexts/tasksContext";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import tasksReducer from "./state-management/reducers/tasksReducer";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import AuthProvider from "./state-management/authProvider";

function App() {
  const [tasks, TasksDispatch] = useReducer(tasksReducer, []);
  

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: TasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;

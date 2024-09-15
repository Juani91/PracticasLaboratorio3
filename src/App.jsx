import NewTask from "./components/newTask/NewTask";
import Tasks from "./components/tasks/Tasks";
import { useState } from "react";
import './App.css'
import Enunciado from "./components/Enunciado/enunciado";


const toDoList = [];

function App() {

  const [tasks, setTasks] = useState(toDoList);
  const [idCount, setIdCount] = useState(0);

  const AddNewTask = (newTask) => {

    if (!newTask) {
      window.alert("No se puede crear una tarea vacía!");
    } else {
      const taskData = {
        id: idCount,
        ...newTask,
        complete: false,
      };
      setTasks([...tasks, taskData]);
      setIdCount(idCount + 1);
    }

  };

  const DeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const CompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, complete: !task.complete } : task
      )
    );
  }

  return (
    <>
      <div >
        <Enunciado />
        <NewTask addNewTask={AddNewTask} />
        <Tasks tasks={tasks} deleteTask={DeleteTask} completeTask={CompleteTask}/>
      </div>
    </>
  )
}

export default App;
import PropTypes from "prop-types";
import Task from "./Task";

const Tasks = ({ tasks, deleteTask, completeTask }) => {

    return (

        <>
            {tasks.map((task) =>
                <Task
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    complete={task.complete}
                    deleteTask={deleteTask}
                    completeTask={completeTask}/>
            )}
        </>

    )
}

Tasks.propTypes = {
    tasks: PropTypes.array,
    deleteTask: PropTypes.func,
    completeTask: PropTypes.func,
}

export default Tasks;
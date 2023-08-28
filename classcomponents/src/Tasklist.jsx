// This code should render a list of tasks with a checkbox for each.
// However, the checkboxes are not functioning as expected.
// Identify and fix the issue.
import React, { useState } from "react";
function Tasklist() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
  ]);
  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCheckboxChange(task.id)}
          />
          {task.title}
        </li>
      ))}
    </ul>
  );
}

export default Tasklist;

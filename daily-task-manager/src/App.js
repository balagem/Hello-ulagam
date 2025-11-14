import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Finalize Q3 Report',
      startDate: '2023-10-26',
      endDate: '2023-10-29',
      priority: 'P1',
      completed: false,
      subtasks: [
        { id: 4, name: 'Gather all sales data', startDate: '2023-10-26', endDate: '2023-10-26', priority: 'P1', completed: false },
        { id: 5, name: 'Compile marketing performance metrics', startDate: '2023-10-27', endDate: '2023-10-27', priority: 'P2', completed: true },
      ],
    },
    {
      id: 2,
      name: 'Design New Homepage',
      startDate: '2023-11-01',
      endDate: '2023-11-10',
      priority: 'P1',
      completed: false,
      subtasks: [],
    },
    {
      id: 3,
      name: 'Deploy server update',
      startDate: '2023-10-20',
      endDate: '2023-10-22',
      priority: 'P4',
      completed: true,
      subtasks: [],
    },
  ]);

  const [isAddTaskFormVisible, setIsAddTaskFormVisible] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, subtasks: [] }]);
    setIsAddTaskFormVisible(false);
  };

  const addSubtask = (taskId, subtask) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          subtasks: [...task.subtasks, subtask],
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const toggleSubtaskCompletion = (taskId, subtask) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        const newSubtasks = task.subtasks.map(sub => {
          if (sub.id === subtask.id) {
            return { ...sub, completed: !sub.completed };
          }
          return sub;
        });
        return { ...task, subtasks: newSubtasks };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <Sidebar />
      <MainContent
        tasks={tasks}
        onShowAddTaskForm={() => setIsAddTaskFormVisible(true)}
        onAddSubtask={addSubtask}
        onToggleTaskCompletion={toggleTaskCompletion}
        onToggleSubtaskCompletion={toggleSubtaskCompletion}
      />
      {isAddTaskFormVisible && (
        <AddTaskForm
          onAddTask={addTask}
          onCancel={() => setIsAddTaskFormVisible(false)}
        />
      )}
    </div>
  );
}

export default App;

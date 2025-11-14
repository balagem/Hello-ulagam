import React from 'react';
import Header from './Header';
import TaskList from './TaskList';

const MainContent = ({ tasks, onShowAddTaskForm, onAddSubtask, onToggleTaskCompletion, onToggleSubtaskCompletion }) => {
  return (
    <div className="main-content">
      <Header onShowAddTaskForm={onShowAddTaskForm} />
      <TaskList
        tasks={tasks}
        onAddSubtask={onAddSubtask}
        onToggleTaskCompletion={onToggleTaskCompletion}
        onToggleSubtaskCompletion={onToggleSubtaskCompletion}
      />
    </div>
  );
};

export default MainContent;

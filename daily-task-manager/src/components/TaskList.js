import React, { useState } from 'react';
import AddSubtaskForm from './AddSubtaskForm';
import { getDaysRemaining } from '../utils/date';

const TaskList = ({ tasks, onAddSubtask, onToggleTaskCompletion, onToggleSubtaskCompletion }) => {
  const [addingSubtaskTo, setAddingSubtaskTo] = useState(null);

  const handleAddSubtask = (taskId, subtask) => {
    onAddSubtask(taskId, subtask);
    setAddingSubtaskTo(null);
  };

  const renderDueDate = (endDate) => {
    const daysRemaining = getDaysRemaining(endDate);
    if (daysRemaining < 0) {
      return <span className="due-date overdue">Overdue</span>;
    }
    if (daysRemaining === 0) {
      return <span className="due-date">Due Today</span>;
    }
    return <span className="due-date">Due in {daysRemaining} days</span>;
  };

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <div className="task-item-header">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTaskCompletion(task.id)}
            />
            <div className="task-info">
              <h4>{task.name}</h4>
              <p>{task.startDate} - {task.endDate} {task.completed ? <span className="status">Completed</span> : renderDueDate(task.endDate)}</p>
            </div>
            <div className={`task-priority ${task.priority}`}>{task.priority}</div>
          </div>
          {task.subtasks && (
            <div className="subtask-list">
              {task.subtasks.map(subtask => (
                <div key={subtask.id} className={`subtask-item ${subtask.completed ? 'completed' : ''}`}>
                  <input
                    type="checkbox"
                    checked={subtask.completed}
                    onChange={() => onToggleSubtaskCompletion(task.id, subtask)}
                  />
                  <div className="task-info">
                    <h5>{subtask.name}</h5>
                    <p>{subtask.startDate} {subtask.completed ? <span className="status">Completed</span> : renderDueDate(subtask.endDate)}</p>
                  </div>
                  <div className={`task-priority ${subtask.priority}`}>{subtask.priority}</div>
                </div>
              ))}
              {addingSubtaskTo === task.id ? (
                <AddSubtaskForm
                  onAddSubtask={(subtask) => handleAddSubtask(task.id, subtask)}
                  onCancel={() => setAddingSubtaskTo(null)}
                />
              ) : (
                <button className="add-subtask-btn" onClick={() => setAddingSubtaskTo(task.id)}>+ Add Subtask</button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;

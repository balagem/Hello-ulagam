import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask, onCancel }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('P1');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({
      id: Date.now(),
      name: taskName,
      startDate,
      endDate,
      priority,
      completed: false,
    });
    setTaskName('');
    setPriority('P1');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="add-task-form-modal">
      <div className="add-task-form">
        <h3>Add New Task</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
              <option value="P4">P4</option>
            </select>
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="button" onClick={onCancel}>Cancel</button>
            <button type="submit">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;

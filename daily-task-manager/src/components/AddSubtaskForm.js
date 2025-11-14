import React, { useState } from 'react';

const AddSubtaskForm = ({ onAddSubtask, onCancel }) => {
  const [subtaskName, setSubtaskName] = useState('');
  const [priority, setPriority] = useState('P1');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSubtask({
      id: Date.now(),
      name: subtaskName,
      startDate: new Date().toISOString().slice(0, 10), // Default to today
      endDate: new Date().toISOString().slice(0, 10),
      priority,
      completed: false,
    });
    setSubtaskName('');
    setPriority('P1');
  };

  return (
    <div className="add-subtask-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={subtaskName}
          onChange={(e) => setSubtaskName(e.target.value)}
          placeholder="Subtask name"
          required
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
          <option value="P4">P4</option>
        </select>
        <button type="submit">Add</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddSubtaskForm;

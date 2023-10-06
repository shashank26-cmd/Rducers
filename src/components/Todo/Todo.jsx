import { useState } from "react";

/* eslint-disable react/prop-types */
function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
  const [finished, setFinished] = useState(isFinished);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoData);

  return (
    <div>
      <input
        type="checkbox"
        checked={finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText} 
          onChange={(e) => {
            setEditText(e.target.value);
          }}
        />
      ) : (
        // Changed curly braces to parentheses
        <span>{todoData}</span>
      )}

      <button
        onClick={() => {
          setIsEditing(!isEditing);
          onEdit(editText);
        }}
      >
        {!isEditing ? 'Edit' : 'Save'}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Todo;

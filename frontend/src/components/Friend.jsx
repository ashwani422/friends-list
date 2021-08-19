import React from 'react'

import './friend.css'

export default function Friend({ id, name, age, onDelete }) {

  const handleDelete = () => {
    onDelete(id);
  }

  return (
    <div className="card">
      <div className="card-title">Name: {name}</div>
      <div className="card-subtitle">Age: {age}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

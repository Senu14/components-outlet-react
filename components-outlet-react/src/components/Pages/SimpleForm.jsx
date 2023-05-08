import React, { useState } from 'react';

  function SimpleForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}, Age: ${age}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;





import React from 'react'
function App() {
  const user = {
    name: "Jan",
    surname: "Kowalski",
    age: 20,
  };
  const userPersonalData = user.name +' ' + user.surname;
  return (
    <div className="App">
      <h1>Employer of the month</h1>
      <p>{"Is " + userPersonalData + ' '+ user.age + " years old"}</p>
    </div>
  );
}

export default App;

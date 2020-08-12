import React from "react";
import Card from "./Card";
import Contact from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={Contact[0].name}
        imgsource={Contact[0].imgURL}
        phone={Contact[0].phone}
        email={Contact[0].email}
      />
      <Card
        name={Contact[1].name}
        imgsource={Contact[1].imgURL}
        phone={Contact[1].phone}
        email={Contact[1].email}
      />
      <Card
        name={Contact[2].name}
        imgsource={Contact[2].imgURL}
        phone={Contact[2].phone}
        email={Contact[2].email}
      />
    </div>
  );
}

export default App;

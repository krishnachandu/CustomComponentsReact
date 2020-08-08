import React from "react";
import Card from "./Card";

function App(con) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        contact={con.name}
        imgsource={con.imgsource}
        phone={con.phone}
        email={con.email}
      />
    </div>
  );
}

export default App;

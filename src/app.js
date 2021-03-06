// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
import React from "react";
import { render } from "react-dom";
import Poke from "./Poke";

const App = () => {
  return (
    <div>
      <h1> Pokemon</h1>
      <Poke name="Pikachu" type="electric" sprite="unknown" />
      <Poke name="Rattata" type="normal" sprite="unknown" />
      <Poke name="Pidgey" type="flying" sprite="unknown" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

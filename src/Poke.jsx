import React from "react";

export default function Poke({ name, type, sprite }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <h2>{sprite}</h2>
    </div>
  );
}

import React from "react";

export default function DisplayList({ items }) {
  const list = items.map((item) => {
    return (
      <div key={Math.random()}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
      </div>
    );
  });
  return <div>{list}</div>;
}

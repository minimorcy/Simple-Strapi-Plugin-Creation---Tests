import React from "react";

export default function Image({titulo, id, url}) {
  return (
    <>
      <p>{titulo}</p>
      <img key={id} src={url} />
    </>
  );
}

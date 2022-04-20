import React from "react";
import { useDrag } from "react-dnd";

export const Picture = ({ url, id, alt }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));
  return (
    <>
      <img
        ref={drag}
        src={url}
        alt={alt}
        height="100px"
        width="100px"
        style={{ border: isDragging ? "5px solid pink" : "0px" }}
      />
    </>
  );
};

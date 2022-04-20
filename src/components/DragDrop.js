import React from "react";
import { Picture } from "./Picture";

const ImageList = [
  {
    id: 1,
    alt: "astronaut sitting in chair",
    url:
      "https://images.unsplash.com/photo-1634114382698-00e5e4693b37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80"
  },
  {
    id: 2,
    alt: "astronaut lying in backyard",
    url:
      "https://images.unsplash.com/photo-1626413715168-04a49227fe92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522&q=80"
  },
  {
    id: 3,
    alt: "astronaut in the woods",
    url:
      "https://images.unsplash.com/photo-1605365462553-bbaedfbdfcb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
  }
];

export const DragDrop = () => {
  return (
    <>
      <div className="Pictures">
        {ImageList.map((item, i) => (
          <Picture url={item.url} id={item.id} alt={item.alt} key={i} />
        ))}
      </div>
      <div className="DropArea"></div>
    </>
  );
};

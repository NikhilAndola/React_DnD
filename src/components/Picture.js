import React from "react";

export const Picture = ({ url, id, alt }) => {
  return (
    <>
      <img src={url} alt={alt} height="100px" width="100px" />
    </>
  );
};

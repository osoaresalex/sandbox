import React, { Fragment } from "react";

const MapOfComponents = props => {
  const { items, render } = props;

  return <Fragment>{items.map(render)}</Fragment>;
};

export default MapOfComponents;

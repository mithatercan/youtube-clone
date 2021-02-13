import React, { useEffect, useState } from "react";

function Main({ children, statu }) {
  return (
    <main
      className="main"
      style={statu ? { marginLeft: "15em" } : { marginLeft: "0" }}
    >
      <div className="main__container">{children}</div>
    </main>
  );
}

export default Main;

import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
function NextBtn({ nextPageCall }) {
  const style = {
    color: "#fff",
    backgroundColor: "rgb(36, 36, 36)",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "50%",
  };
  const btn = {
    backgroundColor: "transparent",
  };
  return (
    <button style={btn} onClick={() => nextPageCall()}>
      <AiOutlineCaretRight className="pagination-btn" size={42} />
    </button>
  );
}

export default NextBtn;

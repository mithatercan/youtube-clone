import React from "react";

import { AiOutlineCaretLeft } from "react-icons/ai";

function PrevBtn({ disabled, prevPageCall }) {
  const btn = {
    backgroundColor: "transparent",
  };
  return disabled ? (
    <button style={btn} disabled>
      <AiOutlineCaretLeft className="disabled-btn" size={42} />
    </button>
  ) : (
    <button style={btn} onClick={(e) => prevPageCall(e)}>
      <AiOutlineCaretLeft className="pagination-btn" size={42} />
    </button>
  );
}

export default PrevBtn;

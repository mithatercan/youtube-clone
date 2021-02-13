import React from "react";

import { AiOutlineCaretLeft } from "react-icons/ai";

function PrevBtn({ disabled, prevPageCall }) {
  return disabled ? (
    <button disabled>
      <AiOutlineCaretLeft />
    </button>
  ) : (
    <button onClick={(e) => prevPageCall(e)}>
      <AiOutlineCaretLeft />
    </button>
  );
}

export default PrevBtn;

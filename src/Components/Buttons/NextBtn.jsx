import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
function NextBtn({ nextPageCall }) {
  return (
    <button onClick={() => nextPageCall()}>
      <AiOutlineCaretRight />
    </button>
  );
}

export default NextBtn;

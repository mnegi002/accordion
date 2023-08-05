import { useState } from "react";

const MyAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="content">
        <p onClick={() => setShow(!show)}> {show ? "➖" : "➕"}</p>
        <h3>{question}</h3>
      </div>
      {show && <p className="answer">{answer}</p>}
    </>
  );
};
export default MyAccordion;

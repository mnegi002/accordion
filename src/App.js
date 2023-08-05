import { useState } from "react";
import "./styles.css";
import { question } from "./api";
import MyAccordion from "./myAccordion";
const Accordion = () => {
  const [data, setData] = useState(question);

  return (
    <>
      <section className="container">
        <h1>React Interview Questions</h1>
        {data.map((curEl) => {
          const { id } = curEl;
          return <MyAccordion key={id} {...curEl} />;
        })}
      </section>
    </>
  );
};

export default Accordion;

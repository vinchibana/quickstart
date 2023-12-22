import { sculptureList } from "./quotes";
import { useState } from "react";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNext() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleShowMore() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <div>
      <button onClick={handleNext}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1}) of {sculptureList.length}
      </h3>

      <img src={sculpture.url} alt={sculpture.alt} />
      <button onClick={handleShowMore}>
        {showMore ? "Hide" : "Show"}Detail
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </div>
  );
}

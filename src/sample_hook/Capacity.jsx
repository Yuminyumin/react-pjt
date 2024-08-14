import { useEffect, useState } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Capacity(props) {
  const [isFull, setIsFull] = useState(false);
  const [cnt, increaseCnt, decreaseCnt] = useCounter();
  useEffect(() => {
    setIsFull(cnt >= MAX_CAPACITY);
    console.log("debug >>>> current cnt value, ", cnt);
  }, [cnt]);

  return (
    <div class="container">
      <p>{`총 ${cnt}명 수용하였습니다.`}</p>
      <button onClick={increaseCnt} disabled={isFull} class="btn btn-primary">
        입장
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={decreaseCnt} class="btn btn-danger">
        퇴장
      </button>
      {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Capacity;

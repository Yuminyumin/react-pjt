import { useEffect, useState } from "react";

const MAX_CAPACITY = 10;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [cnt, setCnt    ] = useState(0);

  const increaseCnt = () => {
    if (cnt < MAX_CAPACITY){
      setCnt(cnt +1);
    }
  };

  const decreaseCnt = () => {
    if (cnt > 0){
      setCnt(cnt-1);
    }
  }

  useEffect(()=> {
    console.log("cnt", cnt);
    if(cnt >= MAX_CAPACITY){
      setIsFull(true);
    } else {
      setIsFull(false);
    }
  },[cnt]);

  return (
    <div class="container">
      <p>{`총 ${cnt}명 수용하였습니다.`}</p>
      <button onClick={increaseCnt}
              disabled={isFull}
              class="btn btn-primary">
              입장
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={decreseCnt}
              class="btn btn-danger">
              퇴장
      </button>
      
      {isFull && <p style={{color : "red"}}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;

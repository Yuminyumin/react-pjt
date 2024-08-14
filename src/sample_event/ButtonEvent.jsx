import { useState } from "react";

function ButtonEvent(props){
    const [isFlag, setIsFlag]= useState(true);

    const btnHandler = (name) => {
        console.log(`debug >>> btn click ${name}!!!`);
        setIsFlag((isFlag)=>!isFlag);
    }

    return (
        <div>
            <button class={isFlag ? "btn btn-primary" : "btn btn-danger"}
                    onClick={()=>btnHandler('jslim')}>
                {isFlag ? '꺼짐' : '켜짐'}
            </button>

        </div>
    );
}

export default ButtonEvent;
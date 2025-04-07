import React from "react";


const Tarjet=(props)=>{
    return (
        <div style={{width: "70rem"}} >
            <h1>{props.subtitle}</h1>
            <p>{props.content2}</p>
            <button type="button" className="btn btn-primary btn-lg">Learn more...</button>
        </div>

    )
}

export default Tarjet
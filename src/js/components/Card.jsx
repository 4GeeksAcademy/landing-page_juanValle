import React from "react"

const Card= (props)=>{
return (
<div className="card mx-2" style={{width: "19rem"}}>
  <img src={props.imageUrl} className="card-img-top" style={{width: "300px", height: "150px" }} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <a href={props.linkUrl} target="_blank" className="btn btn-primary">Take my money!</a>
  </div>
</div>
)
}

export default Card;
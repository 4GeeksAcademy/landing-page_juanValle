import React from "react"



const NavBar =(props)=>{
    return (
        <nav className="navbar navbar-expand-lg bg-success-subtle">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Cryptocurrencies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">NFT's</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Exchanges
          </a>
          <ul className="dropdown-menu bg-success-subtle">
            <li><a className="dropdown-item" href={props.urlExchange1} target="_blank">{props.nameExchange1}</a></li>
            <li><a className="dropdown-item" href={props.urlExchange2} target="_blank">{props.nameExchange2}</a></li>
            <li><a className="dropdown-item" href={props.urlExchange3} target="_blank">{props.nameExchange3}</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    )
}

export default NavBar
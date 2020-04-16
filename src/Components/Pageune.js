import React from "react"

const Pageune =() => {
return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className ="carousel-inner">
    <div className="carousel-item active">
      <img src="./img/ness.jpg" className="d-block w-100" alt="..."/>
      <div className ="carousel-caption h-100 d-none d-md-block d-flex justify-content-center align-items-center flex-column">
        <h2>Hi,i'm  <span> <h1 className ="bg-light text-danger"> Nesrine Bouhejba  </h1> </span> </h2>
        <h1 style={{fontFamily:"myfont",color:"black"}}>"I'm here to help you create the website of your dreams."</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./img/computer-desk-hand-laptop-374631.jpg" className="d-block w-100" alt="..."/>
    
    </div>
    <div className="carousel-item">
      <img src="./img/internet-screen-security-protection-60504.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        


    </div>
)
    
}
export default Pageune
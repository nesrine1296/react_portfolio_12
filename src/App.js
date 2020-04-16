import React from "react"

import Pageune from "./Components/Pageune"
import Pagedeux from "./Components/Pagedeux"
import Pagetrois from "./Components/Pagetrois"
import Pagequatre from "./Components/Pagequatre"
import Pagecinq from "./Components/Pagecinq"

const App = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Nesrine Bouhejba</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#About">About</a>
            <a className="nav-item nav-link" href="#Services">Services</a>
            <a className="nav-item nav-link" href="#Portfolio">Portfolio</a>
            <a className="nav-item nav-link" href="#Contact">Contact</a>

          </div>
          </div>
</nav>



<Pageune />
<Pagedeux />
<Pagetrois />
<Pagequatre />
<Pagecinq />

   

  </div>
)

}

export default App
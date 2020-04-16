import React from "react"

const Pagetrois = () => {
    return (

        <div id="Services">
            <div className="container">

                <h1 className="text-center mb-3">Services</h1>

                <div className="row">

                    {/* colonne 1 */}


                    <div className="col-lg-4 col-md-12">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="./img/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    {/* colonne 2  */}


                    <div className="col-lg-4 col-md-12">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="./img/twinsfisch-uf3Q3DlKi9o-unsplash.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>


                    {/* colonne 3 */}

                    <div className="col-lg-4 col-md-12">

                        <div className="card" style={{ width: "18rem" }}>
                            <img src="./img/kerde-severin-TXotsqdpX2g-unsplash.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Pagetrois
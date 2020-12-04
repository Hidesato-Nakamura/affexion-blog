import React from "react"
import Helmet from "react-helmet"
// import "http://54.168.227.141/fluidSimulation2D/assets/css/index.css"
// import "./assets/js/lib.js"
// import "./assets/js/basic.js"

export default ()=>{
    return(
    <div style={{width:`100%`,height:`350px`,position:`absolute`,backgroundColor:`red`}}>
        <Helmet>
            <script type="text/javascript" src="http://54.168.227.141/fluidSimulation2D/assets/js/lib.js"></script>
            <script type="text/javascript" src="http://54.168.227.141/fluidSimulation2D/assets/js/basic.js"></script>
        </Helmet>
        <div id="wrapper">
            <div id="contents">
                <section className="p-mainCanvas js-mainCanvas">
                    <canvas></canvas>
                </section>
            </div>
        </div>
       
    </div>
    )
}
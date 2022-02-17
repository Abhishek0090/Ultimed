import React from "react";
import "./slickdemo.css";

function App() {
 


  return (
    <div className="App">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 carouselimg" src="./assets/carousel.jpg" alt="First slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
        </a>
      </div>
    </div>
  );
}

export default App;

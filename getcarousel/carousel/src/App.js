
import React from "react";
import Imageone from "./images/image1.png";
import Imagetwo from "./images/image2.jpg";
import Imagethree from "./images/image3.jpg";
import Imagefour from "./images/image4.png";

function App() {
  return (
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Imageone}class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5>React js logo</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </div>
    </div>
    <div class="carousel-item">
      <img src={Imagetwo} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
            <h5>React properties</h5>
            <p>Some representative placeholder content for the second slide.</p>
        </div>
    </div>
    <div class="carousel-item">
      <img src={Imagethree} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
            <h5>React js</h5>
            <p>Some representative placeholder content for the third slide.</p>
        </div>
    </div>
    <div class="carousel-item">
      <img src={Imagefour} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
            <h5>Brands using React</h5>
            <p>Some representative placeholder content for the fourth slide.</p>
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>
   );
}
export default App;

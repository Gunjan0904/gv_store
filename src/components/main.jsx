import React from "react";

const Home = () => {
  return (
    <>
      {/* <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/banner_women.png"
            alt="Card"
            height={500}
          />
        </div>
      </div> */}

      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="./assets/banner_women.png" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./assets/banner_mens.png" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./assets/product-banner.webp" alt="Third slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./assets/ele.jpg" alt="Fourth slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Home;

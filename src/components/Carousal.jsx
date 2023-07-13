import React from "react";

export default function Carousal() {
  return (
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{objectFit:"contain !important"}}
    >
      <div class="carousel-inner" id ="carousel">
        <div class="carousel-caption " style={{zIndex:"10"}}>
          <form class="d-flex" >
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success bg-warning text-dark" type="submit">
              Search
            </button>
          </form>
        </div>

        <div class="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            class="d-block w-100"
            style={{ filter: "brightness(30%)" }}
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            class="d-block w-100"
            style={{ filter: "brightness(30%)" }}
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1642821373475-cfd6c7301b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            class="d-block w-100"
            style={{ filter: "brightness(30%)" }}
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

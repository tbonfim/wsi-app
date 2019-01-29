
import React, { Component } from 'react';

import './carousel.css'
class Carousel extends Component {

  handleClose = () => {
    const {hideCarousel} = this.props;
    hideCarousel();
  }

  render() {
    const {imageList} = this.props;
    if (! imageList) return (<div id="carousel"> </div>)
    return (
      <div id="carouselContainer" className="h-100 w-100 justify-content-center align-items-center position-absolute sticky-top">
        <div id="carousel" className="mt-5 pt-5">
          <button type="button" className="close" aria-label="Close" onClick={this.handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
          <div id="productCarousel" className="carousel slide" data-ride="carousel">
            <ol  className="carousel-indicators">{
                imageList.map((image, index) => (<li key={index} data-target="#productCarousel" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>) )
              }
            </ol>
            <div className="carousel-inner">
              {imageList.map((image, index) => (<div key={index} className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
                  <img className="d-block img-fluid" src={image.href} alt={image.alt} />
                </div>) )}
            </div>
            <a className="carousel-control-prev mt-4" href="#productCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next mt-4" href="#productCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Carousel;
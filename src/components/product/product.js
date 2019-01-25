import React, { Component } from 'react';

import './product.css'

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
    };
  }


  showOverlay() {
    console.log('show')
  }
  render() {
    const product= this.props.product;
    const heroImg = product.hero;
    // const imageList = product.images;
    return (
      <div className="card col-md-4 col-xs-1 border-0 mt-5 mb-2 shadow-sm">
        <a onClick={this.showOverlay}>
          <img src={heroImg.href} width={heroImg.width} height={heroImg.height} alt={heroImg.alt} className="img-fluid card-img-top"/>
          <div className="card-body">
            <p className="card-title text-info">{product.name}</p>
            <p className="card-text text-danger">Price from {product.priceRange.regular.low} to {product.priceRange.regular.high}</p>    
          </div>
        </a>
      </div>
    );
  }

}
export default Product;
import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';

import './product.css'

class Product extends Component {
  constructor({showCarousel, hideCarousel, props}) {
    super(props);
    this.showCarousel = showCarousel;
    this.hideCarousel = hideCarousel;
  }
  handleProductClick = ()  => {
    const {product, showCarousel} = this.props;
    showCarousel(product.images);
  }
  render() {
    const {product} = this.props;
    const heroImg = product.hero;
    return (
      <div className="card col-md-4 col-xs-1 border-0 mt-5 mb-2 shadow-sm">
        <a href="#" onClick={this.handleProductClick}>
          <img src={heroImg.href} width={heroImg.width} height={heroImg.height} alt={heroImg.alt} className="img-fluid card-img-top"/>
          <div className="card-body">
            <p className="card-title text-info text-center">{product.name}</p>
            <span className="card-text text-danger">From <CurrencyFormat value={product.priceRange.regular.low} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'} /> 
              <span> to </span> 
              <CurrencyFormat value={product.priceRange.regular.high} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'$'}  />
            </span>    
          </div>
        </a>
      </div>
    );
  }

}
export default Product;
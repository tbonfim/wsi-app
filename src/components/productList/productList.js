import React, { Component } from 'react';
// import axios from 'axios';
import Product from '../product/product'
import Carousel from '../carousel/carousel'

import data from '../../data/productsList'

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      list: [], 
      showCarousel: false
    };
    this.showCarousel = this.showCarousel.bind(this);
  }

  showCarousel = (currentProductImages) => {
    this.setState({showCarousel: true , productImages: currentProductImages});
    document.body.classList.add('carousel-open');
    document.body.classList.remove('carousel-closed');
  }
  hideCarousel = () => {
    this.setState({showCarousel: false});
    document.body.classList.add('carousel-closed');
    document.body.classList.remove('carousel-open');
  }
  /**
   * In a most complex enviromnent, this would be placed in a service specialized in data manipulation
   */
  fetchProducts = () => {
    if (data && data.groups) {
      const productsList = data.groups;
      this.setState( {loading: false, error: false, list: productsList} );
    }  
    else {
      this.setState( {loading: false, error: true, list: {}} );
    }
    // Request done to any API endpoint (CORS policy doesnt allow to use it directly here)
    //   this.setState( {loading:false, error: false, list})
    //   axios.get('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json')
    //     .then( (response) => {
    //       const list = response.data.results;
    //       this.setState({
    //         loading: false,
    //         error: false,
    //         list
    //       })
    //     })
    //     .catch( () => {
    //       this.setState( { 
    //         loading: false,
    //         error: true
    //       });
    //     });
    
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    const { loading, error, list } = this.state;
    if (loading) { return  <div>Loading...</div>; }
    if (error) { return <div>Error!</div>; }
    return (
      <div id="content">
      { this.state.showCarousel ? <Carousel hideCarousel={this.hideCarousel} imageList={this.state.productImages}/> : null}
        <ul className="row pl-0"> {
          list.map( product => (
            <Product key={product.id} product={product} showCarousel={this.showCarousel}/>
          ))
        }
        </ul>
      </div>
    );
  }

}
export default ProductList; 
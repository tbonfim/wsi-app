import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Carousel from '../components/carousel/carousel';

import data from '../data/productsList'

describe('components', () => {
  describe('Carousel', () => {
    it('should render correctly', () => {
      Enzyme.configure({ adapter: new Adapter() });
      const imageList = data.groups[0].images;
      const wrapper = shallow(<Carousel  imageList={imageList}/>);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('#carouselContainer').length).toBe(1);
    });
  });
});


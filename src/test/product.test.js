import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Product from '../components/product/product';

import data from '../data/productsList'

describe('components', () => {
  describe('ProductList', () => {
    it('should render correctly', () => {
      Enzyme.configure({ adapter: new Adapter() });
      const wrapper = shallow(<Product product={data.groups[0]}/>);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('div.card').length).toBe(1);
    });
  });
});


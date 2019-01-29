import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductList from '../components/productList/productList';
import Product from '../components/product/product';

describe('components', () => {
  describe('ProductList', () => {
    it('displays the right components', () => {
      Enzyme.configure({ adapter: new Adapter() });
      const wrapper = shallow(<ProductList />);
      expect(wrapper.containsMatchingElement(<Product />)).toBe(true);
    });
  });
});


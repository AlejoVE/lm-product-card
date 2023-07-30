import React from 'react';

import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src';
import { product } from '../data/products';

describe('ProductTitle', () => {
  test('should show title correctly with custom title', () => {
    const wrapper = renderer.create(<ProductTitle title="My custom title" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show component with the name of the product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

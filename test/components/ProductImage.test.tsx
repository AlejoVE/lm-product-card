import React from 'react';

import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src';
import { product } from '../data/products';

describe('ProductImage', () => {
  test('should show title correctly with custom title', () => {
    const wrapper = renderer.create(<ProductImage img="https://hola.org" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show component with the image of the product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

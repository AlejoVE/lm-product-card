# lm-product-card

This is an NPM deployment test package

## Examples

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'lm-product-card'
```

```
 <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, increaseBy, maxCount, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>

```
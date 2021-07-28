import { CartItem } from './../features/interface';
import { Product } from '../features/interface';

export interface ProductCat {
  category_name: string;
  items: CartItem[];
}

const convertCart = (products: CartItem[]): ProductCat[] => {
  let results: ProductCat[] = [];

  products.forEach((product: CartItem) => {
    const p = results.find((pc) => pc.category_name === product.category.name);
    if (p) {
      p.items.push(product);
    } else {
      results.push({
        category_name: product.category.name,
        items: [product],
      });
    }
  });

  return results;
};

export default convertCart;

import { MdAdd } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { add } from '../../features/cartSlice';
import { Product } from '../../features/interface';
import { getProductDetail, show } from '../../features/productDetail';
import { ProductCat } from '../../helpers/convertProducts';
import { Item, ItemContainer, Label, Wrapper } from './GroupItem.styles';

interface Props {
  products_cat: ProductCat;
}

const GroupItem = ({ products_cat }: Props) => {
  const dispatch = useAppDispatch();
  const { detail, mode } = useAppSelector((state) => state.cart);
  const handleGetProductDetail = (product_id: string) => {
    dispatch(getProductDetail({ product_id }));
    dispatch(show());
  };

  const addCart = (p: Product) => {
    if (mode === 'completing') {
      alert('Please cancel or complete the current list to add item!');
      return;
    }
    if (detail) {
      const isExist = detail.items.find((x) => x._id === p._id);
      if (isExist) {
        alert('This product is already in the list!');
        return;
      }
    }

    dispatch(
      add({
        _id: p._id,
        category: p.category,
        name: p.name,
        number: 1,
      })
    );
  };

  return (
    <Wrapper>
      <Label>{products_cat.category_name}</Label>
      <ItemContainer>
        {products_cat.items.map((x) => (
          <Item key={x._id}>
            <span onClick={() => handleGetProductDetail(x._id)}>{x.name}</span>
            <MdAdd onClick={() => addCart(x)} />
          </Item>
        ))}
      </ItemContainer>
    </Wrapper>
  );
};

export default GroupItem;

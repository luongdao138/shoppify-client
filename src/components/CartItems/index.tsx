import {
  Item,
  Label,
  NameWrapper,
  NoItemWrapper,
  NumberWrapper,
  Wrapper,
} from './CartItems.styles';
import { AiOutlineDelete, AiOutlineMinus } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import convertCart from '../../helpers/convertCart';
import { CartItem } from '../../features/interface';
import {
  add_selected,
  change,
  remove,
  remove_selected,
} from '../../features/cartSlice';
import ShoppingImage from '../../assets/undraw_shopping_app_flsj 1.svg';
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi';

const CartItems = () => {
  const { detail, mode } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleChangeNumber = (i: CartItem, amount: number): void => {
    if (i.number + amount > 0) {
      dispatch(change({ id: i._id, amount }));
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(remove({ id }));
  };

  return (
    <Wrapper>
      {detail?.items && detail.items.length > 0 ? (
        convertCart(detail.items).map((pc, index) => {
          return (
            <div style={{ marginBottom: '20px' }} key={index}>
              <Label>{pc.category_name}</Label>
              {pc.items.map((i) => {
                const is_selected =
                  detail.selectedItems.findIndex((x) => x._id === i._id) !== -1;
                return (
                  <Item key={i._id}>
                    <NameWrapper is_selected={is_selected}>
                      {mode === 'completing' &&
                        (is_selected ? (
                          <BiCheckboxChecked
                            onClick={() => {
                              dispatch(remove_selected({ _id: i._id }));
                            }}
                          />
                        ) : (
                          <BiCheckbox
                            onClick={() => {
                              dispatch(add_selected({ item: i }));
                            }}
                          />
                        ))}
                      <span className='name '>{i.name}</span>
                    </NameWrapper>
                    <NumberWrapper appear={mode === 'editting'}>
                      <span
                        className='delete'
                        onClick={() => handleRemoveItem(i._id)}
                      >
                        <AiOutlineDelete />
                      </span>
                      <AiOutlineMinus
                        className='minus'
                        onClick={() => handleChangeNumber(i, -1)}
                      />
                      <span className='number'>{i.number} pcs</span>
                      <MdAdd
                        className='add'
                        onClick={() => handleChangeNumber(i, 1)}
                      />
                    </NumberWrapper>
                  </Item>
                );
              })}
            </div>
          );
        })
      ) : (
        <NoItemWrapper>
          <p>No items</p>
          <img src={ShoppingImage} alt='' />
        </NoItemWrapper>
      )}
    </Wrapper>
  );
};

export default CartItems;

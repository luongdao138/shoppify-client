import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Search, Title, Wrapper } from './Header.styles';
import { MdSearch } from 'react-icons/md';
import { useAppDispatch } from '../../app/hooks';
import { searchProducts } from '../../features/productSlice';

const Header = () => {
  const [temp, setTemp] = useState<string>('');
  const dispatch = useAppDispatch();
  const isMounted = useRef<boolean>(false);
  const searchItem = useCallback((value: string) => {
    dispatch(searchProducts({ searchTerm: value }));
  }, []);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    const timeout = setTimeout(() => {
      searchItem(temp);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [temp, searchItem]);
  return (
    <Wrapper>
      <Title>
        <span>Shoppingify</span> allows you to take your shopping list wherever
        you go
      </Title>
      <Search>
        <input
          type='text'
          placeholder='search item'
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
        />
        <MdSearch />
      </Search>
    </Wrapper>
  );
};

export default Header;

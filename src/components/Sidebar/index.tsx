import React from 'react';
import {
  Wrapper,
  Content,
  Logo,
  MenuItem,
  Menu,
  CartIcon,
} from './Sidebar.styles';
import logo from '../../assets/logo.svg';
import { MdFormatListBulleted } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GiBackwardTime } from 'react-icons/gi';
import { IoIosStats } from 'react-icons/io';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useAppSelector } from '../../app/hooks';

interface Props {
  setOpenShoppingModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ setOpenShoppingModal }: Props) => {
  const { detail } = useAppSelector((state) => state.cart);

  return (
    <Wrapper>
      <Content>
        <Logo to='/'>
          <img src={logo} alt='' />
        </Logo>
        <Menu>
          <MenuItem>
            <Link to='/'>
              <MdFormatListBulleted />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/history'>
              <GiBackwardTime />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/stats'>
              <IoIosStats />
            </Link>
          </MenuItem>
        </Menu>
        <CartIcon
          onClick={() => {
            if (window.innerWidth <= 800) setOpenShoppingModal((x) => !x);
          }}
        >
          <HiOutlineShoppingCart />
          {detail?.items && detail.items.length > 0 && (
            <span>{detail?.items.length}</span>
          )}
        </CartIcon>
      </Content>
    </Wrapper>
  );
};

export default Sidebar;

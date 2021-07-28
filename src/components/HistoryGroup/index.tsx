import {
  Button,
  Date,
  Icon,
  Item,
  Label,
  Name,
  Right,
  Wrapper,
} from './HistoryGroup';
import { RiCalendarTodoFill } from 'react-icons/ri';
import { FaChevronRight } from 'react-icons/fa';
import { ShoppingHistoryType } from '../../helpers/convertHistoryShopping';
import moment from 'moment';

interface Props {
  shopping: ShoppingHistoryType;
}

const HistoryGroup = ({ shopping }: Props) => {
  return (
    <Wrapper>
      <Label>{shopping.time}</Label>
      {shopping.list.map((i) => (
        <Item to={`/history/${i._id}`} key={i._id}>
          <Name>{i.name}</Name>
          <Right>
            <Date>
              <RiCalendarTodoFill />
              {/* <span>Mon 27.8.2020</span> */}
              <span>{moment(i.createdAt).format('ddd DD.M.yyyy')}</span>
            </Date>
            <Button
              color={
                i.status === 0
                  ? 'green'
                  : i.status === 1
                  ? '#EB5757'
                  : '#56CCF2'
              }
            >
              {i.status === 0
                ? 'draft'
                : i.status === 1
                ? 'cancelled'
                : 'completed'}
            </Button>
            <Icon>
              <FaChevronRight />
            </Icon>
          </Right>
        </Item>
      ))}
    </Wrapper>
  );
};

export default HistoryGroup;

import { ShoppingList } from '../features/interface';
import moment from 'moment';

export interface ShoppingHistoryType {
  time: string;
  list: ShoppingList[];
}

const convertHistoryShopping = (
  historyList: ShoppingList[]
): ShoppingHistoryType[] => {
  let results = [] as ShoppingHistoryType[];

  historyList.forEach((s) => {
    const time = moment(s.createdAt).format('MMMM yyyy');
    const isExist = results.find((x) => x.time === time);

    if (isExist) {
      isExist.list.push(s);
    } else {
      results.push({
        list: [s],
        time,
      });
    }
  });

  console.log(results);

  return results;
};

export default convertHistoryShopping;

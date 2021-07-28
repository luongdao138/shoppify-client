import moment from 'moment';
import { ShoppingListDetail, CartItem } from './../features/interface';

interface Stats {
  info: {
    name: string;
    _id: string;
  };
  value: number;
}

export interface ChartData {
  month: {
    text: string;
    number: number;
  };
  total_items: number;
}

type Result = {
  items: Stats[];
  categories: Stats[];
  total_items: number;
};

export const convertTop = (list: ShoppingListDetail[]): Result => {
  let result: Result = {
    items: [],
    categories: [],
    total_items: 0,
  };
  list.forEach((s: ShoppingListDetail) => {
    if (s.status === 2) {
      result.total_items += s.items.reduce((acc, curr) => {
        return acc + curr.number;
      }, 0);
      s.items.forEach((p: CartItem) => {
        const itemExist = result.items.find((x) => x.info._id === p._id);
        if (itemExist) {
          itemExist.value += p.number;
        } else {
          result.items.push({
            info: {
              _id: p._id,
              name: p.name,
            },
            value: p.number,
          });
        }
        const categoryExist = result.categories.find(
          (x) => x.info._id === p.category._id
        );
        if (categoryExist) {
          categoryExist.value += p.number;
        } else {
          result.categories.push({
            info: {
              _id: p.category._id,
              name: p.category.name,
            },
            value: p.number,
          });
        }
      });
    }
  });
  console.log(result);

  return result;
};

export const converToChartData = (list: ShoppingListDetail[]): ChartData[] => {
  let results: ChartData[] = [];
  const current_year = moment(new Date()).format('YYYY');

  list.forEach((s: ShoppingListDetail) => {
    if (s.status === 2) {
      const list_item_year = moment(s.createdAt).format('YYYY');
      if (list_item_year === current_year) {
        const list_item_month = moment(s.createdAt).format('MMMM');
        const list_item_month_text = moment(s.createdAt).format('M');
        let isExist = results.find((x) => x.month.text === list_item_month);
        const list_item_total = s.items.reduce((acc, curr) => {
          return acc + curr.number;
        }, 0);

        if (isExist) {
          isExist.total_items += list_item_total;
        } else {
          results.push({
            month: {
              text: list_item_month,
              number: Number(list_item_month_text),
            },
            total_items: list_item_total,
          });
        }
      }
    }
  });

  return results;
};

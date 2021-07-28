import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChartData } from '../../helpers/convertStats';

interface Props {
  data: ChartData[];
}

const mockData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const LineChartFc = ({ data }: Props) => {
  return (
    <ResponsiveContainer width='100%' aspect={4.0 / 2.0}>
      <LineChart data={data}>
        <XAxis dataKey='month.text' />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Line type='monotone' dataKey='total_items' stroke='#F9A109' />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartFc;

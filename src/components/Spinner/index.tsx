import { Spinner } from './Spinner.styles';

interface Props {
  width: string;
}

const SpinnerFc = ({ width }: Props) => {
  return <Spinner width={width} />;
};

export default SpinnerFc;

import {
  Label,
  LabelWrapper,
  Percent,
  PercentWrapper,
  Wrapper,
} from './StatsItem';

interface Props {
  label: string;
  percent: number;
  bg_color: string;
}

const StatsItem = ({ label, percent, bg_color }: Props) => {
  return (
    <Wrapper>
      <LabelWrapper>
        <Label>{label}</Label>
        <Percent>{percent}%</Percent>
      </LabelWrapper>
      <PercentWrapper width={`${percent}%`} bg_color={bg_color}>
        <span></span>
      </PercentWrapper>
    </Wrapper>
  );
};

export default StatsItem;

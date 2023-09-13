import React from 'react';
import { TooltipProps } from 'recharts';
import { styled } from 'styled-components';
import { DataProps } from '@/types';
import { fomatClock } from 'src/util/FomatClock';

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>): JSX.Element | null => {
  if (active && payload && payload.length) {
    const [bar, area] = payload;
    const barId = bar.payload as DataProps;
    const areaId = area.payload as DataProps;

    return (
      <TooltipContent>
        <TitleContent>
          <p>{barId.id}</p>
          <p>{fomatClock(barId.name)}</p>
        </TitleContent>

        <ValueContent>
          <p>
            Bar: <Bar>{barId.value_bar}</Bar>
          </p>
          <p>
            Area: <Area>{areaId.value_area}</Area>
          </p>
        </ValueContent>
      </TooltipContent>
    );
  }

  return null;
};

export default CustomTooltip;

const TooltipContent = styled.div`
  background-color: #fff;
  color: #606060;
  padding: 3px 10px;
  border-radius: 5px;
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  font-weight: bold;
`;

const ValueContent = styled.div`
  color: #333;
  margin-top: -15px;

  p {
    font-weight: bold;
  }
`;

const Bar = styled.span`
  color: #7ba2ff;
`;

const Area = styled.span`
  color: #fa7373;
`;

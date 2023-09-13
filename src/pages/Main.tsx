import FilterButton from 'src/components/FilterButton';
import React, { useContext } from 'react';
import {
  ComposedChart,
  Bar,
  Area,
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { CategoricalChartFunc } from 'recharts/types/chart/generateCategoricalChart';
import { styled } from 'styled-components';
import { IdContext } from 'src/context/FilterIdContext';
import { fomatClock } from 'src/util/FomatClock';
import { MockDataContext } from 'src/context/DataContext';
import { DataProps } from '@/types';

interface IActivePayload {
  activePayload: {
    payload: DataProps;
  }[];
}

const Main = () => {
  const { filterId, setFilterId } = useContext(IdContext);
  const { data, id } = useContext(MockDataContext);

  const filterClick = ({ activePayload }: IActivePayload) => {
    const payload = activePayload[0].payload;

    if (payload) setFilterId(payload.id);
  };

  return (
    <MainContent>
      <Parameter>
        <span className="red">value_area</span>
        <span className="blue">value_bar</span>
      </Parameter>

      <FilterContent>
        <FilterButton item={''} key={0} />
        {id?.map((item, idx) => {
          return <FilterButton item={item} key={idx + 1} />;
        })}
      </FilterContent>

      <ResponsiveContainer width="100%" height="75%">
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          onClick={filterClick as CategoricalChartFunc}
        >
          <XAxis scale="band" dataKey="name" tickFormatter={fomatClock} />
          <YAxis
            label={{ value: 'Bar', angle: 90, position: 'insideRight' }}
            yAxisId="right"
            type="number"
            dataKey="value_bar"
            name="bar"
            orientation="right"
            stroke="#949494"
            width={80}
          />
          <YAxis
            label={{ value: 'Area', angle: -90, position: 'insideLeft' }}
            yAxisId="left"
            type="number"
            dataKey="value_area"
            name="area"
            stroke="#949494"
            width={50}
            domain={[0, 200]}
          />

          <Tooltip />
          <Bar yAxisId="right" dataKey="value_bar" fill="#7ba2ff">
            {data?.map((item, index) => (
              <Cell
                cursor="pointer"
                fill={filterId === item.id ? '#949494' : '#7ba2ff'}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
          <Area yAxisId="left" dataKey="value_area" id="id" stroke="#fa7373" fill="#fa7373" />
        </ComposedChart>
      </ResponsiveContainer>
    </MainContent>
  );
};

export default Main;

const MainContent = styled.div`
  width: 100%;
  height: 100%;
`;

const Parameter = styled.div`
  text-align: right;
  padding: 10px 0 14px 0;

  span {
    position: relative;
    font-size: 12px;
    color: #606060;
    line-height: 13px;
    padding: 0 10px 0 25px;
  }

  span:before {
    content: '';
    position: absolute;
    left: 6px;
    top: 6px;
    display: block;
    width: 11px;
    height: 3px;
    border-radius: 3px;
  }

  .red:before {
    background-color: #fa7373;
  }

  .blue:before {
    background-color: #7ba2ff;
  }
`;

const FilterContent = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;

  margin: 0 10px 30px 0;
`;

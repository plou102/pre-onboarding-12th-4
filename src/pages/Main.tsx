import { Response } from '@/types';
import React, { useEffect, useState } from 'react';
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
import mock_data from 'src/mock/mock_data.json';
import { styled } from 'styled-components';

interface stateProps {
  name: string;
  id: string;
  value_area: number;
  value_bar: number;
}

const Main = () => {
  const response: Response = mock_data.response;
  const [mockData, setMockData] = useState<stateProps[]>([]);
  const [index, setIndex] = useState(0);
  const data = Object.values(response);
  const name = Object.keys(response);
  const [id, setId] = useState<string[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (index < data.length) {
      reData(index);
      setIndex(index + 1);

      !id.includes(data[index].id) && setId([...id, data[index].id]);
    }
  }, [index]);

  const reData = (idx: number) => {
    const newData = {
      name: name[idx],
      id: data[idx].id,
      value_area: data[idx].value_area,
      value_bar: data[idx].value_bar,
    };
    setMockData([...mockData, newData]);
  };

  const fomatClock = (value: string) => {
    const date = new Date(value);
    const min = String(date.getMinutes()).padStart(2, '0');
    const sec = String(date.getSeconds()).padStart(2, '0');

    // if (idx % 20 === 0) {
    //   return `${min}:${sec}`;
    // }

    return `${min}:${sec}`;
  };

  const filterBtnClick = (item: string) => {
    setFilter(item);
  };

  interface IActivePayload {
    activePayload: {
      payload: stateProps;
    }[];
  }

  const filterClick = ({ activePayload }: IActivePayload) => {
    const payload = activePayload[0].payload;

    if (payload) setFilter(payload.id);
  };

  return (
    <MainContent>
      <Parameter>
        <span className="red">value_area</span>
        <span className="blue">value_bar</span>
      </Parameter>

      <FilterContent>
        <FilterBtn onClick={() => filterBtnClick('')}>헤제</FilterBtn>
        {id.map(item => {
          return <FilterBtn onClick={() => filterBtnClick(item)}>{item}</FilterBtn>;
        })}
      </FilterContent>

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={mockData}
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
            {data.map((item, index) => (
              <Cell
                cursor="pointer"
                fill={filter === item.id ? '#949494' : '#7ba2ff'}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
          <Area yAxisId="left" dataKey="value_area" id="id" stroke="#fa7373" fill="#fa7373" />
        </ComposedChart>
      </ResponsiveContainer>

      {/* <YContent>
        <LeftYLine>
          {Array(201)
            .fill(0)
            .map((_, idx) => {
              if (idx % 40 === 0) {
                return <LeftPoint>{idx}</LeftPoint>;
              }
            })}
        </LeftYLine>

        <RightYLine>
          {Array(20001)
            .fill(0)
            .map((_, idx) => {
              if (idx % 4000 === 0) {
                return <RightPoint>{idx}</RightPoint>;
              }
            })}
        </RightYLine>
      </YContent> */}

      {/* <XLine>
        {name.map((item, idx) => {
          const time = getClock(item, idx);
          return <Xpoint>{time}</Xpoint>;
        })}
      </XLine> */}
    </MainContent>
  );
};

export default Main;

const MainContent = styled.div`
  .recharts-wrapper {
    width: 100%;
  }
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

  margin: 0 10px 70px 0;
`;

const FilterBtn = styled.button`
  border-radius: 10px;
  padding: 3px 5px;
  background-color: transparent;
  border: 1px solid #949494;
  color: #606060;
`;

// const XLine = styled.div`
//   position: relative;
//   width: 92%;
//   margin: 0 auto;
//   border: 1px solid #949494;
// `;

// const Xpoint = styled.span`
//   display: block;
//   float: left;
//   width: calc(100% / 15);
//   font-size: 10px;
//   color: #949494;
//   line-height: 30px;
//   text-transform: uppercase;
//   text-align: center;

//   &:before {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     display: block;
//     width: 11px;
//     height: 3px;
//     border-radius: 3px;
//     background-color: #949494;
//     transform: rotate(90deg);
//     margin-left: calc((100% / 15) / 2.2);
//   }
// `;

// const YContent = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   margin: 0 auto -3px;
// `;

// const LeftYLine = styled.div`
//   display: flex;
//   width: 3%;
//   flex-direction: column-reverse;
//   gap: 70px;
//   border-right: 1px solid #949494;
//   padding-right: 10px;
// `;

// const RightYLine = styled.div`
//   display: flex;
//   width: 3%;
//   flex-direction: column-reverse;
//   gap: 70px;
//   border-left: 1px solid #949494;
//   padding-left: 10px;
// `;

// const LeftPoint = styled.span`
//   color: #949494;
//   text-align: right;
//   font-size: 12px;
// `;

// const RightPoint = styled.span`
//   color: #949494;
//   font-size: 12px;
// `;

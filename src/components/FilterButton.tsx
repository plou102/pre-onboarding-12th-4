import { IdContext } from 'src/context/FilterIdContext';
import React, { useContext } from 'react';
import { css, styled } from 'styled-components';

const FilterButton = ({ item }: { item: string }) => {
  const { filterId, setFilterId } = useContext(IdContext);

  return (
    <FilterBtn click={filterId === item ? 'true' : 'false'} onClick={() => setFilterId(item)}>
      {item === '' ? '헤제' : item}
    </FilterBtn>
  );
};

export default FilterButton;

const FilterBtn = styled.button<{ click: string }>`
  border-radius: 10px;
  padding: 3px 5px;
  background-color: transparent;
  border: 1px solid #949494;
  color: #606060;
  ${props =>
    props.click === 'true' &&
    css`
      border: 1px solid #7ba2ff;
      color: #7ba2ff;
    `}
`;

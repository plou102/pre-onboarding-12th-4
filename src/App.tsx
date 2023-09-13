import './App.css';
import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { FilterIdContext } from './context/FilterIdContext';

function App() {
  return (
    <FilterIdContext>
      <Container>
        <Outlet />
      </Container>
    </FilterIdContext>
  );
}

export default App;

const Container = styled.div`
  width: 95%;
  height: 65vh;
  border-radius: 20px;
  border: 2px solid #2e2e2e;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 5px 5px 5px #6e6e6e;
  padding: 10px 15px 0;
`;

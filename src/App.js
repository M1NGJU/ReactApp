import { Container } from '@mui/material';
import './App.css';
// import Main from './Main';

import Event from './event'; // 파일 경로와 컴포넌트 이름 수정

const App = () => {
  return (
    <Container>
      {/* <Main /> */}
      <Event /> {/* 컴포넌트 이름 수정 */} 
    </Container>
  );
}

export default App;

import React from 'react';
import DropProvider from './Components/Dropdown/DropContext';
import Layout from './Components/Layout';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <DropProvider>
        <GlobalStyles/>
        <Layout/>
      </DropProvider>
    </>
  );
}

export default App;

import '@/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import PublicRouter from '@/components/PublicRouter';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<PublicRouter />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;

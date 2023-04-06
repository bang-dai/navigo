import '@/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import PublicRouter from '@/components/PublicRouter';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <ChakraProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/*' element={<PublicRouter />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ChakraProvider>
    </UserProvider>
  );
}

export default App;

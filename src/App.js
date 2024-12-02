import './App.css';
import { Home } from './modules/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Movies } from './modules/Movies';
import { QueryClient , QueryClientProvider} from '@tanstack/react-query';
import { Admin } from './modules/Admin';
import { createContext, useState } from 'react';

export const Context = createContext();

function App() {
  const client = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false
      }
    }
  });
  const [pageNo,setPageNo] = useState(1);
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Context.Provider value={[pageNo, setPageNo]}>
          <Router>      
            <Home/>
            <Routes>
                <Route path='/movies' element={<Movies/>}/>
              
              <Route path='/admin' element={<Admin/>}/>
            </Routes>
          </Router>
        </Context.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

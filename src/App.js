import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<h2>a shop</h2>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;

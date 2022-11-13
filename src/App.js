import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import Contact from './routes/contact/contact.component';
import Shop from './routes/shop/shop.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="sign-in" element={<SignIn/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;

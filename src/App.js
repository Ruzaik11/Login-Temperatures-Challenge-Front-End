
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import {BrowserRouter , Route} from 'react-router-dom'
import Protected from './HOC/Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>

          <Route exact path="/" > 
            <Protected component={Home}></Protected>
          </Route>

          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

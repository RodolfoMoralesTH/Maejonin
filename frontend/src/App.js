import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/" component={HomeScreen} exact />

    </Router>
  );
}

export default App;

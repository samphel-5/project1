import { BrowserRouter as Router, Route } from "react-router-dom";
import RegistrationFrom from "./Components/Form.component";
import FileUploader from "./Components/Fileuploader/FileUploader";
import Login from "./Components/Login.component";
import NavApp from "./Components/NavBar/nav.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/register" component={RegistrationFrom} />
        <Route path="/nav" component={NavApp} />
        <Route path='/fileuploader' component={FileUploader}/>
      </div>
    </Router>
  );
}

export default App;

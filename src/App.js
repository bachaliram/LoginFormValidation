import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome To React</h1>.
      <h2>Steps create repository</h2>
      <div>
      <form>
  <div className="mb-3">
    <label for="username" className="form-label">Username</label>
    <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username"/>
  </div>
  <div className="mb-3">
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password"/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
      </div>
    </div>
  );
}

export default App;

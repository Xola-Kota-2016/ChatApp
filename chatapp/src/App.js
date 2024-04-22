import logo from './logo.svg';

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card-group mb-0">
            <div className="card p-4">
              <div className="card-body">
                <h1>Login</h1>
                <p className="text-muted">Sign In to your account</p>
                <form action="/login" method="POST">
                  <div className="input-group mb-3">
                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                    <input type="text" className="form-control" required name="email" placeholder="email" />
                  </div>
                  <div className="input-group mb-4">
                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                    <input type="password" className="form-control" required name="password" placeholder="Password" />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <input type="submit" className="btn btn-primary px-4" value="Login" />
                    </div>
                    <div className="col-6 text-right">
                      <button type="button" className="btn btn-link px-0">Forgot password?</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
              <div className="card-body text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Create a new chat Account</p>
                  <a className="btn btn-primary active mt-3" href="register.html">Register Now!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

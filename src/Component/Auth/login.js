import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState } from "react";

 const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = async e => {
    e.preventDefault();

    const user = {
      username: username,
      password: password
    };

    const { data } = await axios.post('http://localhost:8000/token/', user, {
      headers: {
        'Content-Type': 'application/json'
      }
    }, { withCredentials: true });

    console.log(data)
    localStorage.clear();
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
    window.location.href = '/Arborescence';

  }


  
  return (
    <div class="container ps-md-12">
      <div class="row g-0">
        <div class="d-none d-md-flex col-md-4 col-lg-4 bg-image"><img src="images/auth.svg"/></div>
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <h3 class="login-heading mb-4">Welcome back!</h3>

                  <form onSubmit={submit}>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={username}
                        required onChange={e => setUsername(e.target.value)} />
                      <label for="floatingInput">Username</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={password}
                        required onChange={e => setPassword(e.target.value)} />
                      <label for="floatingPassword">Password</label>
                    </div>

                    <div class="d-grid">
                      <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                      <div class="text-center">
                        <a class="small" href="#">Forgot password?</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Login
import "./register.scss"
import { Link } from "react-router-dom"
const Register = () => {
  return (
    <div className="register">
      <div className="card">
            <div className="left">
                    <h1>ORON</h1>
                    <p>
                     
                      Our redundances other necessaries.
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                    
            </div>
            <div className="right">
                  <h1>Register</h1>
                  <form >
                  <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    
                    <button>Register</button>
                  </form>
            </div>
      </div>
    
    </div>
  )
}

export default Register
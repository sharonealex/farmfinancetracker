import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addUser } from '../utils/api';

import Auth from '../utils/auth';



const SignUp = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
 

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const res = await addUser(formState);

      if (!res.ok) {
        throw new Error('something went wrong!');
      }

      const {token, user} = await res.json();
      Auth.login(token);
      console.log(user, "user from db back");
     // history.push(`/matchup/${matchup._id}`);
    } catch (err) {
      console.error(err);
    }

  };

  

  return (
    <main className="bg-signup text-dark mb-4 py-3 display-flex  min-100-vh">
     <div className="col-12 col-lg-5">
     <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Join our farmers!</h4>
          <div className="card-body">
            {false ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                 <input
                  className="form-input"
                  placeholder="Your skills    plantation, crop rotation.."
                  name="skills"
                  type="text"
                  value={formState.skills}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            
          </div>
          </div>
     </div>
    </main>
  );
};

export default SignUp;


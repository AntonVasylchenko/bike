import React from 'react'
import "./form.css"
import SignIn from './SignIn';
import SignUp from './SignUp';

const Form = () => {
  const tabMode = ["Sign In", "Sign Up"];
  const [tab, setTab] = React.useState(tabMode[0]);
  const handleTab = (i) => {
    setTab(tabMode[i])
  }


  return (
    <div className='form'>
      <div className='form_nav'>
        <ul className='form_list'>
          {tabMode.map((el, index) => {
            return (
              <li
                onClick={() => handleTab(index)}
                className={tab === el ? "form_list h3 active" : "form_list h3"}
                key={`sign_${index}`}
              >
                <span>{el}</span>
              </li>
            )
          })}
        </ul>
      </div>
      {
        tab === tabMode[0]
        ? <SignIn/>
        : <SignUp handleTab={handleTab} login={true}/>
      }
    </div>
  )
}

export default Form
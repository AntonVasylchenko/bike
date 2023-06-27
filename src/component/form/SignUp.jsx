import React from 'react'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import { userFetch } from '../../api/user'
import { useDispatch } from 'react-redux'

const formInObj = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter a name",
    label: "Name*"
  },
  {
    id: "number_phone",
    type: "text",
    placeholder: "Enter phone number",
    label: "Phone number*"
  },
  {
    id: "e_mail",
    type: "text",
    placeholder: "Enter E-mail",
    label: "E-mail*"
  },
  {
    id: "number_password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password*"
  },
]


const SignUp = ({ login, handleTab }) => {
  const dispath = useDispatch();
  const [send, setSend] = React.useState(false)
  const [user, setUser] = React.useState({
    name: "",
    number_phone: "",
    e_mail: "",
    number_password: ""
  })

  const handleSend = () => {
    setSend(prev => !prev)
  }
  const handleUser = (key, value) => {
    setUser({ ...user, [key]: value });
  }

  const sendForm = (event) => {
    event.preventDefault();
    dispath(userFetch(user));
    setUser({
      name: "",
      number_phone: "",
      e_mail: "",
      number_password: ""
    })
    handleTab(0);
  }


  return (
    <form method='post' className='form_sign forn-in'>
      {formInObj.map(el => {
        return (
          <Input
            changHeandle={handleUser}
            value={user[el.id]}
            key={el.id}
            id={el.id}
            type={el.type}
            placeholder={el.placeholder}
            label={el.label}
          />
        )
      })}
      <div className='form-agree'>
        <input type="checkbox" id='send' onChange={handleSend} />
        <label className='h3' htmlFor='send'>Consent to personal data processing</label>
      </div>
      <Button
        disabled={!send}
        onClick={sendForm}
        className="btn-form"
      >Sign up</Button>
      {
        login && <p className="btn-login h3">Already authorized? <span onClick={() => handleTab(0)}>Sign In</span></p>
      }
    </form>
  )
}

export default SignUp
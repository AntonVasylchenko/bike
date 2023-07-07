import React from 'react'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getCheckLoginAction } from '../../store/action/userAction'


const formInObj = [
    {
        id: "phone",
        type: "text",
        placeholder: "Enter phone number",
        label: "Phone number*"
    },
    {
        id: "password",
        type: "password",
        placeholder: "Enter your password",
        label: "Password*"
    },
]


const SignIn = () => {
    const dispath = useDispatch();
    const allUsers = useSelector(state => state.user.users);
    const [user, setUser] = React.useState({
        phone: "",
        password: ""
    })

    const handleUser = (key, value) => {
        setUser({ ...user, [key]: value })
    }

    const checkLogin = (event) => {
        event.preventDefault();
        const isUser =  allUsers.some(el => el.number_phone === user.phone && el.number_password === user.password);
        if (isUser) {
            dispath(getCheckLoginAction(user));
            window.location.reload();
        } else {
            alert("Check the number or password")
        }
    }

    return (
        <form method='post' className='form_sign forn-in'>
            {formInObj.map(el => {
                return (
                    <Input
                        changHeandle={handleUser}
                        key={el.id}
                        id={el.id}
                        type={el.type}
                        placeholder={el.placeholder}
                        label={el.label}
                        value={user[el.id]}
                    />
                )
            })}
            <Button
                onClick={checkLogin}
                className="btn-form"
            >Sign in</Button>

        </form>
    )
}

export default SignIn
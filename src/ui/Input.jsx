import React from 'react'
import PropTypes from 'prop-types';


const Input = ({ id, type, placeholder, label, changHeandle, value }) => {
    const inputElement = <>
        {
            changHeandle
                ?
                <input
                    onChange={(event) => changHeandle(id, event.target.value)}
                    className='h3'
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    required
                    value={value}
                />
                :
                <input
                    className='h3'
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    required
                    value={value}
                />
        }
    </>
    return (
        <div className={`forn-${id} form-input`}>
            <label className='captions' htmlFor={id}>{label}</label>
            {inputElement}
        </div>
    )
}
Input.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}


export default Input
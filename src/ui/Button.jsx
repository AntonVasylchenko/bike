import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames'
const Button = ({ className, outline, disabled, children, onClick }) => {


    return (
        <>
        {
            disabled ?
            <button 
                onClick={onClick} 
                disabled
                className={classNames("button", className,
                {
                    "button--outline": outline === true
                }
            )}>
                {children}
            </button> :
            <button 
                onClick={onClick} 
                className={classNames("button", className,
                    {
                        "button--outline": outline === true
                    }
                )}>
                    {children}
            </button>
        }
        </>

    )
}

Button.propTypes = {
    className:PropTypes.string.isRequired,
    outline:PropTypes.bool.isRequired,
    disabled:PropTypes.bool.isRequired,
}
Button.defaultProps = {
    className: "",
    outline: false,
    disabled: false
}


export default Button
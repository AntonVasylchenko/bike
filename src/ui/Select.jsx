import React from 'react';
import PropTypes from 'prop-types';


export const Select = ({ className, name, array,changePara }) => {
    return (
        <div className={`item-filter ${className}`}>
            <label htmlFor={name}>{name}</label>
            <select name={name} id={name} onChange={changePara}>
                {array.map(el => {
                    return (
                        <option
                            value={el !== "All" ? el : ""}
                            key={`b_${el}`}
                        >
                            {el}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

Select.propTypes = {
    className:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    array:PropTypes.arrayOf(PropTypes.string).isRequired,
    changePara:PropTypes.func.isRequired
}
Select.defaultProps = {
    className: ""
}



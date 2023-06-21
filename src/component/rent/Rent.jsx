import React from 'react'
import "./rent.css"
import { Select } from '../../ui/Select'
import { getDeliveryAction, getRentAction, getTimeAction } from '../../store/action/dataAction';
import { useDispatch, useSelector } from 'react-redux';
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.css";

const arrayType = ["Day", "Hour"];
const arrayDelivery = ["Address", "Self-export"];
const Rent = () => {
    const dispath = useDispatch();
    const handleRent = (event) => {
        dispath(getRentAction(event.target.value))
    }
    const handleDelivery = (event) => {
        dispath(getDeliveryAction(event.target.value))
    }
    const typeRent = useSelector(state => state.data.typeRent);
    const handleTime = (event) => {
        if (event === null || event === undefined)  return;
        
        let obj = {
            day: 0,
            hour: 0,
            minute: 0,
        };
        
        switch (typeRent) {
            case "Day": {
                let startDate = new Date(event[0]).getTime();
                let finishDate = new Date(event[1]).getTime();
                
                let days = (finishDate - startDate) / (1000 * 60 * 60 * 24);
                obj.day = finishDate > startDate ? days : 0;
                break;
            }
            case "Hour": {
                let startDate = new Date(event[0]);
                let finishDate = new Date(event[1]);
                
                let hours = finishDate.getHours() - startDate.getHours();
                let minutes = finishDate.getMinutes() - startDate.getMinutes();
                
                obj.hour = finishDate.getHours() > startDate.getHours() ? hours : 0;
                obj.minute = finishDate.getMinutes() > startDate.getMinutes() ? minutes : 0;
                break;
            }
            default:
                break;
        }
        dispath(getTimeAction(obj))
    }    
    return (
        <section className='rent'>
            <div className="rent-container page-width">
                <Select
                    changePara={handleRent}
                    className="item-filter_type"
                    name="type"
                    array={arrayType}
                />
                <div className='rent-date'>
                    <label htmlFor=''>Choose the time</label>
                    <DateRangePicker
                        format={typeRent === "Hour" ? 'hh-mm' : "yyyy-MM-dd"}
                        placeholder="Time"
                        onChange={handleTime} />
                </div>
                <Select
                    changePara={handleDelivery}
                    className="item-filter_delivey"
                    name="delivey"
                    array={arrayDelivery}
                />
            </div>
        </section>
    )
}

export default Rent
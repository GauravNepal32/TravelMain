import React, { useState } from 'react'

const DayTrip = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={isOpen ? "isOpen" : ""}>
            <div onClick={(e) => { setIsOpen(!isOpen) }} className={isOpen ? "day-plan-child mb-3 isOpen" : "day-plan-child mb-3"}>
                <div className="day-plan-title big-heading fs-5">
                    {props.tripName}
                </div>
                <div className={isOpen ? "day-plan-text d-block mt-3" : 'd-none'} >
                    <p>{props.tripDescription}</p>
                </div>
            </div >
        </div>
    )
}

export default DayTrip
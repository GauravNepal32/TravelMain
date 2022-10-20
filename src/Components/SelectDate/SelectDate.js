import React, { useState, useEffect } from 'react'
import './Select.css'
const SelectDate = (props) => {
    const [openOption, setOpenOption] = useState(false)
    const [selectedDate, setSelectedDate] = useState('No of Days');

    useEffect(() => {
        const concernedElement = document.querySelector(".date-close-click");
        document.addEventListener("mousedown", (event) => {
            if (concernedElement.contains(event.target)) {

            } else {

                setOpenOption(false)
            }
        });
    }, [openOption])

    return (
        <div className={openOption ? " date-close-click is-open" : ' date-close-click'}>
            <div onClick={() => { setOpenOption(!openOption) }} className="custom-select pt-1">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div className="select-icon-container d-flex ps-2 align-items-center">
                            <span class="material-symbols-outlined">
                                history

                            </span>
                        </div>
                        <div className="custom-select-text-container position-relative ms-3 lh-sm">
                            <div className="custom-placeholder-container text-secondary mb-0">
                        Duration

                            </div>
                            <div className="selected-option fw-bold mt-0">
                        {selectedDate}

                            </div>
                        </div>
                    </div>
                    <div className="arrow-container pe-3 fs-6">
                        <span class="material-symbols-outlined">
                            expand_more
                        </span>
                    </div>
                </div>
            </div>
            <div className={openOption ? 'custom-select-option-container position-absolute d-block mt-1' : 'custom-select-option-container d-none'}>
                <ul class="list-group">
                    <li onClick={() => {
                        setSelectedDate('1-7 Days')
                        setOpenOption(!openOption)
                        props.setMinDurationSearch(1)
                        props.setMaxDurationSearch(7)
                    }} class="list-group-item">1-7 Days</li>
                    <li onClick={() => {
                        setSelectedDate('8-14 Days')
                        setOpenOption(!openOption)
                        props.setMinDurationSearch(8)
                        props.setMaxDurationSearch(14)
                    }} class="list-group-item">8-14 Days</li>
                    <li onClick={() => {
                        setSelectedDate('15+ Days')
                        setOpenOption(!openOption)
                        props.setMinDurationSearch(15)
                        props.setMaxDurationSearch(30)
                    }} class="list-group-item">15+ Days</li>
                </ul>
            </div>
        </div>
    )
}

export default SelectDate
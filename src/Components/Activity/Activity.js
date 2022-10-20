import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Select.css'
const Activity = (props) => {
    const [openOption, setOpenOption] = useState(false)
    const [selectedActivity, setSelectedActivity] = useState('Activity');
    const [getActivity, setGetActivity] = useState([]);

    const loadData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/get-activity')
            setGetActivity(response.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        const concernedElement = document.querySelector(".activity-close-click");
        document.addEventListener("mousedown", (event) => {
            if (concernedElement.contains(event.target)) {

            } else {

                setOpenOption(false)
            }
        });
    }, [openOption])

    return (
        <div className={openOption ? "activity-close-click is-open" : 'activity-close-click'}>
            <div onClick={() => { setOpenOption(!openOption) }} className="custom-select pt-1">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div className="select-icon-container d-flex ps-2 align-items-center">
                            <span class="material-symbols-outlined">
                                nordic_walking
                            </span>
                        </div>
                        <div className="custom-select-text-container position-relative ms-3 lh-sm">
                            <div className="custom-placeholder-container text-secondary mb-0">
                                Activity
                            </div>
                            <div className="selected-option fw-bold mt-0">
                                {selectedActivity}
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
            <div className={openOption ? 'select-option-container position-absolute d-block' : 'select-option-container d-none'}>
                <ul class="list-group">
                    {getActivity.map((act, index) => (
                        <li key={index} onClick={() => {
                            setSelectedActivity(act.name)
                        setOpenOption(!openOption)
                            props.setActivitySearch(act.id)
                        }} class="list-group-item">{act.name}</li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default Activity
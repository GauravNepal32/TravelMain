import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Select.css'
const Select = (props) => {
    const [openOption, setOpenOption] = useState(false)
    const [selectedValue, setSelectedValue] = useState('Destination');
    const [getLocation, setGetLocation] = useState([]);

    const loadData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/get-location')
            console.log(response.data.data)
            setGetLocation(response.data.data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        const concernedElement = document.querySelector(".close-click");
        document.addEventListener("mousedown", (event) => {
            if (concernedElement.contains(event.target)) {

            } else {

                setOpenOption(false)
            }
        });
    }, [openOption])

    return (
        < div className={openOption ? "close-click is-open " : 'close-click'} >
            {getLocation && <>
            <div onClick={() => { setOpenOption(!openOption) }} className="custom-select pt-1">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div className="select-icon-container d-flex ps-2 align-items-center">
                            <span class="material-symbols-outlined">
                                person_pin_circle
                            </span>
                        </div>
                        <div className="custom-select-text-container position-relative ms-3 lh-sm">
                            <div className="custom-placeholder-container text-secondary mb-0">
                        Location

                            </div>
                            <div className="selected-option fw-bold mt-0">
                        {selectedValue}

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
                <div className={openOption ? 'custom-select-option-container position-absolute d-block' : 'custom-select-option-container d-none'}>
                <ul class="list-group">
                        {
                            getLocation.map((loca, index) => (
                                <li key={index} onClick={() => {
                                    setSelectedValue(loca.name)
                                    setOpenOption(!openOption)
                                    props.setLocationSearch(loca.id)
                                }} class="list-group-item">{loca.name}</li>
                            ))
                        }
                        {/* <li onClick={() => {
                        setSelectedValue('India')
                        setOpenOption(!openOption)
                    }} class="list-group-item">India</li>
                    <li onClick={() => {
                        setSelectedValue('Nepal')
                        setOpenOption(!openOption)
                    }} class="list-group-item">Nepal</li>
                    <li onClick={() => {
                        setSelectedValue('China')
                        setOpenOption(!openOption)
                    }} class="list-group-item">China</li>
                    <li onClick={() => {
                        setSelectedValue('Bhutan')
                        setOpenOption(!openOption)
                    }} class="list-group-item">Bhutan</li>
                    <li onClick={() => {
                        setSelectedValue('Dubai')
                        setOpenOption(!openOption)
                    }} class="list-group-item">Dubai</li>
                    <li onClick={() => {
                        setSelectedValue('Singapore')
                        setOpenOption(!openOption)
                    }} class="list-group-item">Singapore</li>
                    <li onClick={() => {
                        setSelectedValue('Malaysia')
                        setOpenOption(!openOption)
                    }} class="list-group-item">Malaysia</li> */}
                </ul>
            </div>

            </>}
        </div>

    )
}

export default Select
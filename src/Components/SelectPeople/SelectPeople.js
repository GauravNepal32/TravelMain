import React, { useState, useEffect } from 'react'
import './Select.css'
const SelectPeople = (props) => {
    const [openOption, setOpenOption] = useState(false)
    const [selectedAdultPeople, setSelecteAdultdPeople] = useState(0);
    const [selectedYouthPeople, setSelectedYouthPeople] = useState(0);
    const [selectedChildPeople, setSelectedChildPeople] = useState(0);
    const [selectedPeople, setSelectedPeople] = useState(0);

    useEffect(() => {
        const concernedElement = document.querySelector(".people-close-click");
        document.addEventListener("mousedown", (event) => {
            if (concernedElement.contains(event.target)) {

            } else {

                setOpenOption(false)
            }
        });
    }, [openOption])

    useEffect(() => {
        props.setGuestsSearch(selectedPeople)
    }, [selectedPeople])

    useEffect(() => {
        setSelectedPeople(selectedAdultPeople + selectedChildPeople + selectedYouthPeople)
    }, [selectedAdultPeople, selectedYouthPeople, selectedChildPeople])

    return (
        <div className={openOption ? " people-close-click is-open" : ' people-close-click'}>
            <div onClick={() => { setOpenOption(!openOption) }} className="custom-select pt-1">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div className="select-icon-container d-flex ps-2 align-items-center">
                            <span class="material-symbols-outlined">
                                group
                            </span>
                        </div>
                        <div className="custom-select-text-container position-relative ms-3 lh-sm">
                            <div className="custom-placeholder-container text-secondary mb-0">
                                Guests
                            </div>
                            <div className="selected-option fw-bold mt-0">
                                {selectedPeople}
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
                    <li className="list-group-item py-3 mt-1">
                        <div className="d-flex justify-content-between">
                            <div className="fw-bold p-2">
                                {selectedAdultPeople}
                            </div>
                            <div className="fw-light p-2">
                                Adult
                            </div>
                            <div className="controller d-flex me-1 p-2">
                                <div onClick={() => {
                                    setSelecteAdultdPeople(Math.max(0, selectedAdultPeople - 1))

                                }} className="sub-container me-3 p-2">-</div>
                                <div onClick={() => {
                                    setSelecteAdultdPeople(selectedAdultPeople + 1)

                                }} className="add-container p-2">+</div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3 ">
                        <div className="d-flex justify-content-between">
                            <div className="fw-bold p-2">
                                {selectedYouthPeople}
                            </div>
                            <div className="fw-light p-2">
                                Youth
                            </div>
                            <div className="controller d-flex me-1 p-2">
                                <div onClick={() => {
                                    setSelectedYouthPeople(Math.max(0, selectedYouthPeople - 1))

                                }} className="sub-container me-3 p-2">-</div>
                                <div onClick={() => {
                                    setSelectedYouthPeople(selectedYouthPeople + 1)

                                }} className="add-container p-2">+</div>
                            </div>
                        </div>
                    </li><li className="list-group-item py-3">
                        <div className="d-flex justify-content-between">
                            <div className="fw-bold p-2">
                                {selectedChildPeople}
                            </div>
                            <div className="fw-light p-2">
                                Children
                            </div>
                            <div className="controller d-flex me-1 p-2">
                                <div onClick={() => {
                                    setSelectedChildPeople(Math.max(0, selectedChildPeople - 1))

                                }} className="sub-container me-3 p-2">-</div>
                                <div onClick={() => {
                                    setSelectedChildPeople(selectedChildPeople + 1)

                                }} className="add-container p-2">+</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


    )
}

export default SelectPeople
import React from 'react'
import './Offer.css'
const Offer = () => {
    return (
        <div>
            <div className="container px-md-5">
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="big-heading offer-heading flex-shrink-1 fs-1 fw-bold text-wrap">
                        What we are offering to creative people.
                    </div>
                    <div className="offer-wrapper flex-grow-3 d-flex flex-wrap ms-md-5 mt-md-0 mt-4 mx-auto">
                        <div className="offer-child">
                            <div className="icon-container">
                                <span class="material-symbols-outlined">
                                    beach_access
                                </span>
                            </div>
                            <div className="icon-text">
                                100 New Daily user
                            </div>
                        </div>
                        <div className="offer-child">
                            <div className="icon-container">
                                <span class="material-symbols-outlined">
                                    beach_access
                                </span>
                            </div>
                            <div className="icon-text">
                                Strong Brand Building
                            </div>
                        </div>
                        <div className="offer-child">
                            <div className="icon-container">
                                <span class="material-symbols-outlined">
                                    beach_access
                                </span>
                            </div>
                            <div className="icon-text">
                                We gurantee success
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Offer
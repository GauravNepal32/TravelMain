import React, { useEffect, useRef } from 'react'
import './ParallexHome.css'
import useOnScreen from '../../Hooks/useOnScreen'
const ParallexHome = () => {
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    console.log(isVisible)
    const runCounter = () => {
        if (isVisible) {
            // Selector
            const counters = document.querySelectorAll('.counter');
            // Main function
            for (let n of counters) {
                const updateCount = () => {
                    const target = + n.getAttribute('data-target');
                    const count = + n.innerText;
                    const speed = 10000; // change animation speed here
                    const inc = target / speed;
                    if (count < target) {
                        n.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 1);
                    } else {
                        n.innerText = target;
                    }
                }
                updateCount();
            }
        }
    }

    useEffect(() => {
        runCounter();
    }, [isVisible]);
    return (
        <div className='my-5'>
            <div className="parallax">
                <div className="my-auto">
                    <div className="my-auto">
                        <div className="fancy-font text-center">
                            Are you ready to travel?
                        </div>
                        <div className="hook-text text-center">
                            Elscript is a World Leading Online Tour Booking Platform
                        </div>
                    </div>
                </div>
            </div>
            <div ref={ref} className="stats-container container py-5">
                <div className="row row-cols-md-4 row-cols-sm-2 g-5 row-cols-1 ">
                    <div className="col d-flex flex-column align-items-center justify-content-center lh-sm">
                        <div className="fancy-font counter package-num" data-target='89'>

                        </div>
                        <div className="context-stats fs-5 fw-semibold text-secondary">
                            Total Package
                        </div>
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center lh-sm">
                        <div className="fancy-font counter package-num" data-target='138'>
                            0
                        </div>
                        <div className="context-stats fs-5 fw-semibold text-secondary">
                            Satisfied Customer
                        </div>
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center lh-sm">
                        <div className="fancy-font counter package-num" data-target='10'>

                        </div>
                        <div className="context-stats fs-5 fw-semibold text-secondary">
                            Partners
                        </div>
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center lh-sm">
                        <div className="fancy-font counter package-num" data-target='5'>

                        </div>
                        <div className="context-stats fs-5 fw-semibold text-secondary">
                            Local Guides
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ParallexHome
import React from 'react'

const ReviewStar = (props) => {
    return (
        <div className="review-star-container mt-1">
            <div className="review-container d-flex">
                {[...new Array(props.totalStars)].map((arr, index) => {
                    return index < props.activeStars ?
                        <div className="review-star">
                            <span class="material-symbols-outlined">
                                star
                            </span>
                        </div> :
                        <div className="review-star-half">
                            <span class="material-symbols-outlined">
                                star
                            </span>
                        </div>;
                })}
            </div>
        </div>
    )
}

export default ReviewStar
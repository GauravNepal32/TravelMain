import React, { useState, useEffect } from 'react'

const SetReviewStar = (props) => {
    const [rating, setRating] = useState(5);
    const [hover, setHover] = useState(0);
    useEffect(() => {
        props.rated(rating)
    }, [rating])
    return (
        <div className="star-rating mt-1">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span class="material-symbols-outlined">
                            star
                        </span>
                    </button>
                );
            })}
        </div>
    );
}

export default SetReviewStar
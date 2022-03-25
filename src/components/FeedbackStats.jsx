import React from "react";
import { MdStar } from "react-icons/md";

function FeedbackStats({ feedbacks }) {
    let averageRating =
        feedbacks.reduce((acc, curr) => acc + curr.rating, 0) /
        feedbacks.length;
    averageRating = averageRating.toFixed(1).replace(/\.0$/, "");

    return (
        <>
            <br />
            <div className="feedback-stats">
                <div className="control">
                    <div className="tags has-addons are-medium">
                        <span className="tag is-dark">{feedbacks.length}</span>
                        <span className="tag is-link">Reviews</span>
                    </div>
                </div>
                <div className="control">
                    <div className="tags has-addons are-medium">
                        <span className="tag is-dark">Average rating</span>
                        <span className="tag is-success">
                            {isNaN(averageRating) ? 0 : averageRating}
                            <MdStar color="gold" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeedbackStats;

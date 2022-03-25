import React from "react";
import FeedbackCard from "./shared/FeedbackCard";

function FeedbackItem(props) {
    const { feedback, handleDelete } = props;
    return <FeedbackCard item={feedback} handleDelete={handleDelete} />;
}

export default FeedbackItem;

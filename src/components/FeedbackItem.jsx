import React from "react";
import FeedbackCard from "./shared/FeedbackCard";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem(props) {
    const { handleDelete, handleEdit } = useContext(FeedbackContext);

    const { feedback } = props;
    return (
        <FeedbackCard
            item={feedback}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
        />
    );
}

export default FeedbackItem;

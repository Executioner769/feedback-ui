import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackButton from "./shared/FeedbackButton";

function FeedbackForm() {
    const { addFeedback, feedbackEdit, updateFeedback } =
        useContext(FeedbackContext);

    const [text, setText] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [help, setHelp] = useState("");
    const [rating, setRating] = useState(5);

    useEffect(() => {
        if (feedbackEdit.isEditable === true) {
            setButtonDisabled(false);
            setText(feedbackEdit.item.review);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);

    const handleTextChange = (e) => {
        if (text === "") {
            setButtonDisabled(true);
            setHelp(null);
        } else if (text.length > 0 && text.length < 10) {
            setButtonDisabled(true);
            setHelp("Text must be at least 10 characters long");
        } else {
            setButtonDisabled(false);
            setHelp(null);
        }
        setText(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(Number(e.target.value));
    };

    function backToDefault() {
        setText("");
        setRating(5);
        setButtonDisabled(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length < 10) {
            setHelp("Text must be at least 10 characters long");
        }

        const newFeedback = {
            review: text,
            rating,
        };

        if (feedbackEdit.isEditable === true) {
            feedbackEdit.isEditable = false;
            updateFeedback(feedbackEdit.item.id, newFeedback);
        } else {
            addFeedback(newFeedback);
        }
        backToDefault();
    };

    return (
        <>
            <br />
            <div className="has-text-centered is-family-monospace">
                <p className="subtitle is-4">
                    How would you rate your service with us?
                </p>
                <form action="" onSubmit={handleSubmit}>
                    <div className="field has-addons">
                        <p className="control">
                            <span className="select">
                                <select
                                    onChange={handleRatingChange}
                                    value={rating}
                                >
                                    <option value={5}>5</option>
                                    <option value={4}>4</option>
                                    <option value={3}>3</option>
                                    <option value={2}>2</option>
                                    <option value={1}>1</option>
                                </select>
                            </span>
                        </p>
                        <div className="control is-expanded">
                            <input
                                onChange={handleTextChange}
                                type="text"
                                className="input"
                                placeholder="Write a review"
                                value={text}
                            />
                        </div>
                        <div className="control">
                            <FeedbackButton
                                type="submit"
                                isDisabled={buttonDisabled}
                                version={buttonDisabled ? "danger" : "success"}
                            >
                                Add
                            </FeedbackButton>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            {help && <p className="help is-danger">{help}</p>}
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FeedbackForm;

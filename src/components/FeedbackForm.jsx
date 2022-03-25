import React, { useState } from "react";
import FeedbackButton from "./shared/FeedbackButton";

function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [help, setHelp] = useState("");
    const [rating, setRating] = useState(5);

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
        console.log(rating);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length < 10) {
            setHelp("Text must be at least 10 characters long");
        }

        const newFeedback = {
            review: text,
            rating,
        };

        handleAdd(newFeedback);
        setText("");
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
                                <select onChange={handleRatingChange}>
                                    <option>5</option>
                                    <option>4</option>
                                    <option>3</option>
                                    <option>2</option>
                                    <option>1</option>
                                </select>
                            </span>
                        </p>
                        <div className="control is-expanded">
                            <input
                                onBlur={handleTextChange}
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

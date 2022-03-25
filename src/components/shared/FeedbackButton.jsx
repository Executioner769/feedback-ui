import React from "react";
import PropTypes from "prop-types";

function FeedbackButton({ children, version, type, isDisabled }) {
    return (
        <button
            className={`button is-${version}`}
            type="{type}"
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}

FeedbackButton.defaultProps = {
    version: "success",
    type: "button",
    isDisabled: false,
};

FeedbackButton.prototypes = {
    children: PropTypes.string.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
};

export default FeedbackButton;

import React from "react";
import PropTypes from "prop-types";

function Header(props) {
    const { title } = props;
    return (
        <header>
            <div className="box has-text-centered has-background-light">
                <h2 className="subtitle is-2 is-bold">{title}</h2>
            </div>
        </header>
    );
}

Header.defaultProps = {
    title: "Feedback UI",
};

Header.prototypes = {
    title: PropTypes.string,
};

export default Header;

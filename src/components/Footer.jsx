import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Footer({ title, link }) {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <Link to={link}>{title}</Link>
            </div>
        </footer>
    );
}

Footer.defaultProps = {
    title: "About",
    link: "/about",
};

Footer.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
};

export default Footer;

import React from "react"; // Import react
import PropTypes from "prop-types"; // ES6

const HomeContent = ({ children }) => {
    // Receives all prop children
    return (
        <div>
            <p>{children}</p>
        </div>
    );
};
HomeContent.propTypes = {
    children: PropTypes.node.isRequired
};

export default HomeContent; // Export

import React from "react"; // Import react
import PropTypes from "prop-types"; // ES6
import Emoji from "../layout/Emoji";

const Heading = ({ content, symbol, symbolColor, symbolLabel, symbolSize }) => {
    // Receives content as prop child
    return (
        <h1 className="text-center">
            <Emoji
                symbol={symbol}
                label={symbolLabel}
                color={symbolColor}
                size={symbolSize}
            />
            {content}
        </h1> // Renders content as h1
    );
};
Heading.propTypes = {
    content: PropTypes.string.isRequired
};

export default Heading; // Export

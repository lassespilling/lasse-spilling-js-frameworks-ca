import React from "react";
const Emoji = ({ color, symbol, label, size, top }) => (
    <span
        style={{ color: color, fontSize: size, top: top }}
        className="emoji position-relative"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </span>
);
export default Emoji;

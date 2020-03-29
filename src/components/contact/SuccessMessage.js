import React from "react";
import PropTypes from "prop-types";
import Badge from "react-bootstrap/Badge";
import Emoji from "../layout/Emoji";
import FadeIn from "react-fade-in";

const SuccessMessage = ({
    show,
    classes,
    symbol,
    symbolLabel,
    symbolTop,
    symbolSize,
    content
}) => {
    if (show === false) {
        return (
            <Badge
                className={(classes, "w-100")}
                style={{
                    opacity: 0,
                    transform: "scale(0.8)",
                    transition: "all .3s ease-in-out"
                }}
            ></Badge>
        );
    } else if (show === true) {
        return (
            <FadeIn>
                <Badge
                    variant="success"
                    className={(classes, "w-100")}
                    style={{
                        opacity: 1,
                        transform: "scale(1)",
                        transition: "all .3s ease-in-out"
                    }}
                >
                    <Emoji
                        symbol={symbol}
                        label={symbolLabel}
                        top={symbolTop}
                        size={symbolSize}
                    />
                </Badge>
                <Badge
                    variant="success"
                    className={(classes, "w-100")}
                    style={{
                        opacity: 1,
                        transform: "scale(1)",
                        transition: "all .3s ease-in-out"
                    }}
                >
                    <span>{content}</span>
                </Badge>
            </FadeIn>
        );
    }
};

SuccessMessage.propTypes = {
    show: PropTypes.bool
};

export default SuccessMessage;

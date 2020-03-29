import React from "react";
import Badge from "react-bootstrap/Badge";

const GamePlatform = ({ platform, classes }) => {
    function checkPlatform() {
        var platFormToCheck = platform.toLowerCase()
        switch (true) {
            default:
                return;
            case platFormToCheck.includes("xbox"):
                return "green";
            case platFormToCheck.includes("playstation"):
                return "blue";
        }
    }
    return (
        <Badge
            variant="secondary"
            className={classes}
            style={{ backgroundColor: checkPlatform() }}
        >
            {platform}
        </Badge>
    );
};

export default GamePlatform;

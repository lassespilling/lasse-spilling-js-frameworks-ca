import React from "react";
import Badge from "react-bootstrap/Badge";

const GamePlatform = ({ platform, classes }) => {
    let platFormToCheck = platform.toLowerCase();
    function platformColor() {
        switch (true) {
            default:
                return;
            case platFormToCheck.includes("xbox"):
                return "green";
            case platFormToCheck.includes("playstation"):
                return "blue";
            case platFormToCheck.includes("linux"):
                return "orange";
            case platFormToCheck.includes("apple"):
                return "grey";
            case platFormToCheck.includes("pc"):
                return "#01A6F0";
            case platFormToCheck.includes("android"):
                return "white";
        }
    }
    function platformBrand() {
        switch (true) {
            default:
                return platform;
            case platFormToCheck.includes("apple"):
                return (
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                        className="platformBrand platformBrand--invert"
                        alt="apple"
                        title={platform}
                    />
                );
            case platFormToCheck.includes("linux"):
                return (
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
                        className="platformBrand"
                        alt={platform}
                        title={platform}
                    />
                );
            case platFormToCheck.includes("xbox"):
                return (
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg"
                        className="platformBrand platformBrand--invert"
                        alt={platform}
                        title={platform}
                    />
                );
            case platFormToCheck.includes("playstation"):
                return (
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/00/PlayStation_logo.svg"
                        className="platformBrand platformBrand--invert"
                        alt={platform}
                        title={platform}
                    />
                );
            case platFormToCheck.includes("pc"):
                return (
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg"
                        className="platformBrand platformBrand--invert"
                        alt={platform}
                        title={platform}
                    />
                );

            case platFormToCheck.includes("android"):
                return (
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
                        className="platformBrand"
                        alt={platform}
                        title={platform}
                    />
                );
        }
    }
    return (
        <Badge
            variant="secondary"
            className={classes}
            style={{ backgroundColor: platformColor() }}
        >
            {platformBrand()}
        </Badge>
    );
};

export default GamePlatform;

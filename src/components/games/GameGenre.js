import React from "react";
import Badge from "react-bootstrap/Badge";

const GameGenre = ({ genre, classes }) => {
    function checkGenre() {
        switch (genre.toLowerCase()) {
            default:
                return "";
            // case "action":
            //     return "orange";
        }
    }
    return (
        <Badge
            variant="secondary"
            style={{ backgroundColor: checkGenre() }}
            className={classes}
        >
            {genre}
        </Badge>
    );
};

export default GameGenre;

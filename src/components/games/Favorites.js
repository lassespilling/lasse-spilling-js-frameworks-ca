import React, { useEffect } from "react"; // React
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import FadeIn from "react-fade-in";

const Favorites = ({ favorites, resetFunction }) => {
    if (favorites && favorites.length >= 1) {
        return (
            <>
                <h2 className="h4">You love:</h2>
                <Button
                    variant="secondary"
                    className="px-2 py-0"
                    onClick={resetFunction}
                >
                    x
                </Button>
                {favorites.map(fav => (
                    <FadeIn className="d-inline-block">
                        <Badge variant="danger" className="m-1">
                            {fav}
                        </Badge>
                    </FadeIn>
                ))}
            </>
        );
    } else {
        return (
            <>
                <Badge variant="secondary" className="m-1">
                    No favorites
                </Badge>
            </>
        );
    }
};

export default Favorites;

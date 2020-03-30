import React, { useEffect } from "react"; // React
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

const Favorites = ({ favorites, resetFunction, ids }) => {
    if (favorites && favorites.length >= 1 && ids && ids.length >= 1) {
        return (
            <>
                <h2 className="h4">Your favorites:</h2>
                <Button
                    variant="secondary"
                    className="px-2 py-0 mr-2 mb-2"
                    onClick={resetFunction}
                >
                    x
                </Button>
                {ids.map((id, index) => (
                    <Link to={"games/" + id}>
                        <FadeIn className="d-inline-block">
                            <Badge variant="danger" className="m-1">
                                {favorites[index]}
                            </Badge>
                        </FadeIn>
                    </Link>
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

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ScrollAnimation from "react-animate-on-scroll";
import Emoji from "../layout/Emoji";
import "animate.css/animate.min.css";

function GameItem({
    id,
    name,
    image,
    rating,
    released,
    favorite,
    favDisabled
}) {
    return (
        <ScrollAnimation animateIn="fadeIn" animateOnce="true" offset="50">
            <Card className="bg-dark text-white">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Rating: {rating}</Card.Text>
                    <Card.Text className="mb-3">
                        <b>Released:</b> <br />
                        {released}
                    </Card.Text>
                    <div className="row m-0 p-0">
                        <Link to={"games/" + id} className="col-9 p-0 pr-2">
                            <Button variant="secondary" block>
                                View
                            </Button>
                        </Link>
                        {!favDisabled.includes(id) ? (
                            <Button
                                onClick={favorite}
                                variant="secondary"
                                block
                                className="col-3 m-0 p-0 disabled"
                            >
                                <Emoji symbol="🤍" />
                            </Button>
                        ) : (
                            <Button
                                onClick={favorite}
                                variant="danger"
                                block
                                className="col-3 m-0 p-0"
                            >
                                <Emoji symbol="🤍" />
                            </Button>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </ScrollAnimation>
    );
}

GameItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default GameItem;

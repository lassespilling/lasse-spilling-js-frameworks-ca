import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Emoji from "../layout/Emoji";
import FadeIn from "react-fade-in";
import ScrollAnimation from "react-animate-on-scroll";
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
    let date = new Date(released);
    let year = date.getFullYear();
    let month = {};
    month.number = date.getMonth();
    month.names = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    month.current = month.names[month.number];
    return (
        <FadeIn>
            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                <Card className="bg-dark text-white">
                    <Card.Img
                        variant="top"
                        src={image}
                        style={{
                            height: 150,
                            objectFit: "cover",
                            objectPosition: "top"
                        }}
                    />
                    <div className="card__menu--topleft">{name}</div>
                    <div className="card__menu--topright">
                        {rating ? (
                            <Badge variant="warning" className="mr-1">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/20/Metacritic.svg"
                                    alt=""
                                    height="11em"
                                    className="mr-1"
                                />
                                {rating}
                            </Badge>
                        ) : null}
                        <Badge variant="secondary">
                            {month.current}, {year}
                        </Badge>
                    </div>
                    <Card.Body>
                        {/* <Card.Title>{name}</Card.Title>
                    <Card.Text>Rating: {rating}</Card.Text>
                    <Card.Text className="mb-3">
                        <b>Released:</b> <br />
                        {released}
                    </Card.Text> */}
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
        </FadeIn>
    );
}

GameItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default GameItem;

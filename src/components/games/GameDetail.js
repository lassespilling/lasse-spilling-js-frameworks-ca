// React
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// constants
import { BASE_URL } from "../../constants/api";

// Layout
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Loading from "../layout/Loading";
import FadeIn from "react-fade-in";
import "./_gameDetail.scss";

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

// Font awesome
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Pages
import GamePlatform from "./GamePlatform";
import GameGenre from "./GameGenre";

function GameDetail() {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    const url = BASE_URL + "/" + id;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setDetail(json))
            .catch(error => console.log(error))
            .finally(() =>
                setTimeout(() => {
                    setLoading(false);
                }, 300)
            );
    }, []);
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <Row className="">
                <Col md={12} className="mb-4 mt-5">
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOnce="true"
                        offset="0"
                    >
                        <Link to={".././"}>
                            <Button variant="outline-info">
                                <FontAwesomeIcon
                                    icon={faArrowAltCircleLeft}
                                    className="mr-1"
                                />
                                back
                            </Button>
                        </Link>
                    </ScrollAnimation>
                </Col>
            </Row>
            <FadeIn>
                <Row className="mb-5 pb-5">
                    <Col md={6} className="detail-image text-center">
                        <h1 className="mb-0 d-md-none">{detail.name}</h1>
                        <Carousel
                            className="btn btn-lg btn-light font-italic"
                            style={{
                                marginBottom: "-2rem",
                                zIndex: 1
                            }}
                            indicators={false}
                            keyboard={false}
                            fade={true}
                            controls={false}
                        >
                            {detail.ratings.map(({ title, percent }) => (
                                <Carousel.Item className="text-center">
                                    <b>{percent}%</b>
                                    <span> "- {title}"</span>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <Carousel
                            className="overflow-hidden"
                            style={{
                                borderTopLeftRadius: "1rem",
                                borderTopRightRadius: "1rem"
                            }}
                        >
                            <Carousel.Item
                                style={{
                                    height: "300px"
                                }}
                            >
                                <img
                                    className="d-block w-100"
                                    style={{
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                    src={detail.background_image}
                                    alt={detail.background_image}
                                />
                            </Carousel.Item>
                            <Carousel.Item
                                style={{
                                    height: "300px"
                                }}
                            >
                                <img
                                    className="d-block w-100"
                                    style={{
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                    src={detail.background_image_additional}
                                    alt={detail.background_image_additional}
                                />
                            </Carousel.Item>
                        </Carousel>

                        <Table striped bordered hover responsive variant="dark">
                            <thead>
                                <tr>
                                    <th>Platforms:</th>
                                    <th>Genres:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {detail.parent_platforms.map(
                                            ({ platform }) => (
                                                <GamePlatform
                                                    classes="mx-1"
                                                    platform={platform.name}
                                                />
                                            )
                                        )}
                                    </td>
                                    <td>
                                        {detail.genres.map(({ name }) => (
                                            <GameGenre
                                                classes="mx-1"
                                                genre={name}
                                            />
                                        ))}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table striped bordered hover responsive variant="dark">
                            <thead>
                                <tr>
                                    <th>Game id:</th>
                                    <th>Release:</th>
                                    <th>Rating:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{detail.id}</td>
                                    <td>{detail.released}</td>
                                    <td>{detail.rating}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                        <h1 className="mb-0 d-none d-md-block">
                            {detail.name}
                        </h1>
                        {/* Alternative implementations: */}
                        {/* <p
                            className="overflow-auto mb-3"
                            style={{ height: 300 }}>
                            {detail.description.replace(/<\/?[^>]+(>|$)/g, "")}
                        </p> */}
                        {/* <p
                            className="overflow-auto my-3"
                            style={{ height: 300 }}
                        >
                            {detail.description_raw}
                        </p> */}

                        <div className="scrollDown">
                            <p
                                className="py-3 mt-3 overflow-auto pt-4"
                                style={{
                                    height: 350,
                                    background: "rgba(111, 91, 91, 0.3)"
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: detail.description
                                        .replace(/<\/?[^>]+(>|$)/g, "")
                                        .replace(/(\.[^\.]*)\./g, "$1.<br><br>")
                                }}
                            ></p>
                        </div>
                        <div className="text-center mt-4">
                            <Button
                                href={detail.website}
                                size="lg"
                                variant="outline-light"
                            >
                                Website
                            </Button>
                        </div>
                    </Col>
                </Row>
            </FadeIn>
        </>
    );
}

export default GameDetail;

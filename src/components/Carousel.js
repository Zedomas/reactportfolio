import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';

import Card from './Card'
import memeimg from "../assets/memendr.png"
import barimg from "../assets/Barfinder.png"
import bjimg from "../assets/blackjack.png"
import bridgeimg from "../assets/bridge.png"

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Memendr",
                    subTitle: "Full Crud app built with Django, Tinder clone but instead of people its Memes",
                    imgSrc: memeimg,
                    link: 'https://memendr.herokuapp.com',
                    github: "https://github.com/Zedomas/Memendr",
                    selected: false
                },
                {
                    id: 1,
                    title: "BarFinder",
                    subTitle: "Node.js MPA, that lets users add and rate local bars",
                    imgSrc: barimg,
                    link: 'https://chicago-bars.herokuapp.com/',
                    github: "https://github.com/Zedomas/Full-stack-app",
                    selected: false
                },
                {
                    id: 2,
                    title: "BlackJack",
                    subTitle: "Blackjack game built with jQuery and a 3rd party API",
                    imgSrc: bjimg,
                    link: 'https://zedomas.github.io/',
                    github: "https://github.com/Zedomas/Zedomas.github.io",
                    selected: false
                },
                {
                    id: 3,
                    title: "Bridge",
                    subTitle: "Four person project built with MERN stack and 4 3rd party APIs",
                    imgSrc: bridgeimg,
                    link: 'https://bridge-app-react.herokuapp.com/',
                    github: "https://github.com/Zedomas/Bridge",
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel
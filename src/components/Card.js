import React from 'react';

import CardInfo from '../components/CardInfo'


function Card(props) {
    return(
        <div className="d-inline-block c-card" onClick={(e) => props.click(props.item)}>
            <img className="c-card-img" alt="Project" src={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} github={props.item.github} /> }
        </div>
    )
}

export default Card;
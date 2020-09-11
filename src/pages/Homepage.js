import React from 'react'

import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Skills from "../components/Skills"


function Homepage(props) {
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.lead} />
            <Carousel />
            <Skills />
        </div>
    )
}

export default Homepage
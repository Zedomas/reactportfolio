import React from 'react'

import Hero from '../components/Hero'
import Content from '../components/Content'

function About(props) {
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Robert! I'm a full stack developer with experience in Node.js, React, Django, and used both SQL and NonSQL databases in Postgres and MongoDB</p>

                <p>I'm a former lighting/automation technician/programmer that has tour the world with various companies such as Disney On Ice and Royal Caribbean but decided its time to settle down and grow some roots in the Chicago-land Area</p>

                <p>I love learning new things and problem solving and I hope to find a position with a growing and energetic team of developers</p>
            </Content>

        </div>
    )
}

export default About
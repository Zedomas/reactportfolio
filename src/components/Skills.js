import React from 'react';

import HTML from '../assets/icons/html.png'
import CSS from '../assets/icons/css.png'
import BOOTSTRAP from '../assets/icons/bootstrap.png'
import JS from '../assets/icons/javascript.png'
import NODE from '../assets/icons/node.png'
import PYTHON from '../assets/icons/python.png'
import DJANGO from '../assets/icons/django.png'
import SQL from '../assets/icons/sql.png'
import POSTGRES from '../assets/icons/postgres.png'
import MONGODB from '../assets/icons/mongodb.png'
import AWS from '../assets/icons/aws.png'


function Skills(props) {
    return(
        <div className="icons-container">
            <h1 className="skills">Skills</h1>
            <div className="icons">
                <img className="icon" alt="HTML" src={HTML} />
                <img className="icon" alt="CSS" src={CSS} />
                <img className="icon" alt="BootStrap" src={BOOTSTRAP} />
                <img className="icon" alt="JavaScript" src={JS} />
                <img className="icon" alt="NODE" src={NODE} />
                <img className="icon" alt="PYTHON" src={PYTHON} />
                <img className="icon" alt="DJANGO" src={DJANGO} />
                <img className="icon" alt="SQL" src={SQL} />
                <img className="icon" alt="POSTGRES" src={POSTGRES} />
                <img className="icon" alt="MONGODB" src={MONGODB} />
                <img className="icon" alt="AWS" src={AWS} />
            </div>
        </div>
    )
}

export default Skills;
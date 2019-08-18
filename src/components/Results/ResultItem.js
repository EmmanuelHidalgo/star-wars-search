import React from 'react';

const ResultItem = (props) => {
    const {name,gender,birth_year,hair_color,height,mass } = props.character;
    return(
        <div className="ui card">
            <div className="content">
                <div className="header">{name}</div>
            </div>
            <div className="content">
                <div className="ui small feed">
                <div className="event">
                    <div className="content">
                    <div className="summary">
                        <a>Birth Year</a>:  {birth_year}
                    </div>
                    </div>
                </div>
                <div className="event">
                    <div className="content">
                    <div className="summary">
                        <a>Gender</a>: {gender} 
                    </div>
                    </div>
                </div>
                <div className="event">
                    <div className="content">
                    <div className="summary">
                        <a>Hair Color</a>:  {hair_color}
                    </div>
                    </div>
                </div>
                <div className="event">
                    <div className="content">
                    <div className="summary">
                        <a>Height</a>:  {height}
                    </div>
                    </div>
                </div>
                <div className="event">
                    <div className="content">
                    <div className="summary">
                        <a>Mass</a>:  {mass}
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ResultItem;
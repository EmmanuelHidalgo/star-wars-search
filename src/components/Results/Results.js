import React from 'react';
import { connect } from 'react-redux';

import ResultItem from './ResultItem';
import "./Results.css";

export class Results extends React.Component {

    renderContrent = () => {
        const {characters} = this.props;

        if(!characters || characters.length === 0) {
            return (
                <div className="ui content">
                    <p>Please make a search</p>
                </div>
            )
        } else {
           return characters.map((character, index) => {
                return (
                    <ResultItem key={index} character={character} />
                )
            })
        }
    }
    
    render(){
        return(
           <div className="sixteen wide colum results-container">
               {this.renderContrent()}
            </div>
        )
    }
}

const mapStateTpProps = (state) => {
    return {
        characters: state.characters.characters
    }
}

export default connect(mapStateTpProps)(Results)



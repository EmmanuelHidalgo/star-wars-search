import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import SearchBar from './SearchBar/SearchBar'
import Results from './Results/Results'

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={SearchBar}/>
                    <div className= "ui grid">
                        <Results />
                        {/* <Route path="/" exact component={LeftSideBar}/>
                        <Route path="/" exact component={Results}/>
                        <Route path="/item" exact component={DetailPage}/> */}
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
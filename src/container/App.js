import React, { useState, useEffect } from "react";
import CardList from "../components/cardList/CardList";
import SearchBox from '../components/searchBox/SearchBox';
import Scroll from "../components/scroll/Scroll";
import ErrorBoundry from "../components/errorBoundry/ErrorBoundry";
import './App.css';

function App () {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, [])

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
        
    return !robots.length ? 
                centralPanel(searchField, onSearchChange): 
                centralPanelCardLis(filteredRobots, searchField, onSearchChange);
}

function centralPanel(searchField, onSearchChange) {
    return <div className="tc">
                <h1 className="f1">Robos Amigaveis</h1>
                <SearchBox searchField={searchField} searchChange={onSearchChange} />
                <h1>Loading!</h1>
            </div>;
}

function centralPanelCardLis(filteredRobots, searchField, onSearchChange) {
    return <div className="tc">
                <h1 className="f1">Robos Amigaveis</h1>
                <SearchBox searchField={searchField} searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>;
}
    
export default App;
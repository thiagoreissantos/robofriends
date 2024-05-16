import React, { Component } from "react";
import CardList from "../components/cardList/CardList";
import SearchBox from '../components/searchBox/SearchBox';
import Scroll from "../components/scroll/Scroll";
import ErrorBoundry from "../components/errorBoundry/ErrorBoundry";
import './App.css';

class App extends Component{

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        
        return !robots.length ? this.centralPanel(): this.centralPanelCardLis(filteredRobots);
    }

    centralPanel() {
        return <div className="tc">
                    <h1 className="f1">Robos Amigaveis</h1>
                    <SearchBox searchField={this.state.searchField} searchChange={this.onSearchChange} />
                    <h1>Loading!</h1>
                </div>;
    }

    centralPanelCardLis(filteredRobots) {
        return <div className="tc">
                    <h1 className="f1">Robos Amigaveis</h1>
                    <SearchBox searchField={this.state.searchField} searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>;
    }
}
    
export default App;
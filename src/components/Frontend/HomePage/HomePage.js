import React, { Component } from "react";
import GamesContainer from "../GamesContainer/GamesContainer";
import SearchMenu from "../SearchMenu/SearchMenu";
import AddGame from "../AddGame/AddGame";

import './HomePage.css';



class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addGameButton: false,
      search: "",
      games: [],
      sortByName: false,
      sortByGenre: false
    };
  }

  componentDidMount() {
    this.fetchGame()
  }

  fetchGame = () => {
    fetch('/games')
    .then(res => res.json())
    .then(games => {
      this.setState({
        games: games
      })
    })
  }

  handleChange = searchTerm => {
    this.setState({
      search: searchTerm
    });
  };

  filterSearch = () => {
    //game.title.toLowerCase().includes(this.state.search.toLowerCase())
    let filteredGames = this.state.games.filter(game =>
      game.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    if(this.state.sortByName === true) {
      filteredGames = this.state.games

      filteredGames.sort((a, b) => {

        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
    })

    this.setState({
      sortByName: false
    })

  }

  if(this.state.sortByGenre === true) {
    filteredGames = this.state.games

    filteredGames.sort((a,b) => {

      if (a.genre.toLowerCase() < b.genre.toLowerCase()) {
        return -1
      }
      if (a.genre.toLowerCase() > b.genre.toLowerCase()) {
        return 1
      }
      return 0
    })

    this.setState({
      sortByGenre: false
    })

  }
  return filteredGames
}

  sortFunction = () => {
    this.setState({
      sortByName: true
    })
  };

  sortByGenre = () => {
    this.setState({
      sortByGenre: true
    });
  };

  addGame = game => {
    let updatedGames = [...this.state.games, game];
    this.setState({
      games: updatedGames
    });
  };

  addGameButton = () => {
    this.setState({
      addGameButton: !this.state.addGameButton
    });
  };

  render() {
    return (
      <div className="games">
        <div className="secondary_nav">
          <SearchMenu search={this.handleChange} sort={this.sortFunction} sortByGenre={this.sortByGenre} />
          <div className="btn_wrapper">
            <button className="round_btn" onClick={this.addGameButton}>
              <span>+</span>
            </button>
          </div>
        </div>
        {this.state.addGameButton && (
          <AddGame addGame={this.addGame} closeHandler={this.addGameButton} />
        )}
        <GamesContainer games={this.filterSearch()} />
      </div>
    );
  }
}

export default HomePage;

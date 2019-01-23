import React, { Component } from "react";
import GamesContainer from "../GamesContainer/GamesContainer";
import SearchMenu from "../SearchMenu/SearchMenu";
import AddGame from "../AddGame/AddGame";

import CallOfDuty from "../../Games/CallOfDuty.jpeg";
import CounterStrike from "../../Games/CounterStrike.jpeg";
import Fifa from "../../Games/Fifa.jpeg";
import marioKart from "../../Games/marioKart.jpeg";
import MetalGearSolid from "../../Games/MetalGearSolid.jpeg";
import Sniper from "../../Games/Sniper.jpeg";
import './HomePage.css';

// const games = [
//   {
//     title: "Call of Duty",
//     price: 123,
//     details:
//       "Call of Duty: Black Ops 4 is the first entry in the first-person shooter series to contain only a multiplayer mode, and a new battle royale mode called Blackout.",
//     img: CallOfDuty
//   },
//
//   {
//     title: "Counter-Strike",
//     price: 123,
//     details:
//       "A first person shooter game depicting death matches between terrorists and counter-terrorists.",
//     img: CounterStrike
//   },
//
//   {
//     title: "Fifa",
//     price: 123,
//     details:
//       "FIFA 19 brings you a conclusion to The Journey and all new game modes and features to enjoy on and offline. Fifa 19 allows you to take control in your very own footballing world.",
//     img: Fifa
//   },
//
//   {
//     title: "Sniper Elite",
//     price: 123,
//     details:
//       "Sniper Elite sets you in the midst of the end of World War II. As an OSS-trained sniper you must disguise yourself as a German soldier and stop the Russians from stealing nuclear secrets from Berlin.",
//     img: Sniper
//   },
//
//   {
//     title: "Mario Kart",
//     price: 123,
//     details:
//       "Mario and the rest race against each other for the gold cup again. Underwater and air gliding returns. Mario Kart 8 introduces zero gravity, and has a total of 48 race tracks.",
//     img: marioKart
//   },
//
//   {
//     title: "Metal Gear Solid",
//     price: 123,
//     details:
//       "When the nations of the world rely upon private military companies to fight their battles for them, renegade Liquid Ocelot emerges as the head of a potent coalition of mercenary powers. Solid Snake returns to save the world once again.",
//     img: MetalGearSolid
//   }
// ];



class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addGameButton: false,
      search: "",
      games: [],
      sortByName: false
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
      filteredGames.sort((a, b) => {

        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
    })
  }
  return filteredGames
}

  sortFunction = () => {
    this.setState({
      sortByName: true
    })
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
          <SearchMenu search={this.handleChange} sort={this.sortFunction} />
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

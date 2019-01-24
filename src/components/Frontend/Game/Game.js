import React from "react";

const Game = props => {
  const { game } = props;
  return (
    <div className="card_wrapper">
      <div className="card">
        <div className="card__img">
          <img src={game.image} />
        </div>
        <div className="card_content">
          <p className="card_content__header"><strong>Game Name:</strong> {game.title}</p>
          <p className="card_content__description">
          <strong>Game Description:</strong> {game.details}
          </p>
          <p className="card_content__genre"><strong>Game Genre:</strong> {game.genre}</p>
          <p className="card_content__price"><strong>Game Price:</strong> £{game.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Game;

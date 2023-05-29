import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, addToArmy, deleteBot}) {
 

  return (
    <div className="ui four column grid">
      <div className="row">
      {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            clickHandler={addToArmy}
            deleteBot={deleteBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
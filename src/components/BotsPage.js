import React, { useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [army, setArmy] = useState([]);
  const [bots, setBots] = useState([]);
 
  useEffect(() =>{
    fetch('http://localhost:8002/bots')
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((error) => console.log(error))
}, []);

  const addToArmy = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army,bot])
    }
  };

  const removeFromArmy = (bot) => {
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  const deleteBot = (bot) => {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        removeFromArmy(bot);
        const updatedBots = bots.filter((b) => b.id !== bot.id);
        setBots(updatedBots);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <YourBotArmy botArmy={army} removeFromArmy = {removeFromArmy} deleteBot={deleteBot}/>
      <BotCollection bots={bots} addToArmy={ addToArmy} deleteBot={deleteBot} />
    </div>
  )
}

export default BotsPage;

import {Display} from "./Display";
import {PlayPauseButton} from "./PlayPauseButton";
import { ResetButton } from "./ResetButton";
import { ScoredButton } from "./ScoredButton";

function App() {
  return (
    <div>
      <Display />
      <ScoredButton playerID="player1" >Point Joueur 1</ScoredButton>
      <ScoredButton playerID="player2" >Point Joueur 2</ScoredButton>
      <PlayPauseButton />
      <ResetButton/>
    </div>
  );
}

export default App;

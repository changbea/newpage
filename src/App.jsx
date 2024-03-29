import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Heading from './components/Heading';
import Currentfocus from './components/Currentfocus';
import Drink from './components/Drink';
import Subway from './components/Subway';
import Cards from './components/Cards';
import Page from './recommendations/router/Page';
import Resume from './recommendations/router/Resume';
import League from './leagues/Leagues'
import Gamersp from './components/Gamersp';
import Gamefinding from './components/Gamefinding';
import Gameflipping from './components/Gameflipping';
import Gamemimic from './components/Gamemimic';
import Gameguessing from './components/Gameguessing';
import Plans from './components/Plans';
import Clock from './components/Clock';
import Speed from './components/Speed';
import Survival from './components/Survival';
import Choose from './components/Choose';
import Pokedex from './components/Pokedex';
import Pokecards from './components/Pokecards';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Heading /> } />
          <Route path="/cf" element={ <Currentfocus /> } />
          <Route path="/drink" element = { <Drink /> } />
          <Route path="/subway" element = { <Subway /> } />
          <Route path="/cards" element = { <Cards /> } />
          <Route path="/recommendations" element = { <Page /> } />
          <Route path="/resume" element = { <Resume /> } />
          <Route path="/cf/leagues" element = { <League/> } />
          <Route path="/cf/gamersp" element = { <Gamersp /> } />
          <Route path="/cf/finding" element = { <Gamefinding /> } />
          <Route path="/cf/flipping" element = { <Gameflipping /> } />
          <Route path="/cf/mimic" element = { <Gamemimic /> } />
          <Route path="/cf/guessing" element = { <Gameguessing /> } />
          <Route path="/cf/plans" element = { <Plans /> } />
          <Route path="/cf/clock" element = { <Clock /> } />
          <Route path="/speed" element = { <Speed /> } />
          <Route path="/survival" element = { <Survival /> } />
          <Route path="/choose" element = { <Choose /> } />
          <Route path="/cf/pokedex" element = { <Pokedex /> } />
          <Route path="/cf/pokecards" element = { <Pokecards /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
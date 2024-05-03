import reactLogo from './assets/react.svg'
import './App.css'
import { PokemonApi } from './components/PokemonApi'
import PokemonDropdown from './components/PokemonDropdown'
import { BadPokemon } from './components/BadPokemon'
// import { PokemonList } from './components/PokemonList.jsx'


export default function App() {
  return (
    <div className="background-image">
      <PokemonDropdown />
      <BadPokemon />
    </div>
  )
}

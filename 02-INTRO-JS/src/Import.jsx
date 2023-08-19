import {heroes} from './data/heroes'

const Import = () => {
    
    const getHeroesById = (owner) => {
      
        return heroes.filter((heroe) => heroe.owner == owner)
    }
    
    console.log(getHeroesById("DC"))
  return (
    <div>Import</div>
  )
}

export default Import
import './App.css'
import FavAnimals from './FavAnimals.jsx'
import NavBar from './NavBar.jsx'
import LogoImage from './assets/Logo.png'
import LionImage from './assets/Lion.jpg'
import FoxImage from './assets/Fox.jpg'
import PandaImage from './assets/Panda.jpg'
import BearImage from './assets/Bear.jpg'
import CatImage from './assets/Cat.jpg'
import DogImage from './assets/Dog.jpg'
import GuineaImage from './assets/Guinea.jpg'
import RacoonImage from './assets/Racoon.jpeg'
import ParrotImage from './assets/Parrot.jpg'
import AxolotylImage from './assets/Axolotyl.jpg'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <NavBar logo={LogoImage} navname="My Top 10 Favorite Animalssasa"/>
      <FavAnimals name="Lion" desc="A majestic and powerful big cat, distinguished by its thick mane, known as the king of the jungle for its dominance and regal presence in the wild.​" img={LionImage}/>
      <FavAnimals name="Fox" desc="A small, intelligent mammal with striking red fur, renowned for its cunning instincts and ability to adapt to diverse environments.​" img={FoxImage}/>
      <FavAnimals name="Red Panda" desc="A rare and adorable tree-dwelling mammal with reddish-orange fur, native to the cool mountain forests of the Himalayas.​" img={PandaImage}/>
      <FavAnimals name="Polar Bear" desc="A massive and resilient white bear that thrives in icy Arctic regions, celebrated for its strength, swimming prowess, and survival skills." img={BearImage}/>
      <FavAnimals name="Cat" desc="A sleek and independent domestic feline, admired for its sharp reflexes, affectionate nature, and calming companionship to humans.​" img={CatImage}/>
      <FavAnimals name="Dog" desc="A loyal and intelligent animal, cherished as a pet for its devotion, ability to assist humans, and capacity to form deep emotional bonds.​​" img={DogImage}/>
      <FavAnimals name="Guinea Pig" desc="A gentle rodent with soft fur, loved as a pet for its friendly, playful, and low-maintenance nature." img={GuineaImage}/>
      <FavAnimals name="Racoon" desc="A nocturnal mammal with a masked face, known for its dexterity, cleverness, and adaptability.​" img={RacoonImage}/>
      <FavAnimals name="Parrot" desc="A vibrant tropical bird famous for its ability to mimic human speech, its intelligence, and its strong, affectionate bonds with owners.​" img={ParrotImage}/>
      <FavAnimals name="Axolotyl" desc="A fascinating amphibian from Mexico, admired for its unique ability to regenerate body parts and its survival in calm freshwater lakes." img={AxolotylImage}/>
      <Footer/>
    </>
  )
}

export default App

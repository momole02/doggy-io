import pawLogo from "./assets/paw.png"
import dog1 from "./assets/dogs/dog1.jpg";
import dog2 from "./assets/dogs/dog2.jpg";
import dog3 from "./assets/dogs/dog3.jpg";
import dog4 from "./assets/dogs/dog4.jpg";
import dog5 from "./assets/dogs/dog5.jpg";
import dog6 from "./assets/dogs/dog6.jpg";
import dog7 from "./assets/dogs/dog7.jpg";
import dog8 from "./assets/dogs/dog8.jpg";
import dog9 from "./assets/dogs/dog9.jpg";
import dog10 from "./assets/dogs/dog10.jpg";
import dog11 from "./assets/dogs/dog11.jpg";
import dog12 from "./assets/dogs/dog12.jpg";
import dog13 from "./assets/dogs/dog13.jpg";
import dog14 from "./assets/dogs/dog14.jpg";
import dog15 from "./assets/dogs/dog15.jpg";
import dog16 from "./assets/dogs/dog16.jpg";
import './App.css'
import { useEffect, useState } from "react";
import { randomPick } from "./utils/utils";
import LCGenerator from "./utils/lc-generator";



const dogImages = [
  dog1, dog2, dog3, 
  dog4, dog5, dog6,
  dog7, dog8, dog9,
  dog10, dog11, dog12,
  dog13, dog14, dog15,
  dog16,
]


function Navbar(){
  
  return (<div className='bg-yellow-400 drop-shadow-md w-full flex items-center p-3'>
    <img style={{width:"64px"}} src={pawLogo}></img>
    <span className="text-3xl text-white font-bold pl-3">Doggy</span>
  </div>)
}
function App() {

  const [selectedDogs, setSelectedDogs] = useState<Array<string>>([])
  const [degs, setDegs] = useState<Array<string>>([])

  
  useEffect(() => {
    const items = randomPick(dogImages, 3)
    // chaque 20 sec on change la disposition
    const period =  30 * 1000;
    const seed = Math.floor(new Date().getTime() / period); 
    const lcg = new LCGenerator(seed);
    const initialDegs = Array.from({length:3}, () => (10 * lcg.rangeRel(-3, 3))+"deg");
    setDegs(initialDegs);
    setSelectedDogs(items);
  }, [])

  
  return (
    <div>
      <Navbar/>
      <p className="text-center text-4xl py-10">Our beautiful Dogs !</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-1">
        {selectedDogs.map((item, index) => (
          <div className={`m-10 bg-yellow-400 p-[24px] h-min flex items-center shadow-md`} style={{transform:`rotate(${degs[index]})`}}>
            <img style={{width: "500px"}} src={item}/>
          </div>))
          }
      </div>
    </div>
  )
}

export default App

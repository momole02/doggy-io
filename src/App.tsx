import pawLogo from "./assets/paw.png"
import dog1 from "./assets/dogs/dog1.jpg";
import dog2 from "./assets/dogs/dog2.jpg";
import dog3 from "./assets/dogs/dog3.jpg";
import dog4 from "./assets/dogs/dog4.jpg";
import dog5 from "./assets/dogs/dog5.jpg";
import dog6 from "./assets/dogs/dog6.jpg";
import dog7 from "./assets/dogs/dog7.jpg";
import dog8 from "./assets/dogs/dog8.jpg";
import './App.css'
import { useEffect, useState } from "react";
import { randomPick } from "./utils/utils";


const dogImages = [
  dog1, dog2, dog3, 
  dog4, dog5, dog6,
  dog7, dog8,
]


function Navbar(){
  return (<div className='border-b-4 border-b-black w-full flex items-center p-4'>
    <img style={{width:"64px"}} src={pawLogo}></img>
    <span className="text-4xl font-bold pl-3">Doggy</span>
  </div>)
}
function App() {

  const [selectedDogs, setSelectedDogs] = useState<Array<string>>([])

  useEffect(() => {
    const items = randomPick(dogImages, 3)
    console.log({items})
    setSelectedDogs(items);
  }, [])
  return (
    <div>
      <Navbar/>
      <p className="text-center text-4xl py-10">Our beautiful Dogs !</p>
      <div className="grid grid-cols-3 gap-1">
        {selectedDogs.map((item) => (
          <div className="m-10 border-yellow-400 border-[24px] flex items-center">
            <img style={{width: "500px"}} src={item}/>
          </div>))
          }
      </div>
    </div>
  )
}

export default App

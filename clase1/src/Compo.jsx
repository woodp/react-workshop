import { useState } from 'react'
import './App.css'
import ReactLogo from './assets/react.svg'

const Compo = ({name="Pedro", title="Titulo"}) => {
  const [num, setNum] = useState(1)

  return (
    <>
      <img src={ReactLogo} className='img' />
      <div>
        <button onClick={() => setNum((count) => count * 2)}>
          num is {num} and name is {name} and title is {title}
        </button>
      </div>
    </>
  )
}

export default Compo

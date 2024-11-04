import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import House from './components/atoms/House'

import './App.css'

function App() {
  return (
    <div className="wrapper">
      <Canvas>
        {/* <Environment files="/images/round_platform_4k.jpg" /> */}
        <directionalLight position={[10, 7, -3.5]} intensity={0.5} />
        <OrbitControls makeDefault />
        <House />
      </Canvas>
    </div>
  )
}

export default App

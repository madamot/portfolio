import './App.css'
import { Canvas, MeshProps } from '@react-three/fiber'
import Box from './components/Box'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0] as MeshProps} />
      <Box position={[1.2, 0, 0] as MeshProps} />
    </Canvas>
  )
}

export default App

import { createRoot } from 'react-dom/client'
import { useGLTF, useTexture } from '@react-three/drei'
import 'inter-ui'
import '/play/racinggame/src/styles.css'
import { App } from './App'

useTexture.preload('/textures/heightmap_1024.png')
useGLTF.preload('/play/racinggame/src/models/track-draco.glb')
useGLTF.preload('/play/racinggame/src/models/chassis-draco.glb')
useGLTF.preload('/play/racinggame/src/models/wheel-draco.glb')

createRoot(document.getElementById('root')!).render(<App />)

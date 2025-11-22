import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Galaxy from './components/Galaxy.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Galaxy 
			mouseRepulsion={true}
			mouseInteraction={true}
			density={1.2}
			glowIntensity={0.05}
			saturation={0.0}
			hueShift={140}
			twinkleIntensity={0.1}
			rotationSpeed={0.1}
			repulsionStrength={0.5}
			transparent={true}
		/>

		<App />
	</StrictMode>,
)

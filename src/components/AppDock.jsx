import Dock from "./Dock";
import { Home, Settings, Star } from "lucide-react"; // any icons

export default function AppDock() {
  return (
    <div style={{
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000
    }}>
        <Dock
            items={[
                { icon: <Home />, label: "Home", onClick: () => console.log("Home") },
                { icon: <Star />, label: "About", onClick: () => console.log("About") },
                { icon: <Settings />, label: "Settings", onClick: () => console.log("Settings") }
            ]}
            baseItemSize={60}
        />
    </div>
    
  );
}
import { useState } from 'react';
import { CodeSection } from './components/CodeSection';
import { PhotoSection } from './components/PhotoSection';
import { MotionSection } from './components/MotionSection';


export default function App() {
  const [activeSection, setActiveSection] = useState<"code" | "photo" | "motion">("code");
  
  return (
    <main className="app">
      {activeSection === "code" && <CodeSection setActiveSection={setActiveSection}/>}
      {activeSection === "photo" && <PhotoSection />}
      {activeSection === "motion" && <MotionSection />}
    </main>
  );
}
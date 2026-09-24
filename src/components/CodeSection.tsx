import codeImage from '../assets/private-images/image 1.png';
import { Contacts } from './Contacts';
import { Header } from './Header';
import { ScreenFrame } from './ScreenFrame';
import { TechList } from './TechList';

type NavigationChange = {
  setActiveSection: (section: 'code' | 'motion' | 'photo') => void 
}

export function CodeSection(setActiveSection: NavigationChange) {
  return (
    <ScreenFrame label="iPhone 14 & 15 Pro - 3">
      <Header
        activeSection="code"
        backgroundImage={codeImage}
        title="fullstak developer"
        subtitle="Frontend · Python · iOS"
      />

      <main className="screenBody">
        <section className="contentBlock" aria-labelledby="technologies-title">
          <h2 className="sectionTitle" id="technologies-title">
            Technologies
          </h2>
          <TechList />
        </section>

        <Contacts primaryLabel="GitHub" />
      </main>
    </ScreenFrame>
  );
}

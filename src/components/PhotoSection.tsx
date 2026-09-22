import photoImage from '../assets/private-images/image 1-1.png';
import { Contacts } from './Contacts';
import { Header } from './Header';
import { PhotoGrid } from './PhotoGrid';
import { ScreenFrame } from './ScreenFrame';

export function PhotoSection() {
  return (
    <ScreenFrame label="iPhone 14 & 15 Pro - 4">
      <Header
        activeSection="photo"
        backgroundImage={photoImage}
        title="Photographer"
        titleMode="italic"
      />

      <main className="screenBody">
        <PhotoGrid />
        <Contacts primaryLabel="Others" />
      </main>
    </ScreenFrame>
  );
}

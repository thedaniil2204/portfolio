import { Navigation } from './Navigation';

type HeaderProps = {
  activeSection: 'code' | 'motion' | 'photo';
  backgroundImage: string;
  title: string;
  subtitle?: string;
  titleMode?: 'normal' | 'italic';
};

export function Header({ activeSection, backgroundImage, title, subtitle, titleMode = 'normal' }: HeaderProps) {
  return (
    <header className="header">
      <img className="headerImage" src={backgroundImage} alt="" />
      <button className="languageButton" type="button" aria-label="Переключить язык">
        ◎
      </button>

      <div className="heroCopy">
        <h1 className={titleMode === 'italic' ? 'heroTitle heroTitleItalic' : 'heroTitle'}>
          {title}
        </h1>
        {subtitle ? <p className="heroSubtitle">{subtitle}</p> : null}
      </div>
      <Navigation activeSection={activeSection}/>
    </header>
  );
}

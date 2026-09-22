type ContactsProps = {
  primaryLabel: string;
};

export function Contacts({ primaryLabel }: ContactsProps) {
  return (
    <footer className="contacts">
      <h2 className="sectionTitle">Contacts</h2>
      <div className="contactBar" aria-label="Контакты">
        <a href="#">{primaryLabel} ↗</a>
        <a href="#">Telegram ↗</a>
        <a href="#">Email ↗</a>
      </div>
    </footer>
  );
}

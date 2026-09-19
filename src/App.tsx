import { Header } from './components/Header';

const skills = ['React', 'TypeScript', 'Vite', 'CSS'];

export default function App() {
  return (
    <main className="app">
      <Header />

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Mini pet project</p>
        <h1 id="hero-title">Portfolio starter</h1>
        <p className="heroText">
          Базовая структура уже готова. Можно постепенно добавлять страницы,
          компоненты, данные о проектах и свои стили.
        </p>
        <a className="primaryLink" href="https://react.dev" target="_blank" rel="noreferrer">
          React docs
        </a>
      </section>

      <section className="section" aria-labelledby="stack-title">
        <h2 id="stack-title">Стек</h2>
        <ul className="skillList">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

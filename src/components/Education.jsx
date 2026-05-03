import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Education() {
  const ref = useScrollReveal(0)

  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Ma <span className="accent">formation</span></h2>
        <div className="timeline">
          <div className="timeline-item fade-in" ref={ref}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <span className="timeline-date">2024 – 2026</span>
              <h3>DUT — Conception & Développement Logiciel</h3>
              <p className="timeline-school">
                École Supérieure de Technologie — Laâyoune
              </p>
              <ul className="timeline-list">
                <li>Développement Web, Java/Spring, Bases de données avancées</li>
                <li>Intelligence Artificielle & Blockchain</li>
                <li>UML/Merise, UI/UX, Architecture logicielle</li>
                <li>Gestion de projets Agile / Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

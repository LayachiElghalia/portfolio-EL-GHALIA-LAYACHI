import { MapPin, Sparkles, Users } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { languages } from '../data'

export default function About() {
  const leftRef  = useScrollReveal(0)
  const rightRef = useScrollReveal(150)

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">À propos <span className="accent">de moi</span></h2>

        <div className="about-grid">
          <div className="about-visual fade-in" ref={leftRef}>
            <div className="about-card-big">
              <div className="about-stat">
                <span className="stat-num">4+</span>
                <span className="stat-label">Projets livrés</span>
              </div>
              <div className="about-divider" />
              <div className="about-stat">
                <span className="stat-num">2026</span>
                <span className="stat-label">Diplôme DUT</span>
              </div>
              <div className="about-divider" />
              <div className="about-stat">
                <span className="stat-num">3</span>
                <span className="stat-label">Langues parlées</span>
              </div>
            </div>

            <div className="about-tags-float">
              <span className="tag-float">React</span>
              <span className="tag-float">Spring Boot</span>
              <span className="tag-float">IA / Chatbot</span>
              <span className="tag-float">UI/UX</span>
            </div>
          </div>

          <div className="about-text fade-in-right" ref={rightRef}>
            <p>
              Développeuse full‑stack passionnée, je conçois et livre des applications web
              réelles intégrant <strong>React</strong>, <strong>Spring Boot</strong> et
              l'<strong>IA</strong>. Rigoureuse et autonome, je cherche à contribuer à des
              projets concrets dans un environnement technique stimulant.
            </p>
            <p>
              Actuellement en DUT à l'EST de Laâyoune, j'ai déjà déployé plusieurs
              applications en production, notamment des plateformes à <strong>impact social</strong>{' '}
              avec agents IA intégrés.
            </p>

            <div className="about-langs">
              <h3>Langues</h3>
              <div className="lang-pills">
                {languages.map(l => (
                  <span key={l.label} className="pill">
                    {l.label} — {l.level}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-badges">
              <span className="badge"><MapPin size={13} strokeWidth={2} /> Laâyoune, Maroc</span>
              <span className="badge"><Sparkles size={13} strokeWidth={2} /> Open to work</span>
              <span className="badge"><Users size={13} strokeWidth={2} /> Agile / Scrum</span>
            </div>

            <a
              href="/CV_Layachi_elghalia.pdf"
              download
              className="btn-primary"
              style={{ marginTop: '1.5rem', display: 'inline-block' }}
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Building2, GraduationCap, Trophy } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data'

const ICON_MAP = { Building2, GraduationCap, Trophy }

function ProjectCard({ icon, title, description, tags, link, delay }) {
  const ref = useScrollReveal(delay)
  const Icon = ICON_MAP[icon]

  return (
    <div className="project-card fade-in" ref={ref}>
      <div className="project-header">
        <Icon size={38} strokeWidth={1.2} />
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map(t => <span key={t}>{t}</span>)}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            Voir le site →
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Mes <span className="accent">projets</span></h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

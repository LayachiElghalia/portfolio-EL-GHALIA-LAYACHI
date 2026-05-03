import { Code2, Layers, Database, Wrench, Bot } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { skills } from '../data'

const ICON_MAP = { Code2, Layers, Database, Wrench, Bot }

function SkillCard({ icon, title, tags, delay }) {
  const ref = useScrollReveal(delay)
  const Icon = ICON_MAP[icon]

  return (
    <div className="skill-card fade-in" ref={ref}>
      <div className="skill-icon-wrap">
        <Icon size={26} strokeWidth={1.5} />
      </div>
      <h3>{title}</h3>
      <div className="skill-tags">
        {tags.map(t => <span key={t}>{t}</span>)}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Mes <span className="accent">compétences</span></h2>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <SkillCard key={s.title} {...s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

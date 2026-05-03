import { useEffect, useState } from 'react'

export default function Hero() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        size: Math.random() * 7 + 3,
        left: Math.random() * 100,
        duration: Math.random() * 12 + 8,
        delay: Math.random() * 12,
        opacity: Math.random() * 0.55 + 0.15,
      }))
    )
  }, [])

  return (
    <section id="hero">
      <div className="hero-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="particles">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-eyebrow">Bonjour, je suis</p>
          <h1 className="hero-name">
            Layachi<br />
            <em>El Ghalia</em>
          </h1>
          <p className="hero-title">Développeuse Full‑Stack Junior</p>
          <p className="hero-sub">React · Spring Boot · IA · UI/UX Design</p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn-outline">Me contacter</a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <img src="/EL GHALIA LAYACHI.jpeg" alt="Layachi El Ghalia" className="hero-photo" />
          </div>
          <div className="hero-photo-glow" />
        </div>
      </div>

      <div className="scroll-indicator">
        <span />
      </div>
    </section>
  )
}

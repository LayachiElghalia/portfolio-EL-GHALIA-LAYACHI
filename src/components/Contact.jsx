import { Mail, Phone, MapPin } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const items = [
  { Icon: Mail,   label: 'layachielghalia@gmail.com', href: 'mailto:layachielghalia@gmail.com' },
  { Icon: Phone,  label: '+212 716 325 046',           href: 'tel:+212716325046' },
  { Icon: MapPin, label: 'Laâyoune, Maroc',            href: null },
]

export default function Contact() {
  const ref = useScrollReveal(0)

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Me <span className="accent">contacter</span></h2>
        <p className="contact-sub">
          Disponible pour un stage, un poste junior ou une collaboration. N'hésitez pas !
        </p>
        <div className="contact-cards fade-in" ref={ref}>
          {items.map(({ Icon, label, href }) =>
            href ? (
              <a key={label} href={href} className="contact-card">
                <Icon size={20} strokeWidth={1.5} className="contact-icon" />
                <span>{label}</span>
              </a>
            ) : (
              <div key={label} className="contact-card">
                <Icon size={20} strokeWidth={1.5} className="contact-icon" />
                <span>{label}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

import { ArrowUpRight } from 'lucide-react'

type CakeCardProps = {
  name: string
  description: string
  image: string
  tag: string
}

export function CakeCard({ name, description, image, tag }: CakeCardProps) {
  return (
    <article className="cake-card">
      <div className="cake-card__art">
        <img src={image} alt={`${name} from CraveBites Bakery`} loading="lazy" />
        <span className="cake-card__tag">{tag}</span>
      </div>
      <div className="cake-card__body">
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <a href="#enquire" className="circle-link" aria-label={`Enquire about ${name}`}>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </article>
  )
}

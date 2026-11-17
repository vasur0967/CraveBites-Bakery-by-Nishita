import { FormEvent, useEffect, useState } from 'react'
import {
  ArrowRight,
  CakeSlice,
  Check,
  ChevronRight,
  Heart,
  Leaf,
  MapPin,
  Menu,
  Phone,
  Quote,
  Sparkles,
  Star,
  X,
} from 'lucide-react'
import { CakeArt } from './components/CakeArt'
import { CakeCard } from './components/CakeCard'

const navItems = [
  { label: 'Our cakes', href: '#collection' },
  { label: 'Our story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
]

const collection = [
  { name: 'Celebration cakes', description: 'Soft, beautifully finished cakes made for your favourite moments.', image: '/images/cake-celebration.webp', tag: 'Made with care' },
  { name: 'Eggless classics', description: 'Delicious everyday favourites with the same warmth and flavour.', image: '/images/cake-birthday-rose.webp', tag: 'Eggless' },
  { name: 'Healthy & no-maida', description: 'Thoughtful bakes that feel indulgent without the usual compromise.', image: '/images/cake-custom-design.webp', tag: 'No maida' },
]

const gallery = [
  { image: '/images/gallery-1.webp', label: 'Freshly finished celebration cake' },
  { image: '/images/gallery-2.jpg', label: 'Elegant layered cake design' },
  { image: '/images/gallery-3.jpg', label: 'Soft pink celebration cake' },
  { image: '/images/gallery-4.jpg', label: 'Rich chocolate cake finish' },
  { image: '/images/gallery-5.jpg', label: 'Colourful cake creation' },
  { image: '/images/gallery-6.jpg', label: 'Beautifully detailed cake design' },
]

const galleryLoop = [...gallery, ...gallery.slice(0, 3)]

const reviews = [
  { quote: 'The cake felt so personal and delicious. You can taste the care in every detail.', name: 'Aarav & Meera', detail: 'Celebration cake' },
  { quote: 'My family loved the eggless cake — soft, beautiful, and genuinely wholesome.', name: 'Riya Shah', detail: 'Custom order' },
  { quote: 'Nishita made our baby shower cake exactly as imagined. It was a hit with everyone!', name: 'Ananya Patel', detail: 'Baby shower' },
]

const whatsappNumber = '918118857953'

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.967-.94 1.165-.174.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.61-.916-2.204-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.476s1.065 2.873 1.213 3.071c.149.198 2.095 3.2 5.075 4.487.709.306 1.262.489 1.693.626.711.226 1.358.194 1.87.118.571-.085 1.758-.719 2.006-1.412.248-.694.248-1.289.173-1.412-.074-.124-.272-.198-.57-.347M12.04 2C6.505 2 2 6.505 2 12.04c0 1.77.46 3.43 1.266 4.87L2 22l5.22-1.23a10.04 10.04 0 0 0 4.82 1.23h.005c5.535 0 10.04-4.505 10.04-10.04 0-2.683-1.045-5.205-2.944-7.104A9.98 9.98 0 0 0 12.04 2m.005 18.29h-.004a8.3 8.3 0 0 1-4.226-1.155l-.303-.18-3.102.729.738-3.026-.197-.31a8.27 8.27 0 0 1-1.27-4.308c0-4.59 3.736-8.326 8.33-8.326a8.27 8.27 0 0 1 5.893 2.443 8.27 8.27 0 0 1 2.438 5.897c-.001 4.59-3.737 8.236-8.297 8.236" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [activeGalleryImage, setActiveGalleryImage] = useState(0)
  const [galleryPaused, setGalleryPaused] = useState(false)
  const [galleryCardsVisible, setGalleryCardsVisible] = useState(() => window.matchMedia('(min-width: 1024px)').matches ? 3 : 2)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    const handleChange = (event: MediaQueryListEvent) => setGalleryCardsVisible(event.matches ? 3 : 2)

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (galleryPaused) return

    const timer = window.setInterval(() => {
      setActiveGalleryImage((current) => (current + 1) % gallery.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [galleryPaused])

  const galleryOffset = activeGalleryImage * (100 / galleryCardsVisible)

  const showPreviousGalleryImage = () => {
    setActiveGalleryImage((current) => (current - 1 + gallery.length) % gallery.length)
  }

  const showNextGalleryImage = () => {
    setActiveGalleryImage((current) => (current + 1) % gallery.length)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = encodeURIComponent(
      `Hi Nishita! I would like to enquire about a cake.\n\nName: ${form.get('name')}\nPhone: ${form.get('phone')}\nCake: ${form.get('cake')}\nDate: ${form.get('date')}\nMessage: ${form.get('message') || 'None'}`,
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <div className="announcement">
        <span>Made fresh, every time</span>
        <span className="announcement__dot" />
        <span>Eggless & no-maida options</span>
        <span className="announcement__dot" />
        <span>Made with love in Hyderabad</span>
      </div>

      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="CraveBites home">
          <span className="brand__mark"><CakeSlice size={21} strokeWidth={1.8} /></span>
          <span><strong>CraveBites</strong><small>by Nishita</small></span>
        </a>
        <nav className={menuOpen ? 'nav nav--open' : 'nav'} aria-label="Main navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav__cta" href="#enquire">Enquire now <ArrowRight size={15} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__copy">
            <div className="eyebrow"><Sparkles size={15} /> Baked especially for you</div>
            <h1>Sweet moments,<br /><em>made personal.</em></h1>
            <p className="hero__lead">Homemade cakes made with honest ingredients, thoughtful flavours, and a little bit of magic — for every celebration that deserves to be remembered.</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#collection">Explore our cakes <ArrowRight size={18} /></a>
              <a className="button button--text" href="#enquire">Create your cake <ChevronRight size={18} /></a>
            </div>
            <div className="hero__proof">
              <div className="avatar-stack">
                <span>AM</span><span>RS</span><span>AP</span>
              </div>
              <div><strong>Made for happy moments</strong><span><Star size={13} fill="currentColor" /> 4.9 love from our customers</span></div>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__sun" />
            <div className="hero__note hero__note--top"><Leaf size={18} /> Freshly baked</div>
            <div className="hero__cake"><img src="/images/cake-celebration.webp" alt="A beautifully finished celebration cake" /></div>
            <div className="hero__note hero__note--bottom"><Heart size={18} fill="currentColor" /> Made with love</div>
            <div className="hero__flavour">Vanilla bean<br /><span>with a little joy</span></div>
          </div>
        </section>

        <section className="promise-strip" aria-label="Our promises">
          <div><span>01</span><strong>Freshly baked</strong><small>Never rushed, always wholesome</small></div>
          <div><span>02</span><strong>Personalised</strong><small>Made around your idea</small></div>
          <div><span>03</span><strong>Better choices</strong><small>Eggless & no-maida options</small></div>
          <div><span>04</span><strong>Made with care</strong><small>Every detail, thoughtfully done</small></div>
        </section>

        <section className="section collection" id="collection">
          <div className="section-heading section-heading--center">
            <div className="eyebrow">A little something for every craving</div>
            <h2>Our sweet <em>collection</em></h2>
            <p>From quiet celebrations to grand ones, every cake is made to feel like the perfect ending to your story.</p>
          </div>
          <div className="cake-grid">
            {collection.map((item) => <CakeCard key={item.name} {...item} />)}
          </div>
        </section>

        <section className="story" id="story">
          <div className="story__image">
            <div className="story__logo-wrap">
              <div className="story__logo-circle" />
              <img className="story__logo" src="/images/cravebites-logo.jpg" alt="CraveBites Bakery by Nishita logo" />
              <span className="story__logo-caption">Made with heart<br />in Hyderabad</span>
            </div>
          </div>
          <div className="story__copy">
            <div className="eyebrow">The heart behind the bakes</div>
            <h2>Good cake begins with <em>good care.</em></h2>
            <p>CraveBites began with a simple belief: the best cakes are the ones that make people pause, smile, and ask for one more slice.</p>
            <p>Every bake is shaped by Nishita’s love for homemade comfort, thoughtful ingredients, and cakes that feel as special as the moments they celebrate.</p>
            <blockquote>“I bake with joy, because the best memories are always served with a little sweetness.”</blockquote>
            <div className="signature"><span>Nishita</span><small>Founder, CraveBites</small></div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="section-heading section-heading--split">
            <div><div className="eyebrow">A peek at our work</div><h2>Made to be<br /><em>remembered.</em></h2></div>
            <p>Every cake is a little different — a reflection of your celebration, your colours, and the flavour you love.</p>
          </div>
          <div
            className="gallery-carousel"
            onMouseEnter={() => setGalleryPaused(true)}
            onMouseLeave={() => setGalleryPaused(false)}
            onFocus={() => setGalleryPaused(true)}
            onBlur={() => setGalleryPaused(false)}
          >
            <div className="gallery-carousel__viewport" aria-live="polite">
              <div
                className="gallery-carousel__track"
                style={{ transform: `translate3d(-${galleryOffset}%, 0, 0)` }}
              >
                {galleryLoop.map((item, index) => (
                  <figure
                    className="gallery-card"
                    key={`${item.image}-${index}`}
                    style={{
                      width: `calc(100% / ${galleryCardsVisible})`,
                      flexBasis: `calc(100% / ${galleryCardsVisible})`,
                    }}
                  >
                    <img src={item.image} alt={item.label} loading={index === activeGalleryImage ? 'eager' : 'lazy'} />
                    <figcaption><span>0{(index % gallery.length) + 1}</span>{item.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="gallery-carousel__controls">
              <button type="button" onClick={showPreviousGalleryImage} aria-label="Previous gallery image"><ArrowRight size={18} /></button>
              <div className="gallery-carousel__dots" aria-label="Choose a gallery image">
                {gallery.map((item, index) => (
                  <button
                    type="button"
                    key={item.image}
                    className={index === activeGalleryImage ? 'gallery-carousel__dot gallery-carousel__dot--active' : 'gallery-carousel__dot'}
                    onClick={() => setActiveGalleryImage(index)}
                    aria-label={`Show ${item.label}`}
                    aria-current={index === activeGalleryImage ? 'true' : undefined}
                  />
                ))}
              </div>
              <button type="button" onClick={showNextGalleryImage} aria-label="Next gallery image"><ArrowRight size={18} /></button>
            </div>
          </div>
          <a href="#enquire" className="text-link">Have something special in mind? <ArrowRight size={17} /></a>
        </section>

        <section className="values">
          <div className="values__intro"><div className="eyebrow">What makes us different</div><h2>Better for your<br /><em>taste buds.</em></h2></div>
          <div className="values__items">
            <article><span><Leaf /></span><h3>Wholesome choices</h3><p>Thoughtful recipes with eggless and no-maida options for those who prefer more mindful bakes.</p></article>
            <article><span><Heart /></span><h3>Homemade heart</h3><p>Freshly made in small batches, with the personal touch that makes every order feel special.</p></article>
            <article><span><CakeSlice /></span><h3>Made for you</h3><p>From flavours to colours and finishing touches, the cake is designed around your celebration.</p></article>
          </div>
        </section>

        <section className="section reviews" id="reviews">
          <div className="reviews__intro">
            <div className="eyebrow">Words from our sweet circle</div>
            <h2>What our<br /><em>customers say</em></h2>
            <div className="rating"><strong>4.9</strong><div>{[1,2,3,4,5].map((star) => <Star key={star} size={16} fill="currentColor" />)}</div><span>Based on happy celebrations</span></div>
          </div>
          <div className="review-list">
            {reviews.map((review, index) => (
              <article className={`review-card ${index === 1 ? 'review-card--accent' : ''}`} key={review.name}>
                <Quote className="review-card__quote" size={30} />
                <p>“{review.quote}”</p>
                <div><span>{review.name.split(' ').map((part) => part[0]).join('')}</span><div><strong>{review.name}</strong><small>{review.detail}</small></div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="enquiry" id="enquire">
          <div className="enquiry__copy">
            <div className="eyebrow eyebrow--light">Let’s make something lovely</div>
            <h2>Your cake,<br /><em>your celebration.</em></h2>
            <p>Tell us what you have in mind. We’ll help you choose the perfect flavour, design, and timeline — all through WhatsApp.</p>
            <div className="enquiry__contact">
              <a href="tel:+918118857953"><Phone size={18} /> +91 81188 57853</a>
              {/* <a href="https://www.google.com/maps/search/?api=1&query=F+201+Malabar+County+2+Rd+behind+NIRMA+UNIVERSITY+Tragad+Ahmedabad+Gujarat+382470+India" target="_blank" rel="noreferrer"><MapPin size={18} /> F 201, Malabar County 2 Rd,<br />behind NIRMA UNIVERSITY,<br />Tragad, Ahmedabad, Gujarat 382470, India</a> */}
            </div>
          </div>
          <div className="enquiry__form-wrap">
            {submitted ? (
              <div className="success-card"><span><Check /></span><h3>Your message is ready!</h3><p>WhatsApp has opened with your cake details. Send it to Nishita and we’ll take it from there.</p><button className="button button--primary" onClick={() => setSubmitted(false)}>Send another enquiry</button></div>
            ) : (
              <form className="enquiry-form" onSubmit={handleSubmit}>
                <div className="form-row"><label>YOUR NAME<input name="name" required placeholder="e.g. Ananya Sharma" /></label><label>PHONE NUMBER<input name="phone" required type="tel" placeholder="+91 00000 00000" /></label></div>
                <div className="form-row"><label>CAKE IDEA<select name="cake" required defaultValue=""><option value="" disabled>Select a cake</option><option>Birthday cake</option><option>Wedding cake</option><option>Baby shower cake</option><option>Eggless cake</option><option>No-maida / healthy cake</option><option>Custom cake</option></select></label><label>CELEBRATION DATE<input name="date" type="date" /></label></div>
                <label>Tell us a little more<textarea name="message" rows={3} placeholder="Describe the flavour, colour, size, or design you have in mind..." /></label>
                <button className="button button--whatsapp" type="submit"><WhatsAppIcon size={19} /> Send enquiry on WhatsApp <ArrowRight size={18} /></button>
                <small className="form-note">By continuing, you agree to send your details through WhatsApp.</small>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer__top">
          <a className="brand brand--footer" href="#top"><span className="brand__mark"><CakeSlice size={21} /></span><span><strong>CraveBites</strong><small>by Nishita</small></span></a>
          <p>Homemade sweetness, thoughtfully made.<br />For every moment worth celebrating.</p>
          <div className="footer__links"><a href="#collection">Our cakes</a><a href="#story">Our story</a><a href="#gallery">Gallery</a><a href="#enquire">Enquire</a></div>
        </div>
        <div className="footer__bottom"><span>© {new Date().getFullYear()} CraveBites Bakery by Nishita</span><span>Made with <Heart size={13} fill="currentColor" /> for sweet moments</span></div>
      </footer>

      <a className="floating-wa" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="Order on WhatsApp"><WhatsAppIcon size={22} /><span>Order on WhatsApp</span></a>
    </div>
  )
}

export default App

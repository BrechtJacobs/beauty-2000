import React from 'react';

const NAV_LINKS = [
  { label: 'Diensten', href: '#services' },
  { label: 'Over ons', href: '#about' },
  { label: 'Prijzen', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  { icon: '✦', name: 'Gezichtsbehandelingen', desc: 'Vakkundig verzorgde huid, afgestemd op jouw huidtype.' },
  { icon: '◈', name: 'Waxing & ontharing', desc: 'Snel, zorgzaam en met oog voor comfort.' },
  { icon: '◉', name: 'Wenkbrauw & wimpers', desc: 'Jouw blik, in perfecte balans gebracht.' },
  { icon: '◇', name: 'Massages', desc: 'Even opladen. Volledig voor jezelf.' },
  { icon: '◌', name: 'Manicure & pedicure', desc: 'Van top tot teen vakkundig verzorgd.' },
  { icon: '◎', name: 'Make-up', desc: 'Subtiel of uitgesproken — jij kiest.' },
];

const STEPS = [
  { n: '01', title: 'Kies je behandeling', desc: 'Bekijk ons aanbod en ontdek wat bij jou past.' },
  { n: '02', title: 'Boek of bel ons', desc: 'Online reserveren of bel 0475 77 31 22.' },
  { n: '03', title: 'Kom genieten', desc: 'Welkom in onze salon in het hart van Oostende.' },
];

const PRICING = [
  { cat: 'Gezicht', items: [['Reiniging & verzorging', '€ 45'], ['Dieptereiniging', '€ 55'], ['Oogomgeving', '€ 30']] },
  { cat: 'Waxing', items: [['Wenkbrauwen', '€ 10'], ['Boven lip', '€ 8'], ['Benen (volledig)', '€ 38']] },
  { cat: 'Nagels', items: [['Manicure', '€ 25'], ['Pedicure', '€ 30'], ['Gellak', '€ 35']] },
  { cat: 'Massages', items: [['Ontspanningsmassage 30 min', '€ 35'], ['Rug & schouders 45 min', '€ 48'], ['Volledig lichaam 60 min', '€ 60']] },
];

export default function Beauty2000() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleForm = e => {
    e.preventDefault();
    alert('Bedankt! We nemen snel contact met je op.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-[#FAF7F4] text-[#2C2420]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* NAV */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl font-semibold text-[#C4956A]">Beauty 2000</span>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-[#2C2420] hover:text-[#C4956A] transition-colors duration-200">{l.label}</a>
            ))}
            <a href="#contact" className="bg-[#C4956A] hover:bg-[#B07D54] text-white font-medium text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">Afspraak maken</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
            <span className={`block w-5 h-0.5 bg-[#2C2420] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#2C2420] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#2C2420] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#E8D5C4] px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(l => <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-[#2C2420] hover:text-[#C4956A]">{l.label}</a>)}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-[#C4956A] text-white text-sm font-medium px-6 py-3 rounded-full text-center">Afspraak maken</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=85" alt="Beauty salon" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2420]/65 via-[#2C2420]/30 to-transparent" />
        <div className="relative z-10 max-w-3xl px-6 md:px-12">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl font-light text-white leading-tight mb-4">
            Hier ben je<br /><em>in goede handen</em>
          </h1>
          <p className="text-[#E8D5C4] text-lg md:text-xl mb-8 max-w-md">Professionele schoonheidsverzorging, betaalbaar voor iedereen. Midden in Oostende.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-[#C4956A] hover:bg-[#B07D54] text-white font-medium text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">Afspraak maken</a>
            <a href="#services" className="border border-white/70 text-white hover:bg-white hover:text-[#2C2420] font-medium text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-300">Bekijk diensten</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
          <span className="text-white text-xs tracking-widest">scroll</span>
          <div className="w-px h-8 bg-white/60" />
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#E8D5C4] py-5 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[['✦', 'Professioneel team'], ['◈', 'Betaalbare prijzen'], ['◉', 'Centraal in Oostende'], ['◇', 'Voor vrouwen én mannen']].map(([icon, label]) => (
            <div key={label} className="flex items-center justify-center gap-2 text-[#2C2420]">
              <span className="text-[#C4956A] text-sm">{icon}</span>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#C4956A] text-sm tracking-widest uppercase mb-3">Wat we doen</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl md:text-4xl font-light mb-12 max-w-md">Alles voor jouw verzorging, op één plek</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <div key={s.name} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#E8D5C4]/50 hover:scale-[1.02]">
                <span className="text-[#C4956A] text-2xl mb-4 block">{s.icon}</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-semibold mb-2">{s.name}</h3>
                <p className="text-[#8A7068] text-sm leading-relaxed mb-4">{s.desc}</p>
                <a href="#pricing" className="text-[#C4956A] text-sm hover:underline">Bekijk prijzen →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85" alt="Beauty 2000 salon" className="rounded-2xl aspect-[4/5] object-cover shadow-lg hover:shadow-xl transition-all duration-300 w-full" />
          <div>
            <p className="text-[#C4956A] text-sm tracking-widest uppercase mb-3">Over Beauty 2000</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl md:text-4xl font-light mb-6">Jouw moment, dichtbij en vertrouwd</h2>
            <p className="text-[#8A7068] leading-relaxed mb-4">Bij Beauty 2000 op de Karel Janssenslaan 21 in Oostende sta je centraal. We geloven dat goed voor jezelf zorgen voor iedereen weggelegd is — niet alleen voor een select groepje, maar voor elke vrouw en man die even wil opladen.</p>
            <p className="text-[#8A7068] leading-relaxed mb-8">Ons team verwelkomt je met een warme blik en vakkundige handen. Of je nu komt voor een snelle wenkbrauwbehandeling of een uitgebreide gezichtsverzorging — bij ons ben je in goede handen.</p>
            <div className="grid grid-cols-3 gap-4 border-t border-[#E8D5C4] pt-8">
              {[['10+', 'jaar ervaring'], ['8', 'behandelingen'], ['♥', 'hart van Oostende']].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl text-[#C4956A] font-semibold">{val}</div>
                  <div className="text-xs text-[#8A7068] mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF7F4]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl md:text-4xl font-light">Zo eenvoudig is het</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 relative">
          {STEPS.map((s, i) => (
            <div key={s.n} className="text-center relative">
              <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl text-[#E8D5C4] font-light mb-4">{s.n}</div>
              <h3 className="font-semibold text-[#2C2420] mb-2">{s.title}</h3>
              <p className="text-[#8A7068] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#C4956A] text-sm tracking-widest uppercase mb-3">Transparante prijzen</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl md:text-4xl font-light mb-12">Betaalbaar genieten, geen verrassingen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING.map(p => (
              <div key={p.cat} className="bg-[#FAF7F4] rounded-2xl p-8 border border-[#E8D5C4]/50">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-semibold text-[#C4956A] mb-4">{p.cat}</h3>
                {p.items.map(([name, price]) => (
                  <div key={name} className="flex justify-between items-center py-2 border-b border-[#E8D5C4]/40 last:border-0">
                    <span className="text-sm text-[#2C2420]">{name}</span>
                    <span className="text-sm font-semibold text-[#C4956A] whitespace-nowrap ml-2">{price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="text-[#8A7068] text-sm mt-6 text-center">Meer behandelingen beschikbaar — bel ons voor meer info: <a href="tel:0475773122" className="text-[#C4956A] hover:underline">0475 77 31 22</a></p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF7F4]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl md:text-4xl font-light mb-6">Wat klanten zeggen</h2>
          <div className="bg-white rounded-2xl p-8 border border-[#E8D5C4]/50 shadow-sm">
            <div className="text-5xl text-[#E8D5C4] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>"</div>
            <p className="text-[#8A7068] italic mb-6">We zijn nog maar net begonnen. Wees een van de eersten die een review achterlaat na jouw bezoek — we horen graag hoe je je gevoeld hebt.</p>
            <a href="#contact" className="border border-[#C4956A] text-[#C4956A] hover:bg-[#C4956A] hover:text-white font-medium text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-300">Maak een afspraak</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-[#C4956A] text-sm tracking-widest uppercase mb-3">Contact</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl md:text-4xl font-light mb-8">We verwelkomen je graag</h2>
            {[
              ['📍', 'Adres', 'Karel Janssenslaan 21, 8400 Oostende'],
              ['📞', 'Telefoon', '0475 77 31 22'],
              ['🕐', 'Maandag – vrijdag', '9:00 – 18:00'],
              ['🕐', 'Zaterdag', '9:00 – 17:00'],
            ].map(([icon, label, val]) => (
              <div key={label} className="flex gap-4 mb-4">
                <span className="text-xl">{icon}</span>
                <div>
                  <div className="text-xs text-[#8A7068] uppercase tracking-wide">{label}</div>
                  <div className="text-[#2C2420] text-sm font-medium">{val}</div>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleForm} className="flex flex-col gap-4">
            <input required placeholder="Jouw naam" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full bg-[#FAF7F4] border border-[#E8D5C4] rounded-xl px-5 py-3.5 text-[#2C2420] placeholder-[#8A7068] focus:outline-none focus:border-[#C4956A] focus:ring-2 focus:ring-[#C4956A]/20 transition-all duration-200" />
            <input required type="email" placeholder="E-mailadres" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full bg-[#FAF7F4] border border-[#E8D5C4] rounded-xl px-5 py-3.5 text-[#2C2420] placeholder-[#8A7068] focus:outline-none focus:border-[#C4956A] focus:ring-2 focus:ring-[#C4956A]/20 transition-all duration-200" />
            <textarea required rows={5} placeholder="Je bericht of vraag" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full bg-[#FAF7F4] border border-[#E8D5C4] rounded-xl px-5 py-3.5 text-[#2C2420] placeholder-[#8A7068] focus:outline-none focus:border-[#C4956A] focus:ring-2 focus:ring-[#C4956A]/20 transition-all duration-200 resize-none" />
            <button type="submit" className="bg-[#C4956A] hover:bg-[#B07D54] text-white font-medium text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 self-start">Verstuur bericht</button>
          </form>
        </div>
        <div className="max-w-6xl mx-auto mt-12">
          <iframe title="Beauty 2000 locatie" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.6!2d2.916!3d51.229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zKarel+Janssenslaan+21+Oostende!5e0!3m2!1snl!2sbe!4v1234567890" className="w-full h-64 rounded-2xl border border-[#E8D5C4]" allowFullScreen loading="lazy" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2C2420] text-white py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="border-b border-white/10 pb-8 mb-8 grid md:grid-cols-3 gap-8">
            <div>
              <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl text-[#C4956A] font-semibold">Beauty 2000</span>
              <p className="text-white/50 text-sm mt-2 leading-relaxed">Professionele schoonheidsverzorging in het hart van Oostende.</p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-3 text-white/80">Navigatie</p>
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map(l => <a key={l.href} href={l.href} className="text-white/50 hover:text-[#C4956A] text-sm transition-colors duration-200">{l.label}</a>)}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold mb-3 text-white/80">Contact</p>
              <p className="text-white/50 text-sm">Karel Janssenslaan 21, Oostende</p>
              <a href="tel:0475773122" className="text-white/50 hover:text-[#C4956A] text-sm transition-colors duration-200 block mt-1">0475 77 31 22</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">© {new Date().getFullYear()} Beauty 2000 Oostende. Alle rechten voorbehouden.</p>
            <div className="w-16 h-px bg-[#C4956A]/30" />
          </div>
        </div>
      </footer>
    </div>
  );
}
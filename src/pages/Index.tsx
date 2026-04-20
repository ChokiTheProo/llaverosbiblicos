import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CountdownTimer } from "@/components/CountdownTimer";
import heroImg from "@/assets/hero-keychains.jpg";
import display1 from "@/assets/keychain-display-1.jpg";
import display2 from "@/assets/keychain-display-2.jpg";
import display3 from "@/assets/keychain-display-3.jpg";

const Index = () => {
  const benefits = [
    "50 moldes de llaveros con personajes bíblicos",
    "Cada molde con su versículo incluido",
    "Archivo en PDF listo para imprimir en casa",
    "Ideal para regalar, decorar o revender",
    "Sin necesidad de experiencia — solo imprimir y armar",
  ];

  const audience = [
    { icon: "🙏", title: "Mujeres cristianas", desc: "Que quieren crear con propósito" },
    { icon: "🎁", title: "Para regalar", desc: "Detalles únicos llenos de fe" },
    { icon: "💰", title: "Para vender", desc: "Genera ingresos extra" },
    { icon: "✂️", title: "Amantes del arte", desc: "Manualidades con sentido" },
    { icon: "⛪", title: "Iglesias y grupos", desc: "Actividades comunitarias" },
    { icon: "👩‍🏫", title: "Maestras de escuela dominical", desc: "Recursos para enseñar" },
  ];

  const testimonials = [
    { name: "Ana Paula", city: "Ciudad de México, MX", text: "¡Me encantaron los moldes! Súper fáciles de armar y quedaron preciosos. Ya regalé a toda mi familia de la iglesia." },
    { name: "Fernanda López", city: "Bogotá, CO", text: "Empecé a vender los llaveros en la feria de la iglesia y recuperé la inversión el primer día." },
    { name: "Mariana Santos", city: "Lima, PE", text: "El video tutorial me ayudó muchísimo. Nunca había hecho manualidades y armé todo perfecto." },
    { name: "Patricia Olivera", city: "Buenos Aires, AR", text: "Los versículos en los llaveros son una bendición. ¡Los niños de la escuela bíblica los amaron!" },
    { name: "Juliana Costa", city: "Madrid, ES", text: "Material de calidad increíble. Imprimí en casa y quedó profesional. Súper recomendado." },
    { name: "Camila Rodríguez", city: "Quito, EC", text: "Entrega instantánea y moldes maravillosos. ¡Ya estoy esperando nuevos kits!" },
  ];

  const faqs = [
    {
      q: "¿Cómo voy a recibir el material?",
      a: "Recibirás el archivo PDF directamente en tu correo electrónico inmediatamente después de confirmar el pago. Acceso 100% digital e instantáneo.",
    },
    {
      q: "¿Necesito alguna habilidad especial?",
      a: "¡Para nada! Solo necesitas imprimir, recortar y armar. Incluimos un video tutorial paso a paso para que sea aún más fácil.",
    },
    {
      q: "¿Puedo vender los llaveros que arme?",
      a: "¡Sí! Tienes total libertad para vender los llaveros que crees con los moldes. Muchas de nuestras clientes ya generan ingresos extra con ellos.",
    },
    {
      q: "¿El acceso es mensual?",
      a: "No, es un pago único. Una vez compras, el material es tuyo para siempre. Sin suscripciones ni cobros recurrentes.",
    },
    {
      q: "¿Qué incluyen los regalos sorpresa?",
      a: "Recibirás 3 bonos extra: plantillas adicionales, una guía de cómo vender tus llaveros y un kit de etiquetas para presentación.",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Top bar */}
      <div className="bg-foreground text-background text-center py-2 text-xs md:text-sm font-medium tracking-wide">
        ⚡ Acceso inmediato después del pago · Más de 500 clientas felices
      </div>

      {/* HERO */}
      <header className="relative bg-gradient-warm overflow-hidden">
        <div className="absolute top-20 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <div className="space-y-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm font-medium text-primary shadow-soft">
              ✨ Kit Digital Exclusivo
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
              Moldes de <span className="italic text-primary">Llaveros Bíblicos</span> para Imprimir y Armar
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance">
              50 personajes de la Biblia con versículos — listos para usar, regalar o vender.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-warm text-primary-foreground text-lg font-semibold rounded-full px-8 py-7 transition-smooth animate-pulse-warm"
                onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
              >
                🔥 ¡Quiero mi kit ahora!
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">★★★★★</span>
                <span className="font-semibold text-foreground">4.9/5</span>
              </div>
              <div>+500 clientas satisfechas</div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-4 bg-gradient-sunset opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImg}
              alt="Llaveros bíblicos hechos a mano con personajes y versículos"
              width={1536}
              height={1152}
              className="relative rounded-3xl shadow-warm w-full animate-float"
            />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-warm p-4 flex items-center gap-3 border border-border">
              <div className="bg-gradient-primary text-primary-foreground w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xl">50</div>
              <div>
                <div className="font-display font-bold text-foreground">Personajes</div>
                <div className="text-xs text-muted-foreground">con versículos</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* WHAT YOU GET */}
      <section className="py-20 md:py-28 container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">El kit completo</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-balance">
            Lo que vas a recibir
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">Todo incluido en tu kit digital</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-card rounded-2xl p-5 border border-border shadow-soft hover:shadow-warm hover:-translate-y-1 transition-smooth"
              >
                <div className="bg-gradient-primary text-primary-foreground w-10 h-10 rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                  ✦
                </div>
                <p className="text-foreground font-medium pt-1">{b}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src={display1} alt="Llaveros bíblicos terminados" loading="lazy" width={1024} height={1024} className="rounded-2xl shadow-soft aspect-square object-cover col-span-2" />
            <img src={display2} alt="Conjunto de llaveros" loading="lazy" width={1024} height={1024} className="rounded-2xl shadow-soft aspect-square object-cover" />
            <img src={display3} alt="Armando un llavero" loading="lazy" width={1024} height={1024} className="rounded-2xl shadow-soft aspect-square object-cover" />
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">¿Para quién es?</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-balance">
              Perfecto para quien quiere crear con <span className="italic text-primary">propósito</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audience.map((a, i) => (
              <div
                key={i}
                className="bg-card rounded-3xl p-7 border border-border shadow-soft hover:shadow-warm hover:-translate-y-2 transition-smooth"
              >
                <div className="text-5xl mb-4">{a.icon}</div>
                <h3 className="font-display text-2xl font-bold text-foreground">{a.title}</h3>
                <p className="text-muted-foreground mt-2">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Testimonios</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-balance">
            Lo que dicen nuestras clientas
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">Más de 500 clientas satisfechas <span className="text-accent">★★★★★</span></p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-3xl p-7 border border-border shadow-soft hover:shadow-warm transition-smooth flex flex-col"
            >
              <div className="text-accent text-lg mb-3">★★★★★</div>
              <p className="text-foreground italic leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER */}
      <section id="oferta" className="bg-gradient-warm py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary font-semibold uppercase tracking-widest text-sm px-4 py-2 rounded-full">
              ⚡ Oferta por tiempo limitado
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-5 text-balance">
              Asegura tu kit ahora
            </h2>
            <p className="text-muted-foreground mt-4">Esta oferta expira en:</p>
            <div className="mt-6">
              <CountdownTimer />
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="relative bg-card rounded-3xl shadow-warm border-2 border-primary/20 p-8 md:p-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-sunset text-primary-foreground px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-soft">
                Más vendido
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-bold text-center mt-2">
                Kit Llaveros Bíblicos
              </h3>

              <div className="text-center my-6">
                <div className="text-muted-foreground line-through text-lg">USD 14.90</div>
                <div className="font-display text-6xl md:text-7xl font-bold text-primary mt-1">
                  $6.50
                </div>
                <div className="text-sm text-muted-foreground mt-2">Pago único · Acceso inmediato</div>
              </div>

              <div className="space-y-3 my-8">
                {[
                  "50 moldes de llaveros cristianos",
                  "Personajes de la Biblia con versículos",
                  "Listos para imprimir y armar",
                  "Video tutorial paso a paso",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground">
                    <span className="text-primary font-bold text-lg">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 bg-accent/10 rounded-xl p-3 mt-4">
                  <span className="text-2xl">🎁</span>
                  <span className="font-semibold text-foreground">+3 regalos sorpresa de regalo</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-warm text-primary-foreground text-lg font-bold rounded-full py-7 transition-smooth animate-pulse-warm"
              >
                🛒 ¡QUIERO EL KIT AHORA!
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                ✅ Compra 100% segura · Entrega digital instantánea
              </p>
            </div>

            {/* Guarantee */}
            <div className="mt-8 bg-card rounded-3xl p-6 border border-border shadow-soft flex items-start gap-5">
              <div className="text-5xl">🛡️</div>
              <div>
                <h4 className="font-display text-xl font-bold text-foreground">
                  7 días de garantía incondicional
                </h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Si no te gusta por cualquier motivo, te devolvemos el 100% de tu dinero. Sin burocracia.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-sm text-muted-foreground">
              <span>🔒 Compra segura</span>
              <span>📧 Soporte por email</span>
              <span>⚡ Entrega instantánea</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Preguntas frecuentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-2xl px-6 shadow-soft"
            >
              <AccordionTrigger className="font-display text-lg font-semibold text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background/80 py-10">
        <div className="container text-center text-sm space-y-2">
          <p>© {new Date().getFullYear()} Moldes Bíblicos. Todos los derechos reservados.</p>
          <p className="text-background/60">
            <a href="#" className="hover:text-background transition-smooth">Política de Privacidad</a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-background transition-smooth">Términos de Uso</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

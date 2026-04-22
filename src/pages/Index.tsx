import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CountdownTimer } from "@/components/CountdownTimer";
import { StickyCountdownBar } from "@/components/StickyCountdownBar";
import { useReveal } from "@/hooks/use-reveal";
import { Flame, ShieldCheck, Sparkles, Star } from "lucide-react";
import productoPreview from "@/assets/producto-preview.jpg";
import llavero1 from "@/assets/llavero-1.jpg";
import llavero2 from "@/assets/llavero-2.jpg";
import llavero3 from "@/assets/llavero-3.jpg";
import llavero4 from "@/assets/llavero-4.jpg";
import llavero5 from "@/assets/llavero-5.jpg";
import llavero6 from "@/assets/llavero-6.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";

const CHECKOUT_URL = "https://pay.hotmart.com/T105491862G?checkoutMode=10";

const Index = () => {
  useReveal();
  const benefits = [
    "50 moldes de llaveros con personajes bíblicos",
    "Cada molde con su versículo incluido",
    "Archivo en PDF listo para imprimir en casa",
    "Ideal para regalar, decorar o revender",
    "Sin necesidad de experiencia — solo imprimir y armar",
  ];

  const audience = [
    { icon: "🙏", text: "Hombres y mujeres cristianos" },
    { icon: "🎁", text: "Quien quiere regalar con propósito" },
    { icon: "💰", text: "Emprendedores que quieren vender" },
    { icon: "✂️", text: "Amantes de las manualidades" },
    { icon: "⛪", text: "Iglesias, grupos y ministerios" },
    { icon: "👨‍👩‍👧", text: "Familias y maestros de escuela bíblica" },
  ];

  const testimonials = [
    { name: "Ana Paula", city: "Ciudad de México, MX", avatar: avatar1, text: "¡Me encantaron los moldes! Súper fáciles de armar y quedaron preciosos. ¡Ya regalé a toda mi familia de la iglesia!" },
    { name: "Fernanda López", city: "Bogotá, CO", avatar: avatar2, text: "Empecé a vender los llaveros en la feria de la iglesia y recuperé la inversión el primer día." },
    { name: "Mariana Santos", city: "Lima, PE", avatar: avatar3, text: "El video tutorial me ayudó muchísimo. Nunca había hecho manualidades y armé todo perfecto." },
    { name: "Patricia Olivera", city: "Buenos Aires, AR", avatar: avatar4, text: "Los versículos en los llaveros son una bendición. ¡Los niños de la escuela bíblica los amaron!" },
    { name: "Juliana Costa", city: "Madrid, ES", avatar: avatar5, text: "Material de calidad increíble. Imprimí en casa y quedó profesional. Súper recomendado." },
    { name: "Camila Rodríguez", city: "Quito, EC", avatar: avatar6, text: "Entrega instantánea y moldes maravillosos. ¡Ya estoy esperando nuevos kits!" },
  ];

  const faqs = [
    { q: "¿Cómo voy a recibir el material?", a: "Recibirás el archivo PDF directamente en tu correo electrónico inmediatamente después de confirmar el pago. Acceso 100% digital e instantáneo." },
    { q: "¿Necesito alguna habilidad especial?", a: "¡Para nada! Solo necesitas imprimir, recortar y armar. Es muy sencillo, cualquier persona puede hacerlo." },
    { q: "¿Puedo vender los llaveros que arme?", a: "¡Sí! Tienes total libertad para vender los llaveros que crees con los moldes. Muchas de nuestras clientas ya generan ingresos extra con ellos." },
    { q: "¿El acceso es mensual?", a: "No, es un pago único. Una vez compras, el material es tuyo para siempre. Sin suscripciones ni cobros recurrentes." },
  ];

  const llaveros = [llavero1, llavero2, llavero3, llavero4, llavero5];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <StickyCountdownBar href={CHECKOUT_URL} />

      {/* HERO */}
      <header className="bg-gradient-sky relative overflow-hidden">
        {/* Decorative golden orbs */}
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

        <div className="container py-14 md:py-24 text-center max-w-4xl relative">
          {/* Limited offer badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-semibold text-accent-foreground animate-fade-up">
            <Flame className="h-4 w-4 text-accent" aria-hidden />
            Oferta por tiempo limitado · <span className="text-accent">50% OFF</span>
          </div>

          {/* Floating glass card behind headline */}
          <div className="relative mt-6 mx-auto max-w-3xl">
            <div aria-hidden className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-white/70 to-white/30 blur-xl" />
            <div className="glass rounded-[2rem] px-6 py-8 sm:px-10 sm:py-10 shadow-soft animate-fade-up">
              <h1 className="font-display text-5xl md:text-7xl font-semibold text-primary leading-[1.02] text-balance">
                Moldes de Llaveros Bíblicos
                <span className="block italic font-medium text-secondary mt-1">para Imprimir y Armar</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mt-5 max-w-2xl mx-auto">
                50 personajes de la Biblia con versículos — listos para usar, regalar o vender.
              </p>
            </div>
          </div>

          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold-strong hover:brightness-110 text-primary-foreground text-lg md:text-xl font-bold rounded-full px-10 py-7 shadow-gold animate-pulse-gold transition-smooth hover:-translate-y-0.5"
            >
              <a href={CHECKOUT_URL}>QUIERO MI KIT AHORA</a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4 inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
              Acceso inmediato después del pago
            </p>
          </div>

          <div className="mt-12 md:mt-16 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <img
              src={productoPreview}
              alt="Vista previa del kit de 50 moldes de llaveros bíblicos"
              width={1200}
              height={1500}
              className="w-full rounded-3xl shadow-soft ring-1 ring-white/60"
            />
          </div>
        </div>
      </header>

      {/* WHAT YOU GET */}
      <section className="py-20 md:py-28 container max-w-5xl reveal">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-primary text-balance">
            Lo que vas a recibir
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">Todo incluido en tu kit digital</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-card rounded-2xl p-5 shadow-card border border-border/60 hover:shadow-soft hover:-translate-y-0.5 transition-smooth"
            >
              <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/15 text-accent">
                <Sparkles className="h-4 w-4" aria-hidden />
              </span>
              <p className="text-foreground font-medium">{b}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg md:text-xl font-semibold text-primary mt-16 mb-8">
          Mira cómo quedan los llaveros listos 👇
        </p>

        <div className="mb-6">
          <img
            src={llavero6}
            alt="Antes y después - llavero bíblico impreso y armado"
            loading="lazy"
            width={1200}
            height={800}
            className="w-full rounded-2xl shadow-soft"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {llaveros.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Llavero bíblico ejemplo ${i + 1}`}
              loading="lazy"
              width={600}
              height={600}
              className="w-full aspect-square object-cover rounded-2xl shadow-card hover:shadow-soft hover:-translate-y-1 transition-smooth"
            />
          ))}
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-gradient-sky py-20 md:py-28 reveal">
        <div className="container max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-primary text-balance">
              ¿Para quién es?
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">Para hombres y mujeres que quieren crear con propósito</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audience.map((a, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-7 flex flex-col items-center text-center gap-3 shadow-card border border-border/60 hover:shadow-soft hover:-translate-y-1 transition-smooth"
              >
                <div className="text-5xl">{a.icon}</div>
                <p className="font-display text-xl font-semibold text-primary leading-snug">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section className="pt-20 md:pt-28 pb-10 container max-w-5xl reveal">
        <div className="text-center mb-14">
          <span className="inline-block bg-accent/20 text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            🎁 Bonos exclusivos
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-primary text-balance">
            Y además, llévate <span className="text-accent italic">5 regalos</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Bonos exclusivos incluidos sin costo adicional
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              tag: "Bono #1",
              icon: "📘",
              title: "Guía Rápida: Cómo Vender Llaveros Bíblicos",
              desc: "Estrategias prácticas para empezar a vender hoy mismo y generar ingresos extra.",
              value: "USD 17",
              featured: true,
            },
            {
              tag: "Bono #2",
              icon: "🧮",
              title: "Calculadora de Precio y Ganancia para Llaveros Bíblicos",
              desc: "Define el precio ideal de venta y calcula tu ganancia real de forma fácil y rápida.",
              value: "USD 12",
            },
            {
              tag: "Bono #3",
              icon: "📊",
              title: "Plantilla de Control de Gastos, Ventas y Ganancias para Llaveros Bíblicos",
              desc: "Organiza tus finanzas, controla tus ventas y visualiza tus ganancias en una plantilla lista para usar.",
              value: "USD 9",
            },
            {
              tag: "Bono #4",
              icon: "💬",
              title: "Scripts de Venta para WhatsApp y Facebook",
              desc: "Mensajes listos para copiar y pegar que te ayudan a vender más llaveros por chat y redes sociales.",
              value: "USD 15",
            },
            {
              tag: "Bono #5",
              icon: "🎉",
              title: "Dinámicas con Llaveros Bíblicos para Jóvenes y Grupos",
              desc: "Actividades y juegos creativos usando los llaveros bíblicos para reuniones de jóvenes, células y escuela dominical.",
              value: "USD 19",
            },
          ].map((bonus, i) => (
            <div
              key={i}
              className={`relative bg-card rounded-2xl p-6 border-2 hover:-translate-y-1 transition-smooth flex flex-col ${
                bonus.featured
                  ? "border-accent/70 shadow-glow animate-shimmer-glow"
                  : "border-accent/30 shadow-card hover:shadow-soft"
              }`}
            >
              {/* GRATIS ribbon */}
              <div className="absolute -top-3 -right-3 z-10 rotate-6">
                <div className="bg-success text-primary-foreground font-display font-extrabold text-sm px-3 py-1 rounded-full shadow-soft border-2 border-background tracking-wider">
                  GRATIS
                </div>
              </div>

              <div className="absolute -top-3 left-6 bg-gradient-gold-strong text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-gold">
                {bonus.tag}
              </div>
              <div className="text-5xl mb-4 mt-3">{bonus.icon}</div>
              <h3 className="font-display text-xl font-semibold text-primary mb-2 leading-tight">
                {bonus.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {bonus.desc}
              </p>
              <div className="mt-5 pt-4 border-t border-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Valor:</span>
                  <span className="font-display font-bold text-muted-foreground line-through">
                    {bonus.value}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 bg-success/10 border-2 border-dashed border-success/50 rounded-xl px-3 py-2">
                  <span className="text-sm font-semibold text-success-foreground flex items-center gap-1">
                    <span className="text-base">🎉</span> Hoy:
                  </span>
                  <span className="font-display font-extrabold text-success text-2xl tracking-wider -rotate-3 drop-shadow-sm">
                    ¡GRATIS!
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="font-display text-xl md:text-2xl text-primary">
            Todo esto <b className="text-accent">GRATIS</b> al adquirir tu kit hoy
          </p>
        </div>
      </section>

      {/* PRICE CTA AFTER BONUSES */}
      <section className="pb-20 md:pb-28 px-4">
        <div className="w-full max-w-xl mx-auto">
          <div className="relative bg-card rounded-3xl shadow-soft border-2 border-accent/40 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />
            <div className="relative flex flex-col items-center text-center px-6 py-10 sm:px-10 sm:py-12">
              <p className="font-display text-2xl sm:text-3xl font-bold text-primary text-balance leading-tight">
                Llévate <span className="text-accent">todo esto</span> por apenas
              </p>

              <div className="flex items-baseline justify-center gap-1 mt-6">
                <span className="font-display text-3xl sm:text-4xl font-bold text-accent">$</span>
                <span className="font-display text-7xl sm:text-8xl font-bold text-accent leading-none tracking-tight">
                  9.90
                </span>
                <span className="font-display text-lg sm:text-xl text-muted-foreground ml-1">USD</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">💳 Pago único · Acceso inmediato</p>

              <a
                href={CHECKOUT_URL}
                className="mt-8 inline-flex items-center justify-center w-full text-center bg-gradient-gold-strong hover:brightness-110 text-primary-foreground text-base sm:text-lg font-bold rounded-full px-6 py-5 shadow-gold transition-smooth"
              >
                ¡QUIERO MI KIT AHORA!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="pb-20 md:pb-28 container max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary text-balance">
            Lo que dicen nuestras clientas
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">Más de 500 clientas satisfechas ⭐</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/60 hover:shadow-soft transition-smooth flex flex-col"
            >
              <div className="text-accent text-lg mb-2">★★★★★</div>
              <p className="text-foreground italic leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-border">
                <img
                  src={t.avatar}
                  alt={`Foto de ${t.name}, clienta satisfecha`}
                  loading="lazy"
                  width={88}
                  height={88}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-accent/40"
                />
                <div>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER */}
      <section id="oferta" className="bg-gradient-sky py-20 md:py-28 relative">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary text-balance">
              Asegura tu kit ahora
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Una inversión única para crear, regalar o vender con propósito
            </p>
          </div>

          <div className="relative bg-card rounded-3xl shadow-soft border-2 border-accent/40 p-8 md:p-12 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />

            <div className="relative">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mt-4">
                Kit Llaveros Bíblicos
              </h3>
              <p className="text-center text-muted-foreground mt-2">
                50 moldes + bonos exclusivos
              </p>

              <div className="text-center my-8 py-6 border-y border-border/60">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-muted-foreground line-through text-xl">USD 19.90</span>
                  <span className="bg-accent/20 text-accent-foreground text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                    -50%
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mt-2">
                  <span className="font-display text-2xl font-bold text-accent">$</span>
                  <span className="font-display text-7xl md:text-8xl font-bold text-accent leading-none">
                    9.90
                  </span>
                  <span className="font-display text-xl text-muted-foreground">USD</span>
                </div>
                <div className="text-sm text-muted-foreground mt-3">
                  💳 Pago único · Sin suscripciones
                </div>
              </div>

              <div className="space-y-3 my-8">
                {[
                  <><b>50 moldes</b> de llaveros cristianos</>,
                  <>Personajes de la Biblia con <b>versículos</b></>,
                  <>Listos para <b>imprimir y armar</b></>,
                  <>Acceso <b>inmediato</b> al material</>,
                  <>Para uso personal o <b>comercial</b></>,
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent font-bold text-sm flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Bonos incluidos */}
              <div className="bg-gradient-to-br from-success/10 to-accent/5 border-2 border-dashed border-success/40 rounded-2xl p-5 my-8">
                <p className="font-display text-lg font-bold text-primary text-center mb-4">
                  🎁 Bonos incluidos GRATIS
                </p>
                <div className="space-y-2.5">
                  {[
                    { icon: "📘", title: "Guía Cómo Vender Llaveros Bíblicos", value: 17 },
                    { icon: "🧮", title: "Calculadora de Precio y Ganancia", value: 12 },
                    { icon: "📊", title: "Plantilla de Control de Ventas", value: 9 },
                    { icon: "💬", title: "Scripts de Venta para WhatsApp/Facebook", value: 15 },
                    { icon: "🎉", title: "Dinámicas con Llaveros para Grupos", value: 19 },
                  ].map((bonus, i) => (
                    <div key={i} className="flex items-center justify-between gap-3 text-sm">
                      <div className="flex items-center gap-2 text-foreground flex-1 min-w-0">
                        <span className="text-base flex-shrink-0">{bonus.icon}</span>
                        <span className="truncate">{bonus.title}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-muted-foreground line-through text-xs">USD {bonus.value}</span>
                        <span className="font-display font-extrabold text-success text-sm">GRATIS</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-success/30 text-center">
                  <p className="font-display font-bold text-primary text-base sm:text-lg leading-tight">
                    Hoy vas a pagar solo
                  </p>
                  <p className="font-display font-extrabold text-success text-3xl sm:text-4xl tracking-tight mt-1">
                    USD 9,90
                  </p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-gold-strong hover:brightness-110 text-primary-foreground text-lg font-bold rounded-full py-7 shadow-gold animate-pulse-gold transition-smooth"
              >
                <a href={CHECKOUT_URL}>¡QUIERO EL KIT AHORA!</a>
              </Button>

            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
            <span>🔒 Compra segura</span>
            <span>📧 Soporte por email</span>
            <span>⚡ Entrega instantánea</span>
          </div>
        </div>
      </section>


      {/* GUARANTEE */}
      <section className="py-20 md:py-28 container max-w-4xl">
        <div className="relative bg-card rounded-3xl shadow-soft border-2 border-accent/30 p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-sky opacity-40 pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-gold-strong shadow-gold mb-6 animate-pulse-gold">
              <span className="text-5xl md:text-6xl">🛡️</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary text-balance">
              7 días de garantía incondicional
            </h2>
            <p className="text-muted-foreground text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              Prueba el kit completo durante <b>7 días sin riesgo</b>. Si por cualquier motivo no estás 100% satisfecha, te devolvemos <b>todo tu dinero</b> — sin preguntas, sin burocracia y sin complicaciones.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto">
              {[
                { icon: "✅", title: "Sin riesgo", text: "Reembolso total garantizado" },
                { icon: "💬", title: "Sin preguntas", text: "Solo envíanos un email" },
                { icon: "⚡", title: "Sin demora", text: "Devolución rápida y simple" },
              ].map((item, i) => (
                <div key={i} className="bg-background/70 backdrop-blur rounded-2xl p-5 border border-border/60">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-display font-bold text-primary">{item.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.text}</div>
                </div>
              ))}
            </div>

            <p className="font-display italic text-primary text-lg mt-10">
              "El riesgo es nuestro. Tu satisfacción es la prioridad."
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Preguntas frecuentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-2xl px-6 shadow-card"
            >
              <AccordionTrigger className="font-display text-lg font-semibold text-left text-primary hover:no-underline py-5">
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
      <footer className="bg-primary text-primary-foreground/80 py-10">
        <div className="container text-center text-sm space-y-2">
          <p>Todos los derechos reservados © {new Date().getFullYear()}</p>
          <p className="text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-smooth">Política de Privacidad</a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-primary-foreground transition-smooth">Términos de Uso</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CountdownTimer } from "@/components/CountdownTimer";
import productoPreview from "@/assets/producto-preview.jpg";
import llavero1 from "@/assets/llavero-1.jpg";
import llavero2 from "@/assets/llavero-2.jpg";
import llavero3 from "@/assets/llavero-3.jpg";
import llavero4 from "@/assets/llavero-4.jpg";
import llavero5 from "@/assets/llavero-5.jpg";
import llavero6 from "@/assets/llavero-6.jpg";

const CHECKOUT_URL = "https://pay.cakto.com.br/9cw8k44_844198";

const Index = () => {
  const benefits = [
    "50 moldes de llaveros con personajes bíblicos",
    "Cada molde con su versículo incluido",
    "Archivo en PDF listo para imprimir en casa",
    "Ideal para regalar, decorar o revender",
    "Sin necesidad de experiencia — solo imprimir y armar",
  ];

  const audience = [
    { icon: "🙏", text: "Mujeres cristianas" },
    { icon: "🎁", text: "Quien quiere regalar" },
    { icon: "💰", text: "Quien quiere vender" },
    { icon: "✂️", text: "Amantes de las manualidades" },
    { icon: "⛪", text: "Iglesias y grupos" },
    { icon: "👩‍🏫", text: "Maestras de escuela dominical" },
  ];

  const testimonials = [
    { name: "Ana Paula", city: "Ciudad de México, MX", text: "¡Me encantaron los moldes! Súper fáciles de armar y quedaron preciosos. ¡Ya regalé a toda mi familia de la iglesia!" },
    { name: "Fernanda López", city: "Bogotá, CO", text: "Empecé a vender los llaveros en la feria de la iglesia y recuperé la inversión el primer día." },
    { name: "Mariana Santos", city: "Lima, PE", text: "El video tutorial me ayudó muchísimo. Nunca había hecho manualidades y armé todo perfecto." },
    { name: "Patricia Olivera", city: "Buenos Aires, AR", text: "Los versículos en los llaveros son una bendición. ¡Los niños de la escuela bíblica los amaron!" },
    { name: "Juliana Costa", city: "Madrid, ES", text: "Material de calidad increíble. Imprimí en casa y quedó profesional. Súper recomendado." },
    { name: "Camila Rodríguez", city: "Quito, EC", text: "Entrega instantánea y moldes maravillosos. ¡Ya estoy esperando nuevos kits!" },
  ];

  const faqs = [
    { q: "¿Cómo voy a recibir el material?", a: "Recibirás el archivo PDF directamente en tu correo electrónico inmediatamente después de confirmar el pago. Acceso 100% digital e instantáneo." },
    { q: "¿Necesito alguna habilidad especial?", a: "¡Para nada! Solo necesitas imprimir, recortar y armar. Incluimos un video tutorial paso a paso para que sea aún más fácil." },
    { q: "¿Puedo vender los llaveros que arme?", a: "¡Sí! Tienes total libertad para vender los llaveros que crees con los moldes. Muchas de nuestras clientas ya generan ingresos extra con ellos." },
    { q: "¿El acceso es mensual?", a: "No, es un pago único. Una vez compras, el material es tuyo para siempre. Sin suscripciones ni cobros recurrentes." },
  ];

  const llaveros = [llavero1, llavero2, llavero3, llavero4, llavero5];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* HERO */}
      <header className="bg-gradient-sky relative">
        <div className="container py-16 md:py-24 text-center max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary leading-[1.05] text-balance animate-fade-up">
            Moldes de Llaveros Bíblicos
            <span className="block italic text-secondary mt-2">para Imprimir y Armar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            50 personajes de la Biblia con versículos — listos para usar, regalar o vender.
          </p>

          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold-strong hover:brightness-110 text-primary-foreground text-lg md:text-xl font-bold rounded-full px-10 py-7 shadow-gold animate-pulse-gold transition-smooth"
            >
              <a href={CHECKOUT_URL}>🔥 QUIERO MI KIT AHORA</a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">⚡ Acceso inmediato después del pago</p>
          </div>

          <div className="mt-12 md:mt-16 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <img
              src={productoPreview}
              alt="Vista previa del kit de 50 moldes de llaveros bíblicos"
              width={1200}
              height={1500}
              className="w-full rounded-2xl shadow-soft"
            />
          </div>
        </div>
      </header>

      {/* WHAT YOU GET */}
      <section className="py-20 md:py-28 container max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary text-balance">
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
              <span className="text-accent text-xl font-bold flex-shrink-0">✦</span>
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
      <section className="bg-gradient-sky py-20 md:py-28">
        <div className="container max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary text-balance">
              ¿Para quién es?
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">Perfecto para quien quiere crear con propósito</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audience.map((a, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 flex items-center gap-4 shadow-card border border-border/60 hover:shadow-soft hover:-translate-y-1 transition-smooth"
              >
                <div className="text-4xl">{a.icon}</div>
                <p className="font-display text-xl font-semibold text-primary">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 container max-w-6xl">
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
                <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
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
            <p className="inline-block bg-accent/15 text-accent-foreground font-semibold mt-4 px-4 py-1.5 rounded-full text-sm">
              ⚡ Oferta por tiempo limitado
            </p>
            <p className="text-muted-foreground mt-6">Esta oferta expira en:</p>
            <div className="mt-4">
              <CountdownTimer />
            </div>
          </div>

          <div className="relative bg-card rounded-3xl shadow-soft border-2 border-accent/30 p-8 md:p-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold-strong text-primary-foreground px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-card">
              ⭐ Más vendido
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mt-2">
              Kit Llaveros Bíblicos
            </h3>

            <div className="text-center my-6">
              <div className="text-muted-foreground line-through text-lg">USD 14.90</div>
              <div className="font-display text-6xl md:text-7xl font-bold text-accent mt-1">
                $6.50
              </div>
              <div className="text-sm text-muted-foreground mt-2">Pago único · Acceso inmediato</div>
            </div>

            <div className="space-y-3 my-8">
              {[
                <><b>50 moldes</b> de llaveros cristianos</>,
                <>Personajes de la Biblia con <b>versículos</b></>,
                <>Listos para <b>imprimir y armar</b></>,
                <><b>Video tutorial</b> paso a paso</>,
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-foreground">
                  <span className="text-accent font-bold text-lg">✦</span>
                  <span>{item}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 bg-accent/10 rounded-xl p-3 mt-4">
                <span className="text-2xl">🎁</span>
                <span className="font-semibold text-foreground"><b>+3 regalos</b> sorpresa de obsequio</span>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-gold-strong hover:brightness-110 text-primary-foreground text-lg font-bold rounded-full py-7 shadow-gold animate-pulse-gold transition-smooth"
            >
              <a href={CHECKOUT_URL}>🛒 ¡QUIERO EL KIT AHORA!</a>
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              ✅ Compra 100% segura · Entrega digital instantánea
            </p>
          </div>

          {/* Guarantee */}
          <div className="mt-8 bg-card rounded-2xl p-6 border border-border shadow-card flex items-start gap-5">
            <div className="text-5xl">🛡️</div>
            <div>
              <h4 className="font-display text-xl font-bold text-primary">
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

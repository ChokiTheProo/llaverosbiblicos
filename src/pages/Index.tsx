import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Zap,
  Gift,
  Sparkles,
  Clock,
  Printer,
  Scissors,
  BookOpen,
  Heart,
  Church,
  Users,
  ShoppingBag,
  Palette,
  FileText,
  Layout,
  Calculator,
  MessageCircle,
  Gamepad2,
  CheckCircle2,
  Lock,
  Globe,
  Shield,
  Infinity as InfinityIcon,
  ShoppingCart,
  ArrowRight,
  Star,
  Check,
} from "lucide-react";

import productoPreview from "@/assets/producto-preview.webp";
import llavero1 from "@/assets/llavero-1.webp";
import llavero2 from "@/assets/llavero-2.webp";
import llavero3 from "@/assets/llavero-3.webp";
import llavero4 from "@/assets/llavero-4.webp";
import llavero5 from "@/assets/llavero-5.webp";
import llavero6 from "@/assets/llavero-6.webp";
import avatar1 from "@/assets/avatar-1.webp";
import avatar2 from "@/assets/avatar-2.webp";
import avatar3 from "@/assets/avatar-3.webp";
import avatar4 from "@/assets/avatar-4.webp";

const CHECKOUT_URL = "https://pay.hotmart.com/T105491862G?checkoutMode=10";

const scrollToContent = () => {
  document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
};

/* ---------- HERO ---------- */
const HeroSection = () => (
  <section className="min-h-[85vh] flex items-center bg-background py-6 md:py-10">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center space-y-3 md:space-y-4">
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-2 text-balance">
          Pack de <span className="text-accent">50 Llaveros Bíblicos</span> — Descarga, Imprime y Listo
        </h1>

        <div className="flex justify-center">
          <div className="relative inline-block">
            <img
              src={productoPreview}
              alt="Pack de 50 Llaveros Bíblicos"
              width={1200}
              height={1500}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full max-w-[220px] sm:max-w-xs md:max-w-sm h-auto rounded-lg shadow-soft"
            />
          </div>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          50 personajes bíblicos con versículos + bonos, listos en PDF para imprimir, regalar o vender desde cualquier dispositivo.
        </p>

        <Button
          size="lg"
          onClick={scrollToContent}
          className="animate-pulse-gold w-full sm:w-auto bg-gradient-gold-strong hover:brightness-110 text-primary-foreground font-bold text-base sm:text-lg px-8 gap-2 rounded-full"
        >
          QUIERO GARANTIZAR AHORA
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  </section>
);

/* ---------- BENEFITS ---------- */
const benefits = [
  { icon: Zap, title: "Listos para imprimir", description: "Sin diseño, sin programas. Abre el PDF y manda a imprimir." },
  { icon: Sparkles, title: "Versículos incluidos", description: "Cada llavero ya viene con su personaje y versículo bíblico." },
  { icon: Gift, title: "Regala con propósito", description: "Detalles únicos para familia, iglesia o eventos cristianos." },
  { icon: Clock, title: "Ahorra horas de trabajo", description: "Todo organizado y listo. Solo recortar y armar." },
  { icon: ShoppingBag, title: "Revende y genera ganancias", description: "Imprime, arma y vende en tu iglesia, ferias o redes — con bajo costo y alto margen." },
];

const BenefitsSection = () => (
  <section className="py-5 md:py-7 bg-muted/30" id="benefits">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-5">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-1">LA SOLUCIÓN</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary text-balance">
          Imagina llaveros bíblicos hechos en casa, listos para bendecir
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <div
            key={i}
            className={`text-center space-y-1.5 sm:space-y-2 ${
              i === benefits.length - 1 && benefits.length % 2 !== 0
                ? "col-span-2 lg:col-span-1"
                : ""
            }`}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-xl bg-primary flex items-center justify-center shadow-md">
              <b.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- SHOWCASE ---------- */
const categories = [
  { icon: BookOpen, title: "Personajes del Antiguo Testamento", description: "Moisés, David, Noé, Abraham y más, cada uno con su versículo." },
  { icon: Heart, title: "Personajes del Nuevo Testamento", description: "Jesús, María, los apóstoles y figuras inspiradoras de la fe." },
  { icon: Sparkles, title: "Versículos de fe y esperanza", description: "Mensajes bíblicos que acompañan cada llavero." },
  { icon: Printer, title: "Diseños listos para imprimir", description: "Archivos PDF en alta calidad, listos para imprimir en casa." },
  { icon: Scissors, title: "Fáciles de recortar y armar", description: "Líneas claras de corte. Cualquier persona puede hacerlo." },
  { icon: Palette, title: "Colores vibrantes y bíblicos", description: "Arte profesional pensado para iluminar cada detalle." },
  { icon: ShoppingBag, title: "Ideales para vender", description: "Crea tu propio emprendimiento cristiano con bajo costo." },
  { icon: Gift, title: "Regalos con propósito", description: "Perfectos para iglesia, escuela bíblica, bautizos y eventos." },
];

const ShowcaseSection = () => (
  <section className="py-5 md:py-7 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-4xl mx-auto space-y-3">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent">Contenido del material</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
          ¿Qué vas a encontrar?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Dentro del pack encontrarás 50 moldes organizados por categoría, listos para imprimir y armar.
        </p>

        <Card className="p-2.5 sm:p-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {categories.map((c, i) => (
              <div key={i} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-md hover:bg-muted/50 transition-smooth text-left">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <c.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                </div>
                <div>
                  <span className="text-foreground text-xs sm:text-sm font-semibold block">{c.title}</span>
                  <span className="text-muted-foreground text-xs hidden sm:block">{c.description}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Button
          size="lg"
          onClick={scrollToContent}
          className="animate-pulse-gold w-full sm:w-auto bg-gradient-gold-strong hover:brightness-110 text-primary-foreground font-bold text-base sm:text-lg px-8 gap-2 rounded-full"
        >
          QUIERO GARANTIZAR AHORA
          <ArrowRight className="w-5 h-5" />
        </Button>

        {/* Galeria de llaveros */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 pt-4">
          {[llavero1, llavero2, llavero3, llavero4, llavero5, llavero6].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Llavero bíblico ejemplo ${i + 1}`}
              loading="lazy"
              width={600}
              height={600}
              decoding="async"
              className="w-full aspect-square object-cover rounded-xl shadow-card"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- WHAT YOU RECEIVE ---------- */
const mainItems = [
  "50 moldes en PDF de alta calidad",
  "Personajes bíblicos con versículos",
  "Listos para imprimir en casa",
  "Líneas de corte fáciles de seguir",
  "Para uso personal o comercial",
  "Adaptable a cualquier impresora",
];

const bonuses = [
  { icon: BookOpen, number: "BONO #1", title: "Guía Cómo Vender Llaveros Bíblicos", oldPrice: "$17.00", newPrice: "HOY GRATIS" },
  { icon: Calculator, number: "BONO #2", title: "Calculadora de Precio y Ganancia", oldPrice: "$12.00", newPrice: "HOY GRATIS" },
  { icon: Layout, number: "BONO #3", title: "Plantilla de Control de Ventas", oldPrice: "$9.00", newPrice: "HOY GRATIS" },
  { icon: MessageCircle, number: "BONO #4", title: "Scripts de Venta para WhatsApp y Facebook", oldPrice: "$15.00", newPrice: "HOY GRATIS" },
  { icon: Gamepad2, number: "BONO #5", title: "Dinámicas con Llaveros para Grupos", oldPrice: "$19.00", newPrice: "HOY GRATIS" },
];

const WhatYouReceiveSection = () => (
  <section className="py-5 md:py-7 bg-muted/30" id="what-you-receive">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-5">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-2">
          ¿Qué vas a recibir?
        </h2>
        <p className="text-sm text-muted-foreground">Todo esto con un solo acceso:</p>
      </div>

      <div className="max-w-5xl mx-auto space-y-5">
        <Card className="p-3.5 sm:p-5 md:p-6">
          <div className="flex flex-row gap-4 items-start">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-primary flex-shrink-0 shadow-md">
              <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-0.5">PRODUCTO PRINCIPAL</p>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                Pack de 50 Llaveros Bíblicos
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3">
                Moldes listos para imprimir, recortar y armar — con personajes y versículos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {mainItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div>
          <div className="text-center mb-4">
            <span className="inline-block bg-accent/20 text-accent-foreground text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              🎁 Bonos exclusivos
            </span>
            <h3 className="mt-3 font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary">
              BONOS INCLUIDOS <span className="text-success">GRATIS</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-4">
            {bonuses.map((bonus, i) => (
              <Card key={i} className="p-4 sm:p-5 hover:shadow-soft transition-smooth">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <bonus.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-0.5">{bonus.number}</p>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1">{bonus.title}</h4>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-muted-foreground line-through">{bonus.oldPrice}</span>
                      <span className="text-xs font-bold text-success">{bonus.newPrice}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="block mt-6">
            <Button
              size="lg"
              className="w-full sm:w-auto mx-auto flex items-center justify-center bg-gradient-gold-strong hover:brightness-110 text-primary-foreground font-bold text-base px-8 gap-2 rounded-full animate-pulse-gold"
            >
              <ShoppingCart className="w-5 h-5" />
              GARANTIR AGORA
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- TARGET AUDIENCE ---------- */
const audiences = [
  { icon: Heart, title: "Mujeres y hombres cristianos", description: "Que quieren crear y bendecir con propósito." },
  { icon: ShoppingBag, title: "Emprendedores", description: "Que desean iniciar un negocio cristiano de bajo costo." },
  { icon: Church, title: "Iglesias y ministerios", description: "Para regalar en eventos, grupos y escuela bíblica." },
  { icon: Users, title: "Familias y maestros", description: "Para enseñar la Palabra a niños de forma creativa." },
];

const TargetAudienceSection = () => (
  <section className="py-5 md:py-7 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-5">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-1">¿Para quién es este material?</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {audiences.map((a, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-2xl bg-accent/20 border-2 border-accent/40 flex items-center justify-center">
                <a.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-1">{a.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { name: "Ana Paula", role: "Ciudad de México, MX", avatar: avatar1, initials: "AP", quote: "¡Me encantaron los moldes! Súper fáciles de armar y quedaron preciosos. ¡Ya regalé a toda mi familia de la iglesia!" },
  { name: "Fernanda López", role: "Bogotá, CO", avatar: avatar2, initials: "FL", quote: "Empecé a vender los llaveros en la feria de la iglesia y recuperé la inversión el primer día." },
  { name: "Mariana Santos", role: "Lima, PE", avatar: avatar3, initials: "MS", quote: "El material me ayudó muchísimo. Nunca había hecho manualidades y armé todo perfecto." },
  { name: "Patricia Olivera", role: "Buenos Aires, AR", avatar: avatar4, initials: "PO", quote: "Los versículos en los llaveros son una bendición. ¡Los niños de la escuela bíblica los amaron!" },
];

const TestimonialsSection = () => (
  <section className="py-5 md:py-7 bg-background" id="testimonials">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-5">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
          Lo que dicen quienes ya lo usan
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <Card key={i} className="p-3.5 sm:p-4 hover:shadow-soft transition-smooth">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground italic leading-relaxed text-sm sm:text-base">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-1">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={88}
                  height={88}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-accent/40"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- CONTENT (PRICING) ---------- */
const items = [
  { title: "Pack de 50 Llaveros Bíblicos", value: "$39.90", icon: CheckCircle2 },
  { title: "Bono #1 — Guía Cómo Vender Llaveros Bíblicos", value: "$17.00", icon: CheckCircle2 },
  { title: "Bono #2 — Calculadora de Precio y Ganancia", value: "$12.00", icon: CheckCircle2 },
  { title: "Bono #3 — Plantilla de Control de Ventas", value: "$9.00", icon: CheckCircle2 },
  { title: "Bono #4 — Scripts de Venta para WhatsApp/Facebook", value: "$15.00", icon: CheckCircle2 },
  { title: "Bono #5 — Dinámicas con Llaveros para Grupos", value: "$19.00", icon: CheckCircle2 },
  { title: "Garantía de satisfacción de 7 días", value: null, icon: Shield },
  { title: "Acceso vitalicio al material", value: null, icon: InfinityIcon },
  { title: "Actualizaciones gratuitas", value: null, icon: Sparkles },
  { title: "Acceso inmediato", value: null, icon: Zap },
];

const ContentSection = () => (
  <section className="py-6 md:py-10 bg-muted/30" id="content">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-block bg-destructive text-destructive-foreground text-xs sm:text-sm font-bold px-5 py-2 rounded-full uppercase tracking-wider mb-4 shadow-md animate-pulse-gold">
          🔥 Oferta exclusiva — ¡Solo hoy!
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4 text-balance">
          Accede hoy por un precio increíble
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="p-5 md:p-7 border-2 border-accent">
          <div className="flex justify-center mb-6">
            <img
              src={productoPreview}
              alt="Pack de 50 Llaveros Bíblicos"
              loading="lazy"
              width={1200}
              height={1500}
              className="max-w-full sm:max-w-xs h-auto rounded-md"
            />
          </div>

          <p className="text-center text-sm font-semibold text-muted-foreground mb-4">
            Recapitulando lo que vas a recibir:
          </p>

          <div className="space-y-3 mb-6">
            {items.map((item, i) => (
              <div key={i} className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <item.icon className="w-5 h-5 text-success flex-shrink-0" />
                  <p className="text-base md:text-lg font-medium text-foreground">{item.title}</p>
                </div>
                {item.value && (
                  <p className="text-sm font-bold text-destructive line-through mt-1 ml-7">
                    VALORADO EN {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="w-full bg-gradient-gold-strong hover:brightness-110 text-primary-foreground text-base font-bold mb-6 gap-2 rounded-full py-6 animate-pulse-gold"
          >
            <a href={CHECKOUT_URL}>
              <ShoppingCart className="w-5 h-5" />
              QUIERO GARANTIZAR AHORA
            </a>
          </Button>

          <div className="pt-4 mb-6">
            <p className="text-center text-lg md:text-xl text-destructive line-through mb-2">$111.90 USD</p>
            <p className="text-center text-xl md:text-2xl font-semibold text-foreground mb-1">Todo esto por apenas</p>
            <p className="text-center text-4xl md:text-5xl font-bold text-success mb-3">$9.90 USD</p>
            <p className="text-center text-sm text-muted-foreground mb-6">Pago único · Acceso inmediato</p>
          </div>

          <Button
            asChild
            size="lg"
            className="animate-pulse-gold w-full bg-gradient-gold-strong hover:brightness-110 text-primary-foreground text-base md:text-lg font-bold mb-3 gap-2 rounded-full py-7"
          >
            <a href={CHECKOUT_URL}>
              <ShoppingCart className="w-5 h-5" />
              QUIERO GARANTIZAR AHORA
            </a>
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Lock className="w-4 h-4" />
              <span>Pago seguro</span>
            </div>
            <span>|</span>
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4" />
              <span>Acceso inmediato</span>
            </div>
            <span>|</span>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span>Pago en tu moneda local</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

/* ---------- GUARANTEE + FAQ ---------- */
const faqs = [
  { question: "¿Cómo recibo el material?", answer: "Recibes acceso inmediato al PDF tras completar el pago, directamente por email." },
  { question: "¿Es físico o digital?", answer: "Es 100% digital. Puedes acceder e imprimir desde cualquier dispositivo." },
  { question: "¿Necesito experiencia para armar los llaveros?", answer: "No. Solo necesitas imprimir, recortar y armar. Es muy sencillo." },
  { question: "¿Puedo vender los llaveros que arme?", answer: "¡Sí! Tienes total libertad para vender los llaveros creados con los moldes." },
  { question: "¿Puedo pedir reembolso?", answer: "Sí. Tienes 7 días de garantía. Si no estás satisfecho, te devolvemos el 100% de tu dinero, sin preguntas." },
];

const GuaranteeSection = () => (
  <section className="py-8 md:py-12 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-balance">
            Garantía Incondicional de 7 Días
          </h2>
        </div>

        <Card className="p-6 md:p-10 mb-12 bg-success/10 border-2 border-success/30 shadow-soft">
          <div className="flex flex-col items-center text-center gap-5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-success/20 flex items-center justify-center shadow-md animate-pulse-gold">
              <span className="text-6xl sm:text-7xl" role="img" aria-label="Escudo de garantía">🛡️</span>
            </div>
            <p className="text-foreground leading-relaxed max-w-2xl">
              Creemos tanto en el poder de este Pack de 50 Llaveros Bíblicos que te ofrecemos una garantía de
              <b> 7 días sin riesgo</b>.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm sm:text-base">
              Si por cualquier motivo — cualquiera mismo — no estás 100% satisfecho con el material, solo
              envíanos un mensaje y te devolvemos el <b>100% de tu dinero</b>.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2">
              {[
                { icon: "✅", text: "Sin letras pequeñas" },
                { icon: "💬", text: "Sin enredos" },
                { icon: "🤝", text: "Sin preguntas incómodas" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-semibold text-success">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <p className="font-display italic text-primary text-base sm:text-lg pt-2 flex items-center gap-2">
              <span className="text-2xl">💰</span>
              ¡O amas la experiencia, o recibes tu dinero de vuelta!
            </p>
          </div>
        </Card>

        <div className="text-center mb-6">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
            Preguntas frecuentes
          </h3>
          <p className="text-sm text-muted-foreground">Resuelve todas tus dudas antes de empezar</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i} className="p-5 sm:p-6 hover:shadow-soft transition-smooth">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-primary mb-1">{faq.question}</p>
                  <p className="text-muted-foreground text-sm sm:text-base">{faq.answer}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- FINAL CTA ---------- */
const FinalCTASection = () => (
  <section className="py-6 md:py-8 bg-primary">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground">
          ¡Comienza hoy mismo!
        </h2>
        <p className="text-base sm:text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
          No pierdas más tiempo — descarga, imprime y empieza a crear tus llaveros bíblicos hoy.
        </p>
        <div className="flex flex-col items-center gap-2">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-background text-primary hover:bg-background/90 font-bold text-base sm:text-lg px-8 shadow-xl gap-2 rounded-full"
          >
            <a href={CHECKOUT_URL} onClick={scrollToContent}>
              <ShoppingCart className="w-5 h-5" />
              QUIERO GARANTIZAR AHORA
            </a>
          </Button>
          <span className="text-primary-foreground font-semibold text-lg">$9.90 USD</span>
        </div>
        <p className="text-primary-foreground/70 text-xs sm:text-sm">
          Acceso inmediato tras la compra · Material 100% digital · Garantía 7 días
        </p>
      </div>
    </div>
  </section>
);

/* ---------- PAGE ---------- */
const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <HeroSection />
    <TargetAudienceSection />
    <ShowcaseSection />
    <BenefitsSection />
    <WhatYouReceiveSection />
    <TestimonialsSection />
    <ContentSection />
    <GuaranteeSection />
    <FinalCTASection />

    <footer className="bg-primary text-primary-foreground/80 py-8">
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

export default Index;

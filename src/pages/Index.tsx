import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { MouseEvent } from "react";
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
  Crown,
  Award,
  Sword,
  Download,
  HandHeart,
  BadgeCheck,
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
// TODO: substituir pelo link de checkout do kit completo ($27.90)
const CHECKOUT_URL_PREMIUM = "https://pay.hotmart.com/T105491862G?checkoutMode=10&offer=premium";

// UTMify CTA tracking — dispara o nome do evento (texto exato do botão) para o pixel UTMify
const trackCta = (eventName: string) => {
  try {
    const w = window as any;
    if (typeof w.utmify === "function") {
      w.utmify("track", eventName);
    }
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: eventName, cta_text: eventName });
    window.dispatchEvent(new CustomEvent("utmify:track", { detail: { event: eventName } }));
  } catch (_) {
    /* noop */
  }
};

const openCheckoutInNewTab = (eventName: string) => (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  trackCta(eventName);
  window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
};

const scrollToContent = () => {
  const el = document.getElementById("content");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ---------- URGENCY TOPBAR ---------- */
const UrgencyTopbar = () => (
  <div
    className="w-full text-center text-xs sm:text-sm font-medium px-3 py-2 leading-snug"
    style={{ backgroundColor: "#1F1A14", color: "#FBF7EE" }}
  >
    <span className="inline-flex items-center gap-1.5 flex-wrap justify-center">
      <span aria-hidden>⏰</span>
      <span className="font-semibold uppercase tracking-wider">OFERTA DE LANZAMIENTO</span>
      <span>— Solo esta semana por</span>
      <span className="font-bold" style={{ color: "#C9A24A" }}>$9.90 USD</span>
      <span className="opacity-80">(precio sube a $19.90 el próximo lunes)</span>
    </span>
  </div>
);

/* ---------- HERO ---------- */
const HeroSection = () => (
  <section className="min-h-[85vh] flex items-center bg-background py-6 md:py-10">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center space-y-3 md:space-y-4">
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-2 text-balance">
          50 Llaveros Bíblicos para Imprimir, Armar y Regalar — <span className="text-accent">Lleva la Palabra de Dios a Cada Familia</span>
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
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-soft"
            />
          </div>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Moldes listos para imprimir en casa. Una bendición que cabe en el bolsillo, perfecta para escuela dominical, regalos cristianos o para empezar a vender en tu iglesia.
        </p>

        <div className="flex flex-col items-center gap-1.5">
          <Button
            size="lg"
            onClick={() => { trackCta("Hero CTA $9.90"); scrollToContent(); }}
            className="shiny-cta animate-pulse-gold w-full sm:w-auto bg-gradient-gold-strong hover:brightness-110 text-primary-foreground font-bold text-base sm:text-lg px-8 gap-2 rounded-full"
          >
            Quiero el Kit por $9.90
            <ArrowRight className="w-5 h-5" />
          </Button>
          <span className="text-[12px] text-muted-foreground">Oferta válida solo esta semana</span>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- BENEFITS ---------- */
const benefits = [
  { icon: Download, title: "Descarga inmediata", description: "Recibes el PDF en tu email apenas confirmes el pago. Sin esperar envíos, sin costos extra." },
  { icon: Printer, title: "Imprime cuantos quieras", description: "Un solo pago, uso ilimitado. Imprime para tu familia, tu iglesia o para vender." },
  { icon: Scissors, title: "Fácil de armar", description: "Solo necesitas tijera, papel y una argolla. Listo en menos de 5 minutos por llavero." },
  { icon: ShoppingBag, title: "Ideal para vender", description: "Cada llavero te cuesta centavos. Véndelos en tu iglesia, ferias o por WhatsApp." },
  { icon: BookOpen, title: "Con versículos reales", description: "Cada personaje viene con un versículo cuidadosamente elegido — la Palabra acompaña el regalo." },
];

const BenefitsSection = () => (
  <section className="py-5 md:py-7 bg-muted/30" id="benefits">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-5">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-1">LA SOLUCIÓN</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary text-balance">
          Un kit completo. Una bendición lista para imprimir.
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
            <div className="icon-tile w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-2xl flex items-center justify-center">
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
  { icon: Crown, title: "Jesús, María y José", description: "El corazón del kit, con versículos clásicos." },
  { icon: Users, title: "Los 12 apóstoles", description: "Pedro, Juan, Mateo y todos los discípulos con su versículo." },
  { icon: Sword, title: "Héroes del Antiguo Testamento", description: "Moisés, David, Noé, Abraham, Daniel, Sansón y más." },
  { icon: Sparkles, title: "Mujeres de la Biblia", description: "Ester, Rut, Débora, Ana — modelos de fe para las niñas." },
  { icon: Gift, title: "Símbolos cristianos", description: "El arca, el arco iris, el pez, la corona — clásicos atemporales." },
  { icon: FileText, title: "Diseños listos para imprimir", description: "Archivos PDF en alta calidad, listos para imprimir en casa." },
  { icon: Scissors, title: "Fáciles de recortar y armar", description: "Líneas claras de corte. Cualquier persona puede hacerlo." },
  { icon: Palette, title: "Colores vibrantes", description: "Arte profesional pensado para iluminar cada detalle." },
];

const ShowcaseSection = () => (
  <section className="py-5 md:py-7 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-4xl mx-auto space-y-3">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent">QUÉ INCLUYE</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
          50 personajes bíblicos — cada uno con su versículo
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Del Antiguo al Nuevo Testamento. Todos los personajes que tus hijos, alumnos o clientes aman.
        </p>

        <Card className="p-2.5 sm:p-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {categories.map((c, i) => (
              <div key={i} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-md hover:bg-muted/50 transition-smooth text-left">
                <div className="icon-tile-soft w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
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

        <div className="flex flex-col items-center gap-1.5">
          <Button
            size="lg"
            onClick={() => { trackCta("Showcase CTA $9.90"); scrollToContent(); }}
            className="shiny-cta animate-pulse-gold w-full sm:w-auto bg-gradient-gold-strong hover:brightness-110 text-primary-foreground font-bold text-base sm:text-lg px-8 gap-2 rounded-full"
          >
            Quiero el Kit por $9.90
            <ArrowRight className="w-5 h-5" />
          </Button>
          <span className="text-[12px] text-muted-foreground">Antes que suba el precio el lunes</span>
        </div>

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
  "50 personajes bíblicos con versículo",
  "Archivo PDF de alta calidad",
  "Imprime cuantas veces quieras",
  "Líneas de corte fáciles de seguir",
  "Licencia para uso personal o comercial",
  "Compatible con cualquier impresora",
];

const bonuses = [
  { icon: Printer, number: "BONO 01", title: "Guía de Impresión: ajustes y papel ideal", oldPrice: "$9.00", newPrice: "HOY GRATIS" },
  { icon: BookOpen, number: "BONO 02", title: "Plan de Clase Dominical: 4 clases listas con los llaveros", oldPrice: "$12.00", newPrice: "HOY GRATIS" },
  { icon: Gift, number: "BONO 03", title: "Tarjetas para Regalar: mini-cards con mensajes", oldPrice: "$7.00", newPrice: "HOY GRATIS" },
  { icon: Layout, number: "BONO 04", title: "Plantillas para Vender: posts y precios sugeridos", oldPrice: "$12.00", newPrice: "HOY GRATIS" },
  { icon: InfinityIcon, number: "BONO 05", title: "Actualizaciones de por vida: nuevos personajes sin costo", oldPrice: "$7.00", newPrice: "HOY GRATIS" },
];

const WhatYouReceiveSection = () => (
  <section className="py-5 md:py-7 bg-muted/30" id="what-you-receive">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-5">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-1">HOY CON BONO</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-2">
          5 Bonos GRATIS al comprar hoy
        </h2>
        <p className="text-sm text-muted-foreground">Al confirmar tu compra, también recibes estos materiales extras — pensados para que aproveches el kit al máximo.</p>
      </div>

      <div className="max-w-5xl mx-auto space-y-5">
        <Card className="p-3.5 sm:p-5 md:p-6">
          <div className="flex flex-row gap-4 items-start">
            <div className="icon-tile flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex-shrink-0">
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
              <Card key={i} className="p-4 sm:p-5 hover:shadow-soft transition-smooth border-2">
                <div className="flex items-start gap-4">
                  <div className="icon-tile w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    <bonus.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent-foreground" strokeWidth={2.25} style={{ color: 'hsl(40 90% 75%)' }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-extrabold uppercase tracking-widest text-accent mb-1">{bonus.number}</p>
                    <h4 className="text-base sm:text-lg font-bold text-primary mb-1.5 leading-snug">{bonus.title}</h4>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm text-muted-foreground line-through">{bonus.oldPrice}</span>
                      <span className="text-sm font-extrabold text-success">{bonus.newPrice}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button
              size="lg"
              onClick={() => { trackCta("Bonus CTA $9.90"); scrollToContent(); }}
              className="w-full sm:w-auto mx-auto flex items-center justify-center bg-gradient-gold-strong hover:brightness-110 text-primary-foreground font-bold text-base px-8 gap-2 rounded-full shiny-cta animate-pulse-gold"
            >
              Quiero el Kit por $9.90
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- TARGET AUDIENCE ---------- */
const audiences = [
  { icon: HandHeart, title: "Padres y madres cristianos", description: "Una forma linda y divertida de enseñar la Palabra en casa, sin pantallas." },
  { icon: BookOpen, title: "Maestros de escuela dominical", description: "Actividad lista para usar, sin perder horas preparando material." },
  { icon: Church, title: "Líderes de iglesia y ministerios", description: "Regalos significativos para eventos, bautizos, retiros y campañas." },
  { icon: ShoppingBag, title: "Emprendedores cristianos", description: "Producto listo para revender, con margen alto, bajo costo y demanda real." },
];

const TargetAudienceSection = () => (
  <section className="py-5 md:py-7 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-5">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-1">PARA QUIÉN ES</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary text-balance">
          Hecho para quien vive, enseña y comparte la fe
        </h2>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Una herramienta pensada para familias, líderes y emprendedores que quieren llevar la Palabra de Dios a más personas — en casa, en la iglesia o en su negocio.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {audiences.map((a, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="icon-tile-soft w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-2xl flex items-center justify-center">
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
  {
    name: "María R.",
    role: "México · Mamá de 3",
    avatar: avatar1,
    quote:
      "Compré el kit pensando en mis hijos, pero terminé regalando a toda mi célula. Los niños quedaron encantados con los versículos. Vale cada centavo.",
  },
  {
    name: "Jésica S.",
    role: "Colombia · Maestra de escuela dominical",
    avatar: avatar2,
    quote:
      "Soy maestra de escuela dominical y este kit me salvó. Los niños se llevan su llavero a casa y los papás me agradecen. Excelente material.",
  },
  {
    name: "Carla L.",
    role: "Argentina · Emprendedora cristiana",
    avatar: avatar3,
    quote:
      "Imprimí 30 llaveros y los compartí con familias de mi iglesia. Las respuestas fueron increíbles. Ahora es mi pequeño ministerio creativo.",
  },
];

const TestimonialsSection = () => (
  <section className="py-5 md:py-7 bg-background" id="testimonials">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-5">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
          Lo que dicen las familias
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <Card key={i} className="p-4 sm:p-5 hover:shadow-soft transition-smooth">
            <div className="flex flex-col items-center text-center space-y-3">
              <img
                src={t.avatar}
                alt={t.name}
                loading="lazy"
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover ring-2 ring-accent/40"
              />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground italic leading-relaxed text-sm sm:text-base">"{t.quote}"</p>
              <div>
                <p className="font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
                <p className="text-[11px] font-semibold mt-1" style={{ color: "#2F7D4F" }}>
                  ✓ Compra verificada
                </p>
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
  { title: "Kit con 50 llaveros bíblicos (PDF imprimible)", value: "$39.90", icon: CheckCircle2 },
  { title: "Bono 01 — Guía de impresión", value: "$9.00", icon: CheckCircle2 },
  { title: "Bono 02 — Plan de clase dominical", value: "$12.00", icon: CheckCircle2 },
  { title: "Bono 03 — Tarjetas para regalar", value: "$7.00", icon: CheckCircle2 },
  { title: "Bono 04 — Plantillas para vender", value: "$12.00", icon: CheckCircle2 },
  { title: "Bono 05 — Actualizaciones de por vida", value: "$7.00", icon: CheckCircle2 },
  { title: "Garantía total de 7 días", value: null, icon: Shield },
  { title: "Acceso de por vida al material", value: null, icon: InfinityIcon },
  { title: "Actualizaciones gratuitas", value: null, icon: Sparkles },
  { title: "Acceso inmediato", value: null, icon: Zap },
];

const ContentSection = () => (
  <section className="py-4 md:py-8 bg-muted/30" id="content">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-4 md:mb-6">
        <div className="inline-block bg-destructive text-destructive-foreground text-xs sm:text-sm font-bold px-5 py-2 rounded-full uppercase tracking-wider mb-3 shadow-md animate-pulse-gold">
          OFERTA DE LANZAMIENTO
        </div>
        <h2 className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-primary mb-2 text-balance">
          Empieza hoy a bendecir con la Palabra
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="p-4 md:p-6 border-2 border-accent">
          <div className="flex justify-center mb-3 md:mb-5">
            <img
              src={productoPreview}
              alt="Pack de 50 Llaveros Bíblicos"
              loading="lazy"
              width={1200}
              height={1500}
              className="max-w-[180px] sm:max-w-xs h-auto rounded-md"
            />
          </div>

          <p className="text-center text-sm font-semibold text-muted-foreground mb-3">
            Recapitulando lo que vas a recibir:
          </p>

          <div className="space-y-2 mb-4">
            {items.map((item, i) => (
              <div key={i} className="text-left">
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-success flex-shrink-0" />
                  <p className="text-sm md:text-lg font-medium text-foreground">{item.title}</p>
                </div>
                {item.value && (
                  <p className="text-xs font-bold text-destructive line-through mt-0.5 ml-6">
                    VALORADO EN {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 mb-4">
            <p className="text-center text-base md:text-xl text-destructive line-through mb-1">De $47 USD</p>
            <p className="text-center text-base md:text-2xl font-semibold text-foreground mb-1">Todo esto por apenas</p>
            <p className="text-center text-3xl md:text-5xl font-bold text-success mb-2">$9.90 USD</p>
            <p className="text-center text-xs md:text-sm text-muted-foreground mb-2">Pago único · Sin renovaciones · Acceso de por vida</p>
          </div>

          <p className="text-center text-xs font-semibold text-destructive mb-2">
            👇 Haz clic en el botón de abajo para adquirir 👇
          </p>





          <Button
            id="cta-button"
            asChild
            size="lg"
            className="shiny-cta animate-pulse-gold w-full bg-gradient-gold-strong hover:brightness-110 text-primary-foreground text-base md:text-lg font-bold mb-1.5 gap-2 rounded-full py-7"
          >
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-utmify-event="Quiero el Kit ahora"
              onClick={openCheckoutInNewTab("Quiero el Kit ahora")}
            >
              Quiero el Kit ahora
            </a>
          </Button>
          <p className="text-center text-[12px] text-muted-foreground mb-3">+5 bonos incluidos hoy</p>

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
  { question: "¿Cómo recibo el kit después de pagar?", answer: "En menos de 1 minuto recibes un email de Hotmart con el enlace de descarga. Si no lo ves, revisa la carpeta de promociones o spam." },
  { question: "¿Necesito una impresora especial?", answer: "No. Funciona con cualquier impresora casera (chorro de tinta o láser). Recomendamos hoja A4 o cartulina blanca de 180g." },
  { question: "¿Puedo vender los llaveros que imprimo?", answer: "¡Sí! El kit incluye licencia de uso comercial. El bono 04 trae plantillas y precios sugeridos." },
  { question: "¿En qué idioma están los versículos?", answer: "Todos los versículos están en español, en versión clara para niños y adultos." },
  { question: "¿Y si no me gusta? ¿Es un pago único?", answer: "Tienes 7 días de garantía total. Si no te encanta, te devolvemos el 100% de tu dinero. Es un pago único de $9.90 USD, sin renovaciones ni cobros futuros." },
];

const GuaranteeSection = () => (
  <section className="py-8 md:py-12 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-balance">
            Garantía total de 7 días
          </h2>
        </div>

        <Card className="p-6 md:p-10 mb-12 bg-success/10 border-2 border-success/30 shadow-soft">
          <div className="flex flex-col items-center text-center gap-5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-success/20 flex items-center justify-center shadow-md animate-pulse-gold">
              <span className="text-6xl sm:text-7xl" role="img" aria-label="Escudo de garantía">🛡️</span>
            </div>
            <p className="text-foreground leading-relaxed max-w-2xl">
              Si por cualquier motivo el kit no te encanta, escribes a soporte y te devolvemos
              <b> cada centavo</b>.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm sm:text-base">
              Sin preguntas, sin trámites. El riesgo es nuestro — la <b>bendición es tuya</b>.
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
              ¡O amas el kit, o recibes tu dinero de vuelta!
            </p>
          </div>
        </Card>

        <div className="text-center mb-6">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
            Todo lo que necesitas saber
          </h3>
          <p className="text-sm text-muted-foreground">PREGUNTAS FRECUENTES</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i} className="p-5 sm:p-6 hover:shadow-soft transition-smooth">
              <div className="flex items-start gap-4">
                <div className="icon-tile-soft w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="w-4 h-4 text-primary" />
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
          Sí, quiero el kit por $9.90
        </h2>
        <p className="text-base sm:text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
          Acceso inmediato al kit completo + los 5 bonos. Un solo pago, sin mensualidades.
        </p>
        <div className="flex flex-col items-center gap-2">
          <Button
            size="lg"
            onClick={() => { trackCta("Final CTA $9.90"); scrollToContent(); }}
            className="shiny-cta animate-pulse-gold w-full sm:w-auto bg-gradient-gold-strong hover:brightness-110 text-primary-foreground font-bold text-base sm:text-lg px-8 gap-2 rounded-full"
          >
            Sí, quiero el kit por $9.90
          </Button>
          <span className="text-[12px] text-primary-foreground/80">Acceso inmediato · 7 días de garantía</span>
        </div>
        <p className="text-primary-foreground/70 text-xs sm:text-sm">
          🔒 Compra segura vía Hotmart · Garantía de 7 días · Acceso de por vida
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
        <p className="font-semibold text-primary-foreground">Llaveros Bíblicos · Kit Digital</p>
        <p>© 2026 — Todos los derechos reservados · Pagos procesados de forma segura por Hotmart</p>
        <p className="text-primary-foreground/60 text-xs max-w-2xl mx-auto">
          Este producto no garantiza resultados financieros. Los testimonios reflejan experiencias individuales.
        </p>
      </div>
    </footer>
  </div>
);

export default Index;

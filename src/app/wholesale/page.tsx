import type { Metadata } from "next";
import Image from "next/image";
import ProcessStep from "@/components/ProcessStep";

export const metadata: Metadata = {
  title: "Wholesale",
  description:
    "Partner with Siluva Sarees for wholesale ethnic wear. Minimum 50+ units, global shipping, and bespoke pricing for retailers worldwide.",
};

const processSteps = [
  {
    icon: "palette",
    step: "01",
    title: "Select designs",
    description:
      "Browse our seasonal lookbooks and digital catalogs to select pieces that resonate with your clientele.",
  },
  {
    icon: "fact_check",
    step: "02",
    title: "Confirm order",
    description:
      "Finalize your selection and quantities with our dedicated wholesale concierge for a tailored invoice.",
    offset: true,
  },
  {
    icon: "payments",
    step: "03",
    title: "Advance payment",
    description:
      "Secure your production slot through our flexible and secure B2B payment gateway options.",
  },
  {
    icon: "local_shipping",
    step: "04",
    title: "Delivery",
    description:
      "Enjoy tracked insured international shipping directly from our atelier to your doorstep.",
    offset: true,
  },
];

export default function WholesalePage() {
  return (
    <div className="pt-20 md:pt-32">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-12 py-16 md:py-24 mb-16 md:mb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10" />
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBndZXf8Yg6E2HPozwtuLkNQstykPkfwxOm11mHU9U172alm_m9eQ03SHEUP2iAopawebaSLpO11nCKUrImBguCzF7zbojyNK0kykqNuPV8KpKi6VXxRSWOfdIZm0hyADi9T_PhxFjqoyCgRMwjqTx_Iemxtaoom1vt0UZL8s3zUh7kBjuOjZk2S1_k7Vrv-VKKsesnd48lcp6zUbZEEfPLqeBg-dW_4fm3EKgrDeA3cCBn9A71u8_Juz9-MUJmOupxd2WgSXSXhCrV"
          alt="Close-up of luxury handcrafted gold-embroidered ethnic fabric"
          fill
          className="object-cover opacity-40"
          priority
        />

        <div className="relative z-20 max-w-4xl">
          <span className="text-primary font-label uppercase tracking-[0.3em] text-xs mb-3 md:mb-4 block">
            B2B Partnership
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-headline italic text-on-background mb-6 md:mb-8 leading-tight">
            Bulk Orders <br />
            Available
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light text-on-surface-variant max-w-2xl leading-relaxed mb-8 md:mb-12">
            Partner with Siluva Sarees to bring timeless elegance to your
            boutique. We offer curated wholesale opportunities for global
            retailers who value craftsmanship and artisanal luxury.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <div className="flex flex-col">
              <span className="text-primary font-headline text-2xl md:text-3xl italic">
                50+ Units
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-stone-500">
                Minimum Order Quantity
              </span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-outline-variant/30" />
            <div className="flex flex-col">
              <span className="text-primary font-headline text-2xl md:text-3xl italic">
                Global
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-stone-500">
                Shipping Network
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-4 sm:px-6 md:px-12 mb-20 md:mb-32 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-primary font-label uppercase tracking-[0.4em] text-sm mb-3 md:mb-4">
            Our Collaborative Process
          </h2>
          <div className="h-px w-24 bg-primary/30 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {processSteps.map((step) => (
            <ProcessStep
              key={step.step}
              icon={step.icon}
              step={step.step}
              title={step.title}
              description={step.description}
              offset={step.offset}
            />
          ))}
        </div>
      </section>

      {/* CTA & Payments Bento Section */}
      <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Large CTA Card */}
          <div className="md:col-span-2 rounded-xl bg-surface-container relative overflow-hidden flex flex-col justify-center p-8 md:p-12 min-h-[320px] md:min-h-[400px]">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-[120px] md:text-[200px]">
                forum
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline italic mb-4 md:mb-6">
              Inquire for Bespoke Pricing
            </h2>
            <p className="text-stone-400 font-light mb-8 md:mb-10 max-w-md text-sm md:text-base">
              Connect directly with our sales team to discuss volume discounts,
              custom tailoring options, and seasonal exclusivity.
            </p>
            <a
              href="https://wa.me/9154905787?text=Hi!%20I'm%20interested%20in%20wholesale%20orders%20from%20Siluva%20Sarees."
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit bg-gradient-to-r from-primary to-primary-container px-6 sm:px-10 py-4 md:py-5 rounded-md flex items-center gap-3 md:gap-4 group transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/10"
            >
              <span className="material-symbols-outlined text-on-primary-fixed">
                chat
              </span>
              <span className="font-label font-bold text-on-primary-fixed uppercase tracking-widest text-xs sm:text-sm">
                Contact on WhatsApp
              </span>
            </a>
          </div>

          {/* Small Info/Payments Card */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex-1 rounded-xl bg-surface-container-low border border-white/5 p-6 md:p-8">
              <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-6 md:mb-8">
                Payment methods
              </h4>
              <div className="grid grid-cols-3 gap-4 md:gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                <span className="material-symbols-outlined text-3xl md:text-4xl">
                  account_balance
                </span>
                <span className="material-symbols-outlined text-3xl md:text-4xl">
                  credit_card
                </span>
                <span className="material-symbols-outlined text-3xl md:text-4xl">
                  account_balance_wallet
                </span>
                <span className="material-symbols-outlined text-3xl md:text-4xl">
                  currency_exchange
                </span>
                <span className="material-symbols-outlined text-3xl md:text-4xl">
                  qr_code_2
                </span>
                <span className="material-symbols-outlined text-3xl md:text-4xl">
                  receipt_long
                </span>
              </div>
            </div>
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 md:p-8 flex items-center gap-4 md:gap-6">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary">
                  verified
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-tighter">
                  Quality Assurance
                </p>
                <p className="text-xs text-stone-500">
                  Every bulk item undergoes rigorous inspection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

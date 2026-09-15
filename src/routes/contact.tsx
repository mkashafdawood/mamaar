import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { PageHero, WhatsAppIcon } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a Wholesale Quote | Maamaar" },
      {
        name: "description",
        content:
          "Contact Maamaar International for apparel lot availability, samples, container pricing, and export coordination.",
      },
      { property: "og:title", content: "Request a Wholesale Quote | Maamaar" },
      {
        property: "og:description",
        content: "Tell us what apparel inventory you need and where it is shipping.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.currentTarget.reportValidity()) setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Wholesale inquiries"
        title="Let’s discuss your next container."
        description="Tell us what categories, quantities, and destination you need. Our team will respond with availability and next steps."
      />
      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <aside>
            <p className="eyebrow">Direct contact</p>
            <h2 className="section-title">Talk to our export team</h2>
            <div className="mt-8 grid gap-4">
              <a
                className="contact-row transition-colors duration-150 hover:text-primary"
                href="tel:+16479018914"
              >
                <Phone />{" "}
                <span>
                  <b>Phone</b>
                  {contact.phone}
                </span>
              </a>
              <a
                className="contact-row transition-colors duration-150 hover:text-[#25D366]"
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="grid size-6 place-items-center text-[#25D366]">
                  <WhatsAppIcon className="size-5" />
                </span>
                <span>
                  <b>WhatsApp</b>
                  {contact.phone}
                </span>
              </a>
              <a
                className="contact-row transition-colors duration-150 hover:text-primary"
                href={`mailto:${contact.email}`}
              >
                <Mail />{" "}
                <span>
                  <b>Email</b>
                  {contact.email}
                </span>
              </a>
              <div className="contact-row">
                <MapPin />{" "}
                <span>
                  <b>Based in</b>Canada — exporting to UAE & international markets
                </span>
              </div>
            </div>
          </aside>

          {sent ? (
            <div className="success-panel">
              <CheckCircle2 className="size-12 text-[#25D366]" />
              <h2>Thank you for your inquiry.</h2>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                We'll review your inquiry and respond within one business day. For urgent requests,
                please connect with us directly on WhatsApp.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md transition-[transform,background-color] duration-150 ease-out hover:bg-[#20bd5a] active:scale-[0.96]"
                >
                  <WhatsAppIcon className="size-5" /> Continue on WhatsApp
                </a>
                <Button onClick={() => setSent(false)} variant="outline">
                  Send another inquiry
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="quote-form">
              <div className="form-grid">
                <label>
                  Name
                  <input name="name" required placeholder="Your full name" />
                </label>
                <label>
                  Company
                  <input name="company" required placeholder="Company name" />
                </label>
                <label>
                  Country
                  <input name="country" required placeholder="Destination country" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required placeholder="name@company.com" />
                </label>
                <label className="md:col-span-2">
                  Phone / WhatsApp
                  <input name="phone" type="tel" required placeholder="+971 XX XXX XXXX" />
                </label>
                <label className="md:col-span-2">
                  Message
                  <textarea
                    name="message"
                    required
                    minLength={20}
                    rows={6}
                    placeholder="Tell us the categories, estimated volume, and destination you need."
                  />
                </label>
              </div>
              <Button type="submit" variant="gold" size="xl" className="mt-6 w-full sm:w-auto">
                Request Wholesale Quote
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                For urgent inquiries,{" "}
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#25D366] hover:underline"
                >
                  WhatsApp us directly
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

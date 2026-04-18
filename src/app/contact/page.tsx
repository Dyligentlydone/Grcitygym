import { site } from "@/lib/data";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = { title: "Contact — Grand Rapids City Gym" };

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-7xl px-6">
        <div className="eyebrow">Get in touch</div>
        <h1 className="display text-7xl md:text-[12rem] mt-4">Contact.</h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-8">
          <div>
            <MapPin size={18} className="text-accent" />
            <div className="eyebrow mt-3">Location</div>
            <p className="mt-1 text-white/80">{site.address}</p>
          </div>
          <div>
            <Clock size={18} className="text-accent" />
            <div className="eyebrow mt-3">Hours</div>
            <p className="mt-1 text-white/80">{site.hours}</p>
            <p className="text-white/50 text-sm">Front desk: Mon–Fri 8a–8p · Sat–Sun 9a–2p</p>
          </div>
          <div>
            <Phone size={18} className="text-accent" />
            <div className="eyebrow mt-3">Phone</div>
            <p className="mt-1 text-white/80">{site.phone}</p>
          </div>
          <div>
            <Mail size={18} className="text-accent" />
            <div className="eyebrow mt-3">Email</div>
            <p className="mt-1 text-white/80">{site.email}</p>
          </div>
        </div>

        <form className="md:col-span-7 border hairline p-8 md:p-10 space-y-6 bg-ink-800">
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="First name" name="first" />
            <Field label="Last name" name="last" />
          </div>
          <Field label="Email" name="email" type="email" />
          <Field label="Phone" name="phone" type="tel" />
          <div>
            <label className="eyebrow block mb-3">What brings you in?</label>
            <select className="w-full bg-transparent border-b hairline py-3 focus:outline-none focus:border-white">
              <option>Free intro session</option>
              <option>Membership inquiry</option>
              <option>Personal training</option>
              <option>Corporate / group rates</option>
              <option>Something else</option>
            </select>
          </div>
          <div>
            <label className="eyebrow block mb-3">Message</label>
            <textarea rows={4} className="w-full bg-transparent border-b hairline py-3 focus:outline-none focus:border-white resize-none" />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-3">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full bg-transparent border-b hairline py-3 focus:outline-none focus:border-white"
      />
    </div>
  );
}

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import SectionTitle from "../../common/SectionTitle";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-[#050816] to-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Let's Connect"
          subtitle="Interested in collaborating or discussing a backend or AI project? Feel free to reach out."
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          <div className="space-y-6">
            <ContactCard
              icon={<Mail />}
              title="Email"
              value="suraj@example.com"
              href="mailto:suraj@example.com"
            />

            <ContactCard
              icon={<Phone />}
              title="Phone"
              value="+91 9876543210"
              href="tel:+919876543210"
            />

            <ContactCard
              icon={<MapPin />}
              title="Location"
              value="Pune, Maharashtra"
              href="https://maps.google.com"
            />

            <SocialLinks />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
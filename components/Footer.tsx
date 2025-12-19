import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
  ],
  resources: [
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black mb-4">EIAG</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Economic Incentives Advisory Group
            </p>
            <p className="text-white/70 text-sm">
              Securing billions in economic incentives for businesses nationwide.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@eiag.com"
                  className="text-white/80 hover:text-accent transition-colors duration-200"
                >
                  info@eiag.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-white/80 hover:text-accent transition-colors duration-200"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  United States
                </span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-white/80 hover:text-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-accent transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Economic Incentives Advisory Group. All rights reserved.
            </p>
            <p className="text-white/60 text-xs">
              Securing over $15 billion in incentives for clients
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


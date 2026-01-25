import { memo } from "react";
import { SocialIcon } from "../shared";
import { SOCIAL_LINKS, FOOTER_CONTENT } from "../../constants";
import logo from "../../assets/logo.png";

const Footer = memo(function Footer() {
  return (
    <footer className="text-gray-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="AiBrush"
                width="32"
                height="32"
                className="w-8 h-8 rounded-lg"
                loading="lazy"
                decoding="async"
              />
              <span className="text-white font-semibold">{FOOTER_CONTENT.brand.name}</span>
            </div>
            <p className="text-sm text-gray-400">{FOOTER_CONTENT.brand.tagline}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">{FOOTER_CONTENT.sections.product.title}</h3>
            <ul className="space-y-2">
              {FOOTER_CONTENT.sections.product.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">{FOOTER_CONTENT.sections.resources.title}</h3>
            <ul className="space-y-2">
              {FOOTER_CONTENT.sections.resources.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">{FOOTER_CONTENT.sections.connect.title}</h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, i) => (
                <SocialIcon key={i} name={social.icon} href={social.href} label={social.name} />
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">
              <a href={`mailto:${FOOTER_CONTENT.supportEmail}`} className="hover:text-white transition-colors">
                {FOOTER_CONTENT.supportEmail}
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {FOOTER_CONTENT.brand.name}. {FOOTER_CONTENT.copyright}
          </p>
          <div className="flex gap-6">
            {FOOTER_CONTENT.legalLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;

import Link from "next/link";
import { Home, Mail, Phone, MapPin, Globe, MessageCircle } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Demo", href: "#demo" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
      { name: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-xl text-primary-foreground shadow-lg shadow-primary/20">
              <Home size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">HostelFlow</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Revolutionizing hostel management with modern technology. Our platform
            streamlines fees, complaints, and student management for thousands of hostels worldwide.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Link href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all">
              <Globe size={18} />
            </Link>
            <Link href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all">
              <MessageCircle size={18} />
            </Link>
          </div>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider">{section.title}</h4>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 text-sm text-muted-foreground group">
              <MapPin size={18} className="text-primary group-hover:scale-110 transition-transform" />
              <span>123 Tech Lane, Innovation Hub, San Francisco</span>
            </li>
            <li className="flex items-center gap-4 text-sm text-muted-foreground group cursor-pointer hover:text-primary">
              <Phone size={18} className="text-primary group-hover:scale-110 transition-transform" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-4 text-sm text-muted-foreground group cursor-pointer hover:text-primary">
              <Mail size={18} className="text-primary group-hover:scale-110 transition-transform" />
              <span>support@hostelflow.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t mt-20 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground/60">
        <p>© 2026 HostelFlow Inc. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0 uppercase tracking-widest font-semibold">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
          <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}

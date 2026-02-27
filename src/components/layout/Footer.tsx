import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";

const footerLinks = {
  "Use Cases": [
    { label: "Sales", href: "/use-cases/sales-customer-acquisition" },
    { label: "Order Management", href: "/use-cases/order-management" },
    { label: "Pricing & Margins", href: "/use-cases/pricing-intelligence" },
    { label: "Operations & Logistics", href: "/use-cases/operations-logistics" },
    { label: "Customer Service", href: "/use-cases/customer-service" },
    { label: "Finance", href: "/use-cases/finance-ar" },
    { label: "Compliance", href: "/use-cases/compliance" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "All Agents", href: "/use-cases" },
    { label: "Book a Demo", href: "/book-demo" },
    { label: "Custom Agents", href: "/custom-agents" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center mb-5">
              <Image
                src="/logo.png"
                alt="DistroAgents"
                width={150}
                height={38}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-[14px] text-slate-500 leading-relaxed max-w-xs mb-6">
              Purpose-built AI agents for wholesale distribution. Recover revenue, reduce costs, and
              free your team.
            </p>
            <div className="space-y-2 text-[14px] text-slate-500">
              <p className="hover:text-slate-300 transition-colors">{siteConfig.email}</p>
              <p>{siteConfig.phone}</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[13px] font-semibold text-slate-300 uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-slate-500 hover:text-slate-200 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-slate-600">
            &copy; {new Date().getFullYear()} DistroAgents. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-slate-600">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

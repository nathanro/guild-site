'use client';

const columns = [
  {
    title: 'Guild',
    links: [
      { label: 'Membership', href: '#features' },
      { label: 'The Stack', href: '#stack' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Training', href: '#' },
      { label: 'Templates', href: '#' },
      { label: 'Playbooks', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Refund Policy', href: '#' },
    ],
  },
  {
    title: 'Connect',
    links: [
      {
        label: 'Discord',
        href: 'https://discord.gg/publiexpert',
        external: true,
      },
      { label: 'nathan@publiexpert.com', href: 'mailto:nathan@publiexpert.com' },
      { label: 'publiexpert.com', href: 'https://publiexpert.com', external: true },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] px-6 pt-16 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-ink font-bold text-sm">
                ⌘
              </span>
              <span className="font-semibold text-[15px] tracking-tight text-cream">
                PubliExpert <span className="text-muted font-normal">AI Guild</span>
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              The membership that gives entrepreneurs the AI stack, training,
              and community to grow — for one flat price.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-muted mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="text-sm text-cream/70 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-[13px] text-muted">
          <p>© {currentYear} PubliExpert LLC. All rights reserved.</p>
          <p className="font-mono text-[11px] uppercase tracking-widest2">
            Built for entrepreneurs
          </p>
        </div>
      </div>
    </footer>
  );
}

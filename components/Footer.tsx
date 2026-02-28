import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-primary">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold tracking-tight text-white">
              <span className="gradient-text">Constant</span> Systems
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              AI systems, infrastructure, and software consulting. Formally
              verified. Local-first. Air-gapped capable.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Pages
            </h4>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted hover:text-white transition-colors">Home</Link>
              <Link href="/services" className="text-sm text-muted hover:text-white transition-colors">Services</Link>
              <Link href="/about" className="text-sm text-muted hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-sm text-muted hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h4>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="mailto:qj@constantqj.com"
                className="text-sm text-muted hover:text-white transition-colors"
              >
                qj@constantqj.com
              </a>
              <p className="text-sm text-muted">
                CityPlex Towers, Suite 3725<br />
                2488 E 81st St<br />
                Tulsa, OK 74137
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} Constant Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

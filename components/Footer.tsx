import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold tracking-tight text-gray-900">
              Constant Systems
            </h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              AI systems, infrastructure, and software consulting. Local-first.
              Air-gapped capable. Built for everyone.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Pages
            </h4>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Home</Link>
              <Link href="/services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Services</Link>
              <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About</Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Contact
            </h4>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="mailto:qj@constantqj.com"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                qj@constantqj.com
              </a>
              <p className="text-sm text-gray-500">
                CityPlex Towers, Suite 3725<br />
                2488 E 81st St<br />
                Tulsa, OK 74137
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Constant Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

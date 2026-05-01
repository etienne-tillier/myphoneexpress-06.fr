import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="font-heading text-xl font-bold tracking-wider text-accent">
                            MyPhoneExpress
                        </Link>
                        <span className="text-xs text-secondary font-medium ml-1">06.fr</span>
                        <p className="mt-3 text-sm text-white/60 leading-relaxed">
                            Votre expert en numéros de téléphone virtuels. Solutions de communication
                            professionnelles pour la France, le Canada, les États-Unis, le Royaume-Uni et l&apos;Espagne.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-heading text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
                            Navigation
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="text-white/60 hover:text-accent transition-colors">Accueil</Link></li>
                            <li><Link href="/guides" className="text-white/60 hover:text-accent transition-colors">Guides par pays</Link></li>
                            <li><Link href="/comparatifs" className="text-white/60 hover:text-accent transition-colors">Comparatifs plateformes</Link></li>
                            <li><Link href="/blog" className="text-white/60 hover:text-accent transition-colors">Blog</Link></li>
                            <li><Link href="/a-propos" className="text-white/60 hover:text-accent transition-colors">À propos</Link></li>
                            <li><Link href="/contact" className="text-white/60 hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal & Info */}
                    <div>
                        <h3 className="font-heading text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
                            Informations
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/mentions-legales" className="text-white/60 hover:text-accent transition-colors">Mentions légales</Link></li>
                            <li><Link href="/politique-confidentialite" className="text-white/60 hover:text-accent transition-colors">Politique de confidentialité</Link></li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <p className="text-xs text-white/40">
                                &copy; {currentYear} MyPhoneExpress 06.fr — Tous droits réservés.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

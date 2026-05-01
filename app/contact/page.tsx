import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | MyPhoneExpress 06.fr",
    description:
        "Contactez MyPhoneExpress 06.fr. Une question sur les numeros de telephone virtuels ? Ecrivez-nous a contact@myphoneexpress-06.fr.",
};

export default function ContactPage() {
    return (
        <>
            <section className="bg-primary py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
                        Contact
                    </h1>
                    <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                        Une question sur les numeros de telephone virtuels ?
                        N&apos;hesitez pas a nous ecrire.
                    </p>
                </div>
            </section>

            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 rounded-xl p-8 text-center">
                        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                            <svg
                                className="w-8 h-8 text-accent"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h2 className="mt-6 font-heading text-xl font-bold text-primary">
                            Ecrivez-nous par email
                        </h2>
                        <p className="mt-3 text-gray-600 leading-relaxed">
                            Pour toute question relative aux numeros de telephone virtuels,
                            aux guides par pays, aux comparatifs de plateformes, ou pour
                            toute suggestion d&apos;amelioration du site, vous pouvez nous
                            contacter directement par email. Nous nous efforcons de
                            repondre sous 48 heures ouvreues.
                        </p>
                        <a
                            href="mailto:contact@myphoneexpress-06.fr"
                            className="mt-6 inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors"
                        >
                            contact@myphoneexpress-06.fr
                        </a>
                        <p className="mt-4 text-sm text-gray-500">
                            Nous ne traitons pas les demandes de support technique
                            directement. Consultez nos{" "}
                                    <Link
                                        href="/guides"
                                        className="text-secondary hover:text-accent"
                                    >
                                        guides
                                    </Link>{" "}
                                    ou nos{" "}
                                    <Link
                                        href="/comparatifs"
                                        className="text-secondary hover:text-accent"
                                    >
                                        comparatifs
                                    </Link>{" "}
                            pour trouver l&apos;information recherchee.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

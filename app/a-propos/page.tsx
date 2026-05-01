import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "A propos | MyPhoneExpress 06.fr",
    description:
        "Decouvrez MyPhoneExpress 06.fr, votre expert en numeros de telephone virtuels. Notre mission, notre equipe et nos valeurs pour vous accompagner.",
};

export default function AProposPage() {
    return (
        <>
            <section className="bg-primary py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
                        A propos de MyPhoneExpress 06.fr
                    </h1>
                    <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                        Notre mission : vous aider a choisir et configurer la meilleure
                        solution de numero de telephone virtuel.
                    </p>
                </div>
            </section>

            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl font-bold text-primary">
                        Qui sommes-nous ?
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        MyPhoneExpress 06.fr est un site independant specialise dans
                        l&apos;analyse et la comparaison des solutions de numeros de
                        telephone virtuels. Crees par une equipe de passionnes de
                        telecommunications, nous testons et analysons les plateformes du
                        marche pour vous fournir des informations objectives et
                        actualisees.
                    </p>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Notre experience dans le domaine des telecoms nous a montre que
                        beaucoup d&apos;utilisateurs etaient perdus face a la multitude
                        d&apos;offres disponibles. Entre les operateurs traditionnels, les
                        pure-players VoIP et les nouvelles plateformes cloud, il est
                        difficile de s&apos;y retrouver. C&apos;est pour repondre a ce
                        besoin que nous avons cree ce site.
                    </p>

                    <h2 className="font-heading text-2xl font-bold text-primary mt-12">
                        Notre demarche
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Chaque plateforme que nous recommandons est testee pendant au
                        moins 30 jours. Nous evaluons la qualite des appels, la
                        fiabilite du service, la reactivite du support client, la
                        facilite de configuration et le rapport qualite-prix. Nos
                        guides sont regulierement mis a jour pour tenir compte des
                        evolutions du marche et des retours de nos utilisateurs.
                    </p>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Nous nous engageons a maintenir notre independance. Nous ne
                        percevons pas de commission des operateurs que nous analysons,
                        ce qui nous garantit liberte et objectivite dans nos
                        evaluations. Notre seule source de revenus est la publicite
                        contextuelle presente sur le site.
                    </p>

                    <h2 className="font-heading text-2xl font-bold text-primary mt-12">
                        Nos valeurs
                    </h2>
                    <ul className="mt-4 space-y-4">
                        {[
                            {
                                titre: "Transparence",
                                desc: "Nos analyses sont basees sur des criteres objectifs et verifiables. Nous indiquons clairement les avantages et limites de chaque solution.",
                            },
                            {
                                titre: "Expertise",
                                desc: "Notre equipe est composee de professionnels des telecommunications avec une experience cumulee de plus de 15 ans dans le secteur.",
                            },
                            {
                                titre: "Independance",
                                desc: "Nous ne sommes lies a aucun operateur telecom. Nos recommandations sont 100% impartiales et basees uniquement sur la qualite des services.",
                            },
                            {
                                titre: "Accessibilite",
                                desc: "Nous rendons les sujets techniques accessibles a tous, des particuliers aux professionnels, avec des guides clairs et des comparatifs detailles.",
                            },
                        ].map((item) => (
                            <li
                                key={item.titre}
                                className="bg-gray-50 rounded-lg p-5"
                            >
                                <h3 className="font-heading text-lg font-semibold text-primary">
                                    {item.titre}
                                </h3>
                                <p className="mt-2 text-gray-600">{item.desc}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
                        <h2 className="font-heading text-xl font-bold text-primary">
                            Une question ? Une suggestion ?
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Nous sommes a votre ecoute pour toute demande d&apos;information
                            ou suggestion d&apos;amelioration.
                        </p>
                        <a
                            href="mailto:contact@myphoneexpress-06.fr"
                            className="mt-4 inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors"
                        >
                            contact@myphoneexpress-06.fr
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

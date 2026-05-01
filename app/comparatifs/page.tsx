import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comparatif des plateformes de numeros virtuels | MyPhoneExpress 06.fr",
    description:
        "Comparez les meilleures plateformes de numeros de telephone virtuels. Analyse detaillee des fonctionnalites, tarifs, couverture et avis pour choisir la solution ideale.",
};

const plateformes = [
    {
        nom: "FreePBX Hosted",
        note: "4.8/5",
        avantages: ["Interface intuitive", "Numeros dans 50+ pays", "Support technique reactif"],
        prix: "A partir de 5,99\u20ac/mois",
        ideal: "PME et entrepreneurs",
    },
    {
        nom: "VoIP International",
        note: "4.6/5",
        avantages: ["Appels illimites vers 30 destinations", "Application mobile incluse", "Portabilite gratuite"],
        prix: "A partir de 7,99\u20ac/mois",
        ideal: "Voyageurs frequents",
    },
    {
        nom: "Virtual Number Pro",
        note: "4.5/5",
        avantages: ["Configuration en 2 minutes", "Messagerie vocale avancee", "API developpeur"],
        prix: "A partir de 3,99\u20ac/mois",
        ideal: "Developpeurs et startups",
    },
    {
        nom: "Global Telecom",
        note: "4.3/5",
        avantages: ["Couverture mondiale etendue", "Numeros 0800 inclus", "Facturation unifiee"],
        prix: "A partir de 9,99\u20ac/mois",
        ideal: "Grandes entreprises",
    },
    {
        nom: "Express Num",
        note: "4.2/5",
        avantages: ["Sans abonnement minimum", "Installation en 24h", "Support en francais 7j/7"],
        prix: "A partir de 2,99\u20ac/mois",
        ideal: "Particuliers et auto-entrepreneurs",
    },
];

export default function ComparatifsPage() {
    return (
        <>
            <section className="bg-primary py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
                        Comparatif des plateformes
                    </h1>
                    <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                    Notre analyse independante des principales plateformes de numeros de
                    telephone virtuels pour vous aider a choisir la meilleure solution.
                    </p>
                </div>
            </section>

            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative h-72 rounded-xl overflow-hidden shadow-lg mb-12">
                        <Image
                            src="/images/comparatifs.jpeg"
                            alt="Comparatif des applications de numeros de telephone virtuels"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        Choisir la bonne plateforme de numeros virtuels est essentiel pour
                        votre communication professionnelle ou personnelle. Nous avons teste
                        et analyse les principales solutions du marche selon des criteres
                        objectifs : qualite audio, fiabilite du service, couverture
                        internationale, facilitte de configuration, options de routage et
                        tarifs. Voici notre classement actualise.
                    </p>

                    <div className="mt-10 overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="px-4 py-3 text-left font-heading text-sm">
                                        Plateforme
                                    </th>
                                    <th className="px-4 py-3 text-center font-heading text-sm">
                                        Note
                                    </th>
                                    <th className="px-4 py-3 text-left font-heading text-sm hidden md:table-cell">
                                        Points forts
                                    </th>
                                    <th className="px-4 py-3 text-center font-heading text-sm">
                                        Tarif
                                    </th>
                                    <th className="px-4 py-3 text-center font-heading text-sm hidden lg:table-cell">
                                        Ideal pour
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {plateformes.map((p, i) => (
                                    <tr
                                        key={p.nom}
                                        className={`border-b border-gray-100 ${
                                            i % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        }`}
                                    >
                                        <td className="px-4 py-4 font-semibold text-primary">
                                            {p.nom}
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <span className="text-accent font-bold">
                                                {p.note}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-sm text-gray-600 hidden md:table-cell">
                                            <ul className="list-disc list-inside space-y-1">
                                                {p.avantages.map((a) => (
                                                    <li key={a}>{a}</li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td className="px-4 py-4 text-center text-sm font-medium text-gray-700">
                                            {p.prix}
                                        </td>
                                        <td className="px-4 py-4 text-center text-sm text-gray-500 hidden lg:table-cell">
                                            {p.ideal}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12 bg-gray-50 rounded-xl p-8">
                        <h2 className="font-heading text-xl font-bold text-primary">
                            Comment choisir la bonne plateforme ?
                        </h2>
                        <p className="mt-3 text-gray-600 leading-relaxed">
                            Plusieurs criteres doivent guider votre choix : le volume
                            d&apos;appels prevu, les pays de destination prioritaires,
                            votre budget mensuel, et les fonctionnalites avancees
                            necessaires (enregistrement des appels, standard virtuel,
                            integration CRM). Prenez le temps de tester les plateformes
                            via leur essai gratuit avant de vous engager. N&apos;hesitez pas
                            a consulter nos <Link href="/guides" className="text-secondary hover:text-accent">guides par pays</Link> pour
                            des recommandations specifiques a chaque marche.
                        </p>
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors"
                        >
                            Besoin d&apos;aide pour choisir ? Contactez-nous
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

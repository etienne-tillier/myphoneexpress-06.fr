import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Guides par pays | MyPhoneExpress 06.fr",
    description:
        "Guides complets pour obtenir un numero de telephone virtuel en France, Canada, Etats-Unis, Royaume-Uni et Espagne. Procedures, tarifs et conseils par pays.",
};

const pays = [
    {
        nom: "France",
        slug: "france",
        indicatifs: "01, 02, 03, 04, 05, 06, 09, 0800",
        description:
            "La France offre le plus grand choix de numeros virtuels en Europe. Numeros geographiques locaux, numeros mobiles, numeros specifiques... decouvrez les options disponibles pour etablir une presence telephonique en France, que vous soyez resident ou situe a l'etranger.",
        etapes: [
            "Choisir un operateur de numero virtuel agree ARCEP",
            "Selectionner le type de numero (geographique, national, mobile)",
            "Fournir les justificatifs d'identite et d'adresse requis",
            "Configurer le renvoi d'appel vers votre ligne existante",
        ],
    },
    {
        nom: "Canada",
        slug: "canada",
        indicatifs: "438, 514, 418, 604, 416, 647",
        description:
            "Le marche canadien du numero virtuel est dynamique avec des offres competitives au Quebec et en Ontario. Obtenez un numero local a Montreal, Toronto, Vancouver ou Quebec sans etre physiquement present au Canada.",
        etapes: [
            "Verifier la compatibilite avec les operateurs canadiens (Bell, Rogers, Telus)",
            "Choisir entre un numero local ou un numero sans frais 1-800",
            "Fournir les documents requis pour la conformite CRTC",
            "Activer le service et tester le renvoi d'appel international",
        ],
    },
    {
        nom: "Etats-Unis",
        slug: "etats-unis",
        indicatifs: "Tous les etats + 800",
        description:
            "Les Etats-Unis representent le plus vaste marche de numeros virtuels au monde. Avec des indicatifs dans les 50 etats, vous pouvez creer une presence telephonique locale partout aux USA pour developper votre activite a l'international.",
        etapes: [
            "Selectionner un fournisseur conforme FCC pour les numeros US",
            "Choisir l'etat et l'indicatif souhaite",
            "Soumettre les formulaires de portabilite si necessaire",
            "Configurer la messagerie vocale et le routage d'appels",
        ],
    },
    {
        nom: "Royaume-Uni",
        slug: "royaume-uni",
        indicatifs: "020, 0161, 0121, 0131, 0800",
        description:
            "Le Royaume-Uni propose des numeros virtuels pratiques pour les entreprises et particuliers. Que vous visiez Londres, Manchester, Birmingham ou Edinburgh, obtenez un numero britannique pour faciliter vos echanges avec le marche UK.",
        etapes: [
            "Choisir un operateur agree Ofcom pour les numeros UK",
            "Selectionner l'indicatif geographique souhaite",
            "Fournir les documents de verification KYC",
            "Activer le service et parametrer les redirections",
        ],
    },
    {
        nom: "Espagne",
        slug: "espagne",
        indicatifs: "91, 93, 95, 900, 902",
        description:
            "L'Espagne offre des solutions de numeros virtuels attractives pour les entreprises et les particuliers. Des indicatifs locaux a Madrid, Barcelone, Valence et dans toute l'Espagne, profitez d'une presence telephonique locale.",
        etapes: [
            "Selectionner un fournisseur conforme a la reglementation CNMC",
            "Choisir l'indicatif regional souhaite",
            "Fournir les documents d'identification requis",
            "Configurer le service et les options de routage",
        ],
    },
];

export default function GuidesPage() {
    return (
        <>
            <section className="bg-primary py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
                        Guides par pays
                    </h1>
                    <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                        Obtenez un numero de telephone virtuel dans le pays de votre choix.
                        Nos guides detailles vous accompagnent a chaque etape.
                    </p>
                </div>
            </section>

            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {pays.map((p, index) => (
                            <article
                                key={p.slug}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                                    index % 2 === 1 ? "lg:direction-rtl" : ""
                                }`}
                            >
                                <div
                                    className={
                                        index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                                    }
                                >
                                    <h2 className="font-heading text-2xl font-bold text-primary">
                                        {p.nom}
                                    </h2>
                                    <p className="mt-1 text-sm text-secondary font-medium">
                                        Indicatifs disponibles : {p.indicatifs}
                                    </p>
                                    <p className="mt-4 text-gray-600 leading-relaxed">
                                        {p.description}
                                    </p>
                                    <h3 className="mt-6 font-heading text-sm font-semibold text-primary uppercase tracking-wider">
                                        Demarche a suivre :
                                    </h3>
                                    <ol className="mt-3 space-y-2">
                                        {p.etapes.map((etape, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 text-gray-600"
                                            >
                                                <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-white text-xs font-bold">
                                                    {i + 1}
                                                </span>
                                                {etape}
                                            </li>
                                        ))}
                                    </ol>
                                    <Link
                                        href="/comparatifs"
                                        className="mt-6 inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
                                    >
                                        Comparer les operateurs pour {p.nom} &rarr;
                                    </Link>
                                </div>
                                <div
                                    className={`relative h-72 rounded-xl overflow-hidden shadow-lg ${
                                        index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                                    }`}
                                >
                                    <Image
                                        src="/images/hero.jpeg"
                                        alt={`Guide pour obtenir un numero de telephone virtuel en ${p.nom}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-gray-50 rounded-xl p-8">
                        <h2 className="font-heading text-xl font-bold text-primary">
                            Vous ne trouvez pas votre pays ?
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Nous ajoutons regulierement de nouveaux pays. Contactez-nous
                            pour toute demande specifique.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-4 inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors"
                        >
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

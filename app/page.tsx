import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";

export default async function HomePage() {
    const posts = await getPublishedBlogPosts(3, 0);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "MyPhoneExpress 06.fr",
        url: "https://myphoneexpress-06.fr",
        description:
            "Expert en numeros de telephone virtuels. Solutions de communication professionnelles pour la France, le Canada, les Etats-Unis, le Royaume-Uni et l'Espagne.",
        contactPoint: {
            "@type": "ContactPoint",
            email: "contact@myphoneexpress-06.fr",
            contactType: "customer service",
        },
        sameAs: [],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <section className="relative bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/images/hero.jpeg"
                        alt="Reseau mondial de telecommunications - numeros de telephone virtuels internationaux"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="max-w-2xl">
                        <h1 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight">
                            Obtenez votre numero de telephone en moins de 5 minutes
                        </h1>
                        <p className="mt-4 text-lg text-white/80 leading-relaxed">
                            Besoin d&apos;un numero de telephone francais, canadien,
                            americain, britannique ou espagnol rapidement ? MyPhoneExpress
                            vous guide vers les meilleures solutions de numeros virtuels,
                            sans abonnement engage et avec activation immediate.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/comparatifs"
                                className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors"
                            >
                                Voir les solutions
                            </Link>
                            <Link
                                href="/guides"
                                className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                            >
                                Comparer les plateformes
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions par Pays */}
            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                                Solutions telephoniques par pays
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Que vous soyez un voyageur frequent, un expatrie ou un
                                entrepreneur en pleine expansion internationale, nous vous
                                accompagnons dans le choix du numero virtuel ideal. Les
                                solutions couvrent la France metropolitaine et les DOM-TOM,
                                le Canada (Quebec et Ontario), les Etats-Unis (tous les
                                etats), le Royaume-Uni et l&apos;Espagne. Chaque pays
                                dispose de ses propres reglementations et offres
                                specifiques que nous decortiquons pour vous.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[
                                    {
                                        pays: "France",
                                        desc: "Numeros en 01, 02, 03, 04, 05, 06, 09 et 0800",
                                    },
                                    {
                                        pays: "Canada",
                                        desc: "Indicatifs 438, 514, 418, 604, 416, 647",
                                    },
                                    {
                                        pays: "Etats-Unis",
                                        desc: "Numeros locaux dans les 50 etats + 800",
                                    },
                                    {
                                        pays: "Royaume-Uni",
                                        desc: "Indicatifs 020, 0161, 0121, 0131 et 0800",
                                    },
                                    {
                                        pays: "Espagne",
                                        desc: "Numeros 91, 93, 95 + 900 et 902",
                                    },
                                ].map((item) => (
                                    <li
                                        key={item.pays}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                                        <div>
                                            <strong className="text-primary">{item.pays}</strong>
                                            <span className="text-gray-500"> — {item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/guides"
                                className="mt-6 inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
                            >
                                Decouvrir les guides par pays &rarr;
                            </Link>
                        </div>
                        <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/solutions.jpeg"
                                alt="Carte du monde des solutions de numeros de telephone virtuels par pays"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparatif Plateformes */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
                            <Image
                                src="/images/comparatifs.jpeg"
                                alt="Applications mobiles de comparaison de plateformes de numeros virtuels"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                                Comparatif des plateformes de numeros virtuels
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Le marche des numeros de telephone virtuels compte
                                aujourd&apos;hui des dizaines d&apos;acteurs. Nous avons
                                analyse les principales plateformes selon des criteres
                                objectifs : qualite du reseau, couverture internationale,
                                facilite de configuration, tarifs, service client et
                                fiabilite. Que vous cherchiez un service pour un usage
                                personnel, professionnel ou pour une entreprise en
                                croissance, notre comparatif detaille vous aide a trouver
                                la solution la mieux adaptee a vos besoins.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Les criteres essentiels a considerer incluent la
                                portabilite du numero, la compatibilite VoIP, les
                                fonctionnalites de renvoi d&apos;appel, la messagerie
                                vocale, et bien sur le cout mensuel. Chaque plateforme a
                                ses forces et ses faiblesses selon votre profil
                                d&apos;utilisation.
                            </p>
                            <Link
                                href="/comparatifs"
                                className="mt-6 inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                            >
                                Voir le comparatif complet
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guides Techniques */}
            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                                Guides techniques et tutoriels
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Configurer un numero de telephone virtuel peut sembler
                                complexe, mais nos guides techniques vous accompagnent
                                pas a pas. De la selection du fournisseur a la
                                configuration de votre standard telephonique, en passant
                                par le renvoi d&apos;appel et la messagerie vocale, chaque
                                etape est detaillee avec des captures d&apos;ecran et des
                                instructions claires.
                            </p>
                            <p className="mt-3 text-gray-600 leading-relaxed">
                                Que vous soyez un particulier cherchant a joindre ses
                                proches a l&apos;etranger sans frais excessifs, ou un
                </p>
                            {posts.length > 0 && (
                                <div className="mt-6 space-y-3">
                                    <h3 className="font-heading text-lg font-semibold text-primary">
                                        Derniers articles
                                    </h3>
                                    <ul className="space-y-2">
                                        {posts.map((post) => (
                                            <li key={post.id}>
                                                <Link
                                                    href={`/blog/${post.slug}`}
                                                    className="text-secondary hover:text-accent transition-colors font-medium"
                                                >
                                                    {post.h1 || post.slug}
                                                </Link>
                                                {post.excerpt && (
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        {post.excerpt}
                                                    </p>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <Link
                                href="/guides"
                                className="mt-4 inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
                            >
                                Tous les guides techniques &rarr;
                            </Link>
                        </div>
                        <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/guides.jpeg"
                                alt="Configuration technique de numeros de telephone virtuels et equipements reseau"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Confiance */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
                            <Image
                                src="/images/confiance.jpeg"
                                alt="Certifications et securite des solutions de telecommunications"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                                Pourquoi nous faire confiance ?
                            </h2>
                            <div className="mt-6 grid grid-cols-2 gap-6">
                                {[
                                    {
                                        chiffre: "15+",
                                        label: "Plateformes analysees",
                                    },
                                    {
                                        chiffre: "50+",
                                        label: "Guides et comparatifs",
                                    },
                                    {
                                        chiffre: "98%",
                                        label: "Satisfaction utilisateur",
                                    },
                                    {
                                        chiffre: "5",
                                        label: "Pays couverts",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100"
                                    >
                                        <div className="font-heading text-3xl font-bold text-accent">
                                            {item.chiffre}
                                        </div>
                                        <div className="mt-1 text-sm text-gray-600">
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-gray-600 leading-relaxed">
                                Nous testons chaque plateforme pendant au moins 30 jours
                                avant de publier notre analyse. Nos guides sont mis a jour
                                regulierement pour refleter les evolutions des offres et
                                des technologies. Nous sommes independants et ne
                                percevons aucune commission des operateurs telecom,
                                garantissant des avis impartiaux.
                            </p>
                            <Link
                                href="/a-propos"
                                className="mt-4 inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
                            >
                                En savoir plus sur nous &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-primary py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
                                Questions frequentes sur les numeros virtuels
                            </h2>
                            <div className="mt-8 space-y-4">
                                {[
                                    {
                                        q: "Qu&apos;est-ce qu&apos;un numero de telephone virtuel ?",
                                        r: "Un numero virtuel est un numero qui n&apos;est pas lie a une ligne physique. Il peut etre configure pour renvoyer les appels vers n&apos;importe quel telephone fixe ou mobile, dans le monde entier.",
                                    },
                                    {
                                        q: "Puis-je conserver mon ancien numero ?",
                                        r: "Oui, la plupart des operateurs proposent la portabilite du numero. Vous pouvez transferer votre ancien numero vers un service virtuel sous reserve de compatibilite.",
                                    },
                                    {
                                        q: "Combien coute un numero virtuel ?",
                                        r: "Les tarifs varient de 2 a 20 euros par mois selon les fonctionnalites incluses. Certains operateurs proposent des forfaits avec appels illimites vers certaines destinations.",
                                    },
                                    {
                                        q: "Est-ce que ca marche depuis l&apos;etranger ?",
                                        r: "Absolument. C&apos;est meme l&apos;un des principaux avantages : vos correspondants vous joignent sur un numero local pendant que vous etes a l&apos;etranger.",
                                    },
                                ].map((item, i) => (
                                    <details
                                        key={i}
                                        className="group bg-white/10 rounded-lg p-4"
                                    >
                                        <summary className="text-white font-medium cursor-pointer hover:text-accent transition-colors">
                                            {item.q}
                                        </summary>
                                        <p className="mt-3 text-white/70 text-sm leading-relaxed">
                                            {item.r}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/faq.jpeg"
                                alt="Service client et support pour numeros de telephone virtuels"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors"
                        >
                            Une question ? Contactez-nous
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions legales | MyPhoneExpress 06.fr",
    description: "Mentions legales de MyPhoneExpress 06.fr.",
};

export default function MentionsLegalesPage() {
    return (
        <>
            <section className="bg-primary py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
                        Mentions legales
                    </h1>
                </div>
            </section>

            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
                    <h2>Editeur du site</h2>
                    <p>
                        Le site MyPhoneExpress 06.fr est edite par :
                    </p>
                    <ul>
                        <li>Nom du site : MyPhoneExpress 06.fr</li>
                        <li>Email : contact@myphoneexpress-06.fr</li>
                    </ul>

                    <h2>Hebergement</h2>
                    <p>
                        Le site est heberge par une infrastructure technique dediee
                        assuree par un prestataire specialise dans l&apos;hebergement
                        de sites web.
                    </p>

                    <h2>Propriete intellectuelle</h2>
                    <p>
                        L&apos;ensemble du contenu de ce site (textes, images,
                        graphismes, logo, icones) est protege par le droit
                        d&apos;auteur. Toute reproduction, representation,
                        modification ou adaptation, totale ou partielle, sans
                        autorisation prealable est interdite.
                    </p>

                    <h2>Donnees personnelles</h2>
                    <p>
                        Ce site ne collecte aucune donnee personnelle. Aucun
                        formulaire de contact, newsletter ou systeme de commentaires
                        n&apos;est utilise. Nous n&apos;utilisons pas de cookies de
                        tracage. Les seules donnees collectees sont les donnees de
                        navigation anonymisees a des fins statistiques via notre
                        outil d&apos;analyse.
                    </p>
                    <p>
                        Conformement au Reglement General sur la Protection des
                        Donnees (RGPD), vous disposez d&apos;un droit d&apos;acces,
                        de rectification et de suppression de vos donnees. Pour
                        exercer ce droit, contactez-nous par email a
                        contact@myphoneexpress-06.fr.
                    </p>

                    <h2>Responsabilite</h2>
                    <p>
                        Les informations fournies sur ce site le sont a titre
                        indicatif. Nous nous efforcons de maintenir des informations
                        exactes et a jour, mais nous ne pouvons garantir
                        l&apos;exhaustivite ou l&apos;actualite des contenus.
                        L&apos;utilisateur est invite a verifier les informations
                        directement aupres des operateurs et fournisseurs de
                        services presentes.
                    </p>

                    <h2>Liens externes</h2>
                    <p>
                        Ce site peut contenir des liens vers des sites externes.
                        Nous ne sommes pas responsables du contenu de ces sites ni
                        de leurs pratiques en matiere de protection des donnees.
                    </p>

                    <h2>Droit applicable</h2>
                    <p>
                        Les presentes mentions legales sont regies par le droit
                        francais. Tout litige relatif a l&apos;utilisation du site
                        sera soumis aux tribunaux competents.
                    </p>
                </div>
            </section>
        </>
    );
}

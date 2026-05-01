import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de confidentialite | MyPhoneExpress 06.fr",
    description: "Politique de confidentialite de MyPhoneExpress 06.fr.",
};

export default function PolitiqueConfidentialitePage() {
    return (
        <>
            <section className="bg-primary py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
                        Politique de confidentialite
                    </h1>
                </div>
            </section>

            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
                    <h2>Introduction</h2>
                    <p>
                        La presente politique de confidentialite a pour objet
                        d&apos;informer les visiteurs du site MyPhoneExpress 06.fr
                        sur la maniere dont nous traitons leurs donnees personnelles.
                        Nous nous engageons a proteger votre vie privee et a
                        traiter vos donnees avec transparence.
                    </p>

                    <h2>Responsable du traitement</h2>
                    <p>
                        Le responsable du traitement des donnees est l&apos;editeur
                        du site MyPhoneExpress 06.fr, joignable a l&apos;adresse
                        email : contact@myphoneexpress-06.fr.
                    </p>

                    <h2>Donnees collectees</h2>
                    <p>
                        Ce site ne collecte activement aucune donnee personnelle.
                        Aucun formulaire d&apos;inscription, de contact ou de
                        commentaire n&apos;est present sur le site. Les seules
                        donnees susceptibles d&apos;etre collectees sont :
                    </p>
                    <ul>
                        <li>
                            Les donnees de navigation anonymisees (pages visitees,
                            duree de visite) a des fins statistiques
                        </li>
                        <li>
                            L&apos;adresse IP, anonymisee, pour des raisons de
                            securite du site
                        </li>
                    </ul>

                    <h2>Cookies</h2>
                    <p>
                        Ce site utilise des cookies strictement necessaires au
                        fonctionnement technique du site. Ces cookies ne collectent
                        pas de donnees personnelles et ne necessitent pas de
                        consentement prealable. Nous n&apos;utilisons pas de cookies
                        publicitaires ou de tracage tiers.
                    </p>

                    <h2>Base legale du traitement</h2>
                    <p>
                        Le traitement des donnees repose sur l&apos;interet
                        legitime de fournir un site fonctionnel et securise. Aucun
                        traitement base sur le consentement n&apos;est mis en oeuvre
                        dans la mesure ou aucun formulaire de collecte n&apos;est
                        propose.
                    </p>

                    <h2>Destinataires des donnees</h2>
                    <p>
                        Les donnees collectees sont exclusivement destinees a
                        l&apos;editeur du site. Elles ne sont pas transmises a des
                        tiers, a l&apos;exception des sous-traitants techniques
                        (hebergeur, outil d&apos;analyse) qui agissent sous nos
                        instructions et dans le respect du RGPD.
                    </p>

                    <h2>Duree de conservation</h2>
                    <p>
                        Les donnees de navigation anonymisees sont conservees pour
                        une duree maximale de 13 mois. Les logs de connexion sont
                        conserves pendant 6 mois maximum.
                    </p>

                    <h2>Vos droits</h2>
                    <p>
                        Conformement au Reglement General sur la Protection des
                        Donnees (RGPD) et a la loi Informatique et Libertes, vous
                        disposez des droits suivants :
                    </p>
                    <ul>
                        <li>Droit d&apos;acces a vos donnees personnelles</li>
                        <li>Droit de rectification des donnees inexactes</li>
                        <li>Droit a l&apos;effacement de vos donnees</li>
                        <li>Droit a la limitation du traitement</li>
                        <li>Droit a la portabilite de vos donnees</li>
                        <li>Droit d&apos;opposition au traitement</li>
                    </ul>
                    <p>
                        Pour exercer ces droits, veuillez nous contacter par email
                        a contact@myphoneexpress-06.fr. Nous nous engageons a
                        repondre a votre demande dans un delai d&apos;un mois.
                    </p>

                    <h2>Securite</h2>
                    <p>
                        Nous mettons en oeuvre des mesures techniques et
                        organisationnelles appropriees pour proteger vos donnees
                        contre tout acces non autorise, alteration, divulgation ou
                        destruction.
                    </p>

                    <h2>Modifications</h2>
                    <p>
                        La presente politique de confidentialite peut etre modifiee
                        a tout moment. La version en vigueur est celle accessible
                        sur cette page. Nous vous invitons a la consulter
                        regulierement.
                    </p>

                    <h2>Contact</h2>
                    <p>
                        Pour toute question relative a cette politique de
                        confidentialite, vous pouvez nous contacter a l&apos;adresse
                        email : contact@myphoneexpress-06.fr.
                    </p>
                </div>
            </section>
        </>
    );
}

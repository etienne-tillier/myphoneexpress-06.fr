# Brief de génération de site (niche-starter)

Ce fichier est auto-généré depuis Website Manager.
L'agent doit lire d'abord `AGENTS.md`, puis ce fichier.
⚠️ Ce fichier est la source de vérité du brief: ne pas l'écraser avec un template générique.

---

## 1) Infos projet

- `site_name`: myphoneexpress-06.fr
- `site_domain`: myphoneexpress-06.fr
- `site_url`: https://myphoneexpress-06.fr
- `default_locale`: fr-FR
- `site_id` (UUID Supabase): 659749f3-89e5-42c5-852c-a8d14e3996b0
- `tier` (`tier1` / `tier2`): tier2

## 2) Positionnement éditorial

- Thématique: Telecom
- Audience cible:
- Objectif business:
- Ton éditorial:
- Angles à privilégier:
- Angles interdits:

## 3) Arborescence souhaitée

- Pages de navigation (hors blog):
- Sections homepage attendues:
- CTA principal:
- CTA secondaire:

## 4) Contraintes SEO

- Requêtes principales:
- Entités importantes:
- Concurrents de référence:
- Règles de maillage interne spécifiques:
- URLs legacy à rediriger (si applicable):
  - (aucune)
  - Si l'URL contient des caractères encodés (`%C3%A9`, etc.), la décoder d'abord puis slugifier proprement (ne jamais produire des slugs de type `c3a9`/`c3a8`).

## 5) Direction artistique

- Univers visuel:
- Inspirations:
- Couleurs souhaitées / évitées:
- Style typographique:
- Niveau d'animation:
- Niveau de sobriété (1-10):

## 6) Assets (R2 / médias)

⚠️ **OBLIGATOIRE** : utiliser ces images dans le site. Ne PAS les ignorer. Ne PAS créer de SVG placeholder.

- Bucket/source: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/
- Images hero:
  - Hero principal: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-hero-global-network.jpeg
- Images sections:
  - Section solutions: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-solutions-world-map.jpeg
  - Section comparatifs: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-comparatifs-mobile-apps.jpeg
  - Section guides: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-guides-technical-setup.jpeg
  - Section confiance: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-trust-certifications.jpeg
  - Section FAQ: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-faq-customer-support.jpeg

### Liste complète des images à utiliser :
  - Hero principal: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-hero-global-network.jpeg
  - Section solutions: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-solutions-world-map.jpeg
  - Section comparatifs: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-comparatifs-mobile-apps.jpeg
  - Section guides: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-guides-technical-setup.jpeg
  - Section confiance: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-trust-certifications.jpeg
  - Section FAQ: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-faq-customer-support.jpeg
- Contraintes de ratio/poids:

## 7) Contraintes techniques

### Règle critique — Blog Supabase

**Ne jamais réécrire la couche data du blog.**
Les pages `/blog`, `/blog/[slug]`, `/blog/categorie/[slug]` et les sitemaps DOIVENT passer par `lib/blog.ts`.

Helpers autorisés (et obligatoires) :
- `getPublishedBlogPosts()` — page listing `/blog`
- `getBlogPostBySlug()` — page article `/blog/[slug]`
- `getBlogPostsByCategory()` — page catégorie
- `getBlogPostsForSitemap()` — sitemap

Interdictions absolues :
- `.from("articles")` ou `.from('articles')` — la table s'appelle `blog_posts`
- `.eq("domain", ...)` pour filtrer des articles — utiliser `site_id`
- Réécrire ou remplacer `lib/blog.ts` par une autre implémentation

Il est autorisé de modifier le **design** des pages blog, jamais leur **logique de récupération des données**.

### Autres contraintes

- Le code doit respecter strictement les règles de `AGENTS.md`.
- Ne pas modifier les fichiers Core interdits.
- Pas de `select("*")` ajouté.
- Pas de faux articles.
- Aucune page 404.
- Toute page additionnelle liée (outil, carte, simulateur, etc.) doit être implémentée et réellement remplie.
- Si une page n'existe pas, aucun lien ne doit pointer vers elle.
- Tout lien vers le même domaine doit être traité comme lien interne dofollow.
- Les redirections legacy doivent pointer vers des slugs décodés/normalisés (jamais vers des slugs encodés type `c3a9`).
- `npm run build` doit passer.

## 8) Données légales à injecter

- Mentions légales (éditeur):
- Contact public:
- DPO/contact RGPD:
- Hébergeur:

---

## 9) Données source Website Manager

### Brief éditorial brut

Ok, l'idée du site, c'est de faire un site sur comment avoir un numéro de téléphone rapidement, que ce soit en France ou à l'étranger pour partir en voyage. Donc toutes les techniques, les meilleurs endroits, les meilleures plateformes pour dégoter un numéro, que ce soit gratuitement en payant pour combien de temps, selon le besoin. Est-ce qu'il y a les appels ? Est-ce qu'on peut recevoir les messages, on peut les envoyer ? Est-ce que c'est valable à l'étranger ? Quel genre de numéro ? On peut avoir un numéro français, un numéro canadien, un numéro américain. Et le but c'est de l'avoir rapidement. Est-ce que ça engage aussi derrière en responsabilité pour certains cas d'utilisation ? Aussi répondre aux questions les plus pointues et nichées sur cette thématique.

### Description générée

# MyPhoneExpress-06 - Guide Expert des Numéros de Téléphone Express

MyPhoneExpress-06.fr est un site de référence spécialisé dans l'obtention rapide de numéros de téléphone, que ce soit en France ou à l'international. Le site s'adresse aux voyageurs, expatriés, entrepreneurs et particuliers ayant besoin d'un numéro de téléphone temporaire ou permanent dans différents pays.

## Objectif et Public Cible

Le site vise à devenir la ressource ultime pour comprendre et maîtriser toutes les techniques d'acquisition de numéros de téléphone virtuels et physiques. Il cible un public averti recherchant des solutions pratiques, légales et efficaces pour obtenir des numéros français, canadiens, américains ou d'autres pays selon leurs besoins spécifiques.

## Contenu et Stratégie

Le contenu se concentre sur des guides détaillés, comparatifs de plateformes, analyses des coûts, explications des implications légales et réglementaires. Le site répond aux questions techniques pointues : capacités d'appels entrants/sortants, réception SMS, validité à l'étranger, durée d'engagement, et responsabilités juridiques selon les cas d'usage. L'approche éditoriale privilégie l'expertise technique et la transparence pour établir la confiance avec une audience exigeante en matière de télécommunications.

### Prompt IA généré

Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu spécialisé dans les télécommunications.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- Nom du projet : MyPhoneExpress-06
- Domaine : myphoneexpress-06.fr
- Type de site : Site de référence technique et money site
- Thématiques : Telecom, numéros virtuels, communication internationale
- Objectif business : Génération de leads, affiliation avec plateformes telecom, monétisation par expertise
- Audience cible : Voyageurs fréquents, expatriés, entrepreneurs, utilisateurs avertis en telecom

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs** décrivant l'ambiance du site : Technique, Fiable, Rapide, International, Moderne
- **Références visuelles mentales** : Réseaux de télécommunication, satellites, connexions globales, circuits électroniques, signaux radio
- **Émotions à évoquer** chez le visiteur : Confiance technologique, efficacité, connectivité mondiale, expertise professionnelle

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers visuel ci-dessus, l'agent développeur devra :
1. S'inspirer des couleurs des signaux électroniques (bleus électriques, verts de circuits, oranges de transmission)
2. Créer une palette UNIQUE avec :
   - Couleur principale (primary) : Bleu technologique profond
   - Couleur secondaire (secondary) : Vert signal électronique
   - Couleur d'accent (accent) : Orange transmission énergique
   - Couleur de fond (background) : Gris très clair technologique
   - Variante hover : Versions plus intenses des couleurs principales
3. Assurer un contraste suffisant pour l'accessibilité

### Typographie
- Proposer une Google Font adaptée à l'univers technique moderne :
  - Principale : Inter ou Space Grotesk (lisibilité technique)
  - Titres : Orbitron ou Exo 2 (aspect technologique sans être trop futuriste)

## 2. SEO & métadonnées
- **Titre SEO principal** pour la home : "Obtenir un Numéro de Téléphone Rapidement | Guide Expert"
- **Méta-description principale** : "Guide complet pour obtenir rapidement un numéro de téléphone en France ou à l'étranger. Comparatifs, techniques et conseils d'experts."
- **Open Graph title** : "MyPhoneExpress-06 - Votre Expert en Numéros de Téléphone Express"

## 3. Rôle du template
- Le projet part d'un template Next.js existant
- Fichiers à mettre à jour :
  - `config/site.ts` (name, description, domain, navigation telecom)
  - `app/globals.css` (palette technologique selon méthodologie section 1)
  - contenus de démo dans `content/data/*` et MDX adaptés telecom
  - configuration blog Supabase (`SITE_DOMAIN`, routes spécialisées)

## 4. Contenu & structure à mettre en place
- Types de contenus à garder : blog technique, comparatifs plateformes, guides pays
- **Sections obligatoires sur la page d'accueil** (`/`) :
  - Hero ("Obtenez votre numéro en moins de 5 minutes", sous-titre expertise, CTA "Voir les solutions")
  - Section "Solutions par Pays" avec drapeaux et liens rapides
  - Section "Comparatif Plateformes" avec tableau des meilleures options
  - Section "Guides Techniques" mettant en avant les articles experts
  - Bloc "Pourquoi nous faire confiance" avec chiffres et certifications
  - FAQ rapide sur les questions les plus fréquentes
- Pages importantes : `/guides/[pays]`, `/comparatifs/[plateforme]`, `/blog/technique`
- Clusters thématiques : Numéros virtuels, Telecom internationale, Solutions business, Guides voyage

### Images pré-générées - À TÉLÉCHARGER ET INTÉGRER :
- Hero principal : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-hero-global-network.jpeg
- Section solutions : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-solutions-world-map.jpeg
- Section comparatifs : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-comparatifs-mobile-apps.jpeg
- Section guides : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-guides-technical-setup.jpeg
- Section confiance : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-trust-certifications.jpeg
- Section FAQ : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/myphoneexpress-06-fr-home-faq-customer-support.jpeg

## 5. Consignes éditoriales
- Ton à respecter : Expert mais accessible, technique sans jargon excessif, transparent sur les limitations
- Types d'articles attendus : Guides pays détaillés, comparatifs objectifs de plateformes, analyses légales, tutoriels techniques
- Contraintes à éviter : Promesses irréalistes sur la rapidité, conseils non-légaux, partenariats cachés
- Toujours mentionner les implications légales et les limitations géographiques

## 6. Fonctionnalités spécifiques
- Système de filtrage par pays/région
- Comparateur de plateformes avec critères techniques
- Base de connaissances FAQ avancée
- Alertes réglementaires par pays
- Calculateur de coûts selon usage

## 7. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN=myphoneexpress-06.fr, BLOG_API_SECRET)
- Mise à jour `config/site.ts` avec navigation telecom spécialisée
- **Création de la palette technologique UNIQUE** dans `app/globals.css`
- Logos adaptés telecom (`/public/logo.svg`, `/app/icon.svg`)
- Intégration blog Supabase avec filtrage domaine
- Composants spécialisés : tableaux comparatifs, cartes pays, calculateurs
- Vérifier `npm run lint` et `npm run build`

## 8. Anti-patterns à éviter
❌ Commencer à coder avant d'avoir créé le design system technologique
❌ Utiliser des couleurs génériques non adaptées à l'univers telecom
❌ Créer un design qui ressemble à tous les autres sites tech
❌ Négliger l'aspect international du contenu
❌ Oublier les mentions légales spécifiques aux télécommunications

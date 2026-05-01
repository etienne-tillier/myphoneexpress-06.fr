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
- Audience cible: Voyageurs fréquents, expatriés, entrepreneurs, utilisateurs avertis en telecom
- Objectif business: Génération de leads, affiliation avec plateformes telecom, monétisation par expertise
- Ton éditorial: Expert mais accessible, technique sans jargon excessif, transparent sur les limitations

## 3) Arborescence souhaitée

- Pages de navigation (hors blog): /, /guides, /comparatifs, /contact, /a-propos, /mentions-legales, /politique-confidentialite
- Sections homepage attendues: Hero, Solutions par Pays, Comparatif Plateformes, Guides Techniques, Confiance, FAQ
- CTA principal: Voir les solutions
- CTA secondaire: Comparer les plateformes

## 4) Contraintes SEO

- Titre SEO: "Obtenir un Numéro de Téléphone Rapidement | Guide Expert"
- Meta description: "Guide complet pour obtenir rapidement un numéro de téléphone en France ou à l'étranger. Comparatifs, techniques et conseils d'experts."
- Règles de maillage interne spécifiques: Tout lien vers le même domaine doit être interne dofollow

## 5) Direction artistique

- Univers visuel: Technique, Fiable, Rapide, International, Moderne
- Palette: Bleu technologique profond (primary), Vert signal électronique (secondary), Orange transmission (accent)
- Typographie: Inter ou Space Grotesk (principale), Orbitron ou Exo 2 (titres)

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

## 7) Contraintes techniques

### Règle critique — Blog Supabase

**Ne jamais réécrire la couche data du blog.**
Les pages `/blog`, `app/blog/[slug]/page.tsx`, `app/blog/categorie/[slug]/page.tsx` et les sitemaps DOIVENT passer par `lib/blog.ts`.

Helpers autorisés (et obligatoires) :
- `getPublishedBlogPosts()` — page listing `/blog`
- `getBlogPostBySlug()` — page article `/blog/[slug]`
- `getBlogPostsByCategory()` — page catégorie
- `getBlogPostsForSitemap()` — sitemap

Interdictions absolues :
- `.from("articles")` ou `.from('articles')` — la table s'appelle `blog_posts`
- `.eq("domain", ...)` pour filtrer des articles — utiliser `site_id`
- Réécrire ou remplacer `lib/blog.ts` par une autre implémentation

### Autres contraintes

- Pas de formulaire de contact (email mailto uniquement)
- Pas de newsletter
- ZERO faux article (blog vide = "Aucun article pour le moment")
- `npm run build` doit passer
- Toutes les images doivent avoir alt text avec mots-clés
- Footer sans mention hébergeur
- Schema.org JSON-LD sur la homepage
- Sitemap multilingue

## 8) Données légales

- Contact: contact@myphoneexpress-06.fr

---

## 9) Prompt IA généré

Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu spécialisé dans les télécommunications.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
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

### Univers visuel à créer
- **5 adjectifs** : Technique, Fiable, Rapide, International, Moderne
- **Références visuelles** : Réseaux de télécommunication, satellites, connexions globales, circuits électroniques, signaux radio
- **Émotions à évoquer** : Confiance technologique, efficacité, connectivité mondiale, expertise professionnelle

### Palette de couleurs
- Couleur principale (primary) : Bleu technologique profond
- Couleur secondaire (secondary) : Vert signal électronique
- Couleur d'accent (accent) : Orange transmission énergique
- Couleur de fond (background) : Gris très clair technologique

### Typographie
- Principale : Inter ou Space Grotesk (lisibilité technique)
- Titres : Orbitron ou Exo 2 (aspect technologique)

## 2. SEO & métadonnées
- **Titre SEO principal** : "Obtenir un Numéro de Téléphone Rapidement | Guide Expert"
- **Méta-description** : "Guide complet pour obtenir rapidement un numéro de téléphone en France ou à l'étranger. Comparatifs, techniques et conseils d'experts."
- **Open Graph title** : "MyPhoneExpress-06 - Votre Expert en Numéros de Téléphone Express"

## 3. Rôle du template
- Fichiers à mettre à jour :
  - `config/site.ts` (name, description, domain, navigation telecom)
  - `app/globals.css` (palette technologique)
  - contenus de démo dans `content/data/*` et MDX adaptés telecom
  - configuration blog Supabase

## 4. Contenu & structure
- **Sections obligatoires sur la page d'accueil** (`/`) :
  - Hero ("Obtenez votre numéro en moins de 5 minutes", sous-titre expertise, CTA "Voir les solutions")
  - Section "Solutions par Pays" avec drapeaux et liens rapides
  - Section "Comparatif Plateformes" avec tableau des meilleures options
  - Section "Guides Techniques" mettant en avant les articles experts
  - Bloc "Pourquoi nous faire confiance" avec chiffres et certifications
  - FAQ rapide sur les questions les plus fréquentes
- Pages : `/guides/[pays]`, `/comparatifs/[plateforme]`

## 5. Consignes éditoriales
- Toujours mentionner les implications légales et les limitations géographiques
- Contenu utile, informatif, optimisé SEO
- Minimum 500 mots sur la homepage
- Maillage interne : chaque page lie vers 2-3 autres pages

## 6. Anti-patterns à éviter
❌ Commencer à coder avant d'avoir créé le design system technologique
❌ Utiliser des couleurs génériques non adaptées à l'univers telecom
❌ Créer un design qui ressemble à tous les autres sites tech
❌ Oublier les mentions légales spécifiques aux télécommunications

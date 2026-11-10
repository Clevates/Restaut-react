import './App.css'

const menu = [
  {
    name: 'Entrées',
    number: '01',
    dishes: [
      {
        name: 'Burrata des Pouilles',
        description: 'Tomates anciennes, pêches rôties, basilic frais et huile d’olive.',
        price: '14 €',
        image:
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=240&h=180&q=80',
        alt: 'Salade fraîche de tomates et légumes de saison',
      },
      {
        name: 'Velouté de saison',
        description: 'Courge rôtie, crème légère, noisettes torréfiées et pain grillé.',
        price: '11 €',
        image:
          'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=240&h=180&q=80',
        alt: 'Bol coloré de légumes frais et herbes',
      },
      {
        name: 'Tartare de saumon',
        description: 'Saumon frais, avocat, citron vert et aneth du jardin.',
        price: '16 €',
        image:
          'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=240&h=180&q=80',
        alt: 'Assiette composée de légumes frais et saumon',
      },
    ],
  },
  {
    name: 'Plats principaux',
    number: '02',
    dishes: [
      {
        name: 'Poulet fermier rôti',
        description: 'Jus au thym, pommes grenailles dorées et légumes du marché.',
        price: '24 €',
        image:
          'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=240&h=180&q=80',
        alt: 'Poulet rôti servi avec ses accompagnements',
      },
      {
        name: 'Risotto aux champignons',
        description: 'Riz carnaroli crémeux, champignons sauvages et parmesan affiné.',
        price: '22 €',
        image:
          'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=240&h=180&q=80',
        alt: 'Risotto crémeux aux champignons',
      },
      {
        name: 'Pavé de saumon',
        description: 'Saumon snacké, purée de petits pois et beurre citronné.',
        price: '26 €',
        image:
          'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=240&h=180&q=80',
        alt: 'Pavé de poisson grillé accompagné de légumes',
      },
    ],
  },
  {
    name: 'Desserts',
    number: '03',
    dishes: [
      {
        name: 'Tarte fine aux pommes',
        description: 'Pommes caramélisées, pâte feuilletée et crème fraîche.',
        price: '10 €',
        image:
          'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=240&h=180&q=80',
        alt: 'Tarte dorée aux pommes caramélisées',
      },
      {
        name: 'Mousse au chocolat',
        description: 'Chocolat noir grand cru, éclats de noisettes et fleur de sel.',
        price: '9 €',
        image:
          'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=240&h=180&q=80',
        alt: 'Dessert au chocolat noir décoré avec soin',
      },
      {
        name: 'Panna cotta vanille',
        description: 'Vanille de Madagascar, fruits rouges et coulis maison.',
        price: '9 €',
        image:
          'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=240&h=180&q=80',
        alt: 'Panna cotta à la vanille garnie de fruits',
      },
    ],
  },
]

const generatedRows = `<table>
  <tr><th>Nom du plat</th><th>Description</th><th>Prix</th></tr>
  <tr><th colspan="4">Entrées</th></tr>
  <tr><td><img src="plat.jpg"></td><td>Burrata des Pouilles</td><td>Tomates anciennes, pêches et basilic.</td><td>14 €</td></tr>
  <tr><td><img src="plat.jpg"></td><td>Velouté de saison</td><td>Courge rôtie, crème et noisettes.</td><td>11 €</td></tr>
  <tr><td><img src="plat.jpg"></td><td>Tartare de saumon</td><td>Saumon frais, avocat et citron vert.</td><td>16 €</td></tr>
  <tr><th colspan="4">Plats principaux</th></tr>
  <tr><td><img src="plat.jpg"></td><td>Poulet fermier rôti</td><td>Jus au thym et pommes grenailles.</td><td>24 €</td></tr>
  <tr><td><img src="plat.jpg"></td><td>Risotto aux champignons</td><td>Riz carnaroli et parmesan affiné.</td><td>22 €</td></tr>
  <tr><td><img src="plat.jpg"></td><td>Pavé de saumon</td><td>Saumon snacké et beurre citronné.</td><td>26 €</td></tr>
  <tr><th colspan="4">Desserts</th></tr>
  <tr><td><img src="plat.jpg"></td><td>Tarte fine aux pommes</td><td>Pommes caramélisées et pâte feuilletée.</td><td>10 €</td></tr>
  <tr><td><img src="plat.jpg"></td><td>Mousse au chocolat</td><td>Chocolat noir et fleur de sel.</td><td>9 €</td></tr>
  <tr><td><img src="plat.jpg"></td><td>Panna cotta vanille</td><td>Vanille, fruits rouges et coulis maison.</td><td>9 €</td></tr>
</table>
`

const correctedSnippet = `<table>
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Nom du plat</th>
      <th scope="col">Description</th>
      <th scope="col">Prix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="plat.jpg" alt="Salade de tomates fraîches"></td>
      <td>Burrata des Pouilles</td>
      <td>Tomates anciennes et basilic frais.</td>
      <td>14 €</td>
    </tr>
  </tbody>
</table>`

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#accueil" aria-label="Le Jardin, accueil">
          <span className="wordmark-icon" aria-hidden="true">L</span>
          <span>LE JARDIN<span className="wordmark-period">.</span></span>
        </a>
        <nav aria-label="Navigation principale">
          <a className="nav-link" href="#menu">La carte</a>
          <a className="reserve-link" href="mailto:bonjour@lejardin.fr">Réserver une table <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="accueil">
        <section className="intro" aria-labelledby="page-title">
          <div className="intro-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> CUISINE DE SAISON · PARIS 11<sup>e</sup></p>
            <h1 id="page-title">Les bonnes<br /><em>choses</em> prennent<br />leur temps.</h1>
            <p className="intro-description">Une cuisine sincère, des produits du marché et toujours une place à votre table.</p>
            <a className="menu-cta" href="#menu">Découvrir la carte <span aria-hidden="true">↓</span></a>
          </div>
          <figure className="intro-photo">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1100&h=1000&q=85"
              alt="Grande assiette de saison aux légumes frais et herbes"
            />
            <figcaption><span>LE MARCHÉ, CHAQUE MATIN</span><span>01 — 03</span></figcaption>
            <span className="photo-stamp" aria-hidden="true">FRAIS<br />& LOCAL</span>
          </figure>
          <p className="side-note">BON, BEAU, DE SAISON <span>✳</span> FAIT MAISON</p>
        </section>

        <section className="menu-section" id="menu" aria-labelledby="menu-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> SIMPLE ET DE SAISON</p>
              <h2 id="menu-title">La carte<span className="heading-period">.</span></h2>
            </div>
            <p className="menu-note">Des assiettes qui suivent le rythme des saisons.<br />Produits frais, cuisinés avec cœur.</p>
          </div>

          <div className="table-wrap">
            <table className="menu-table">
              <caption className="visually-hidden">Menu du restaurant Le Jardin : entrées, plats principaux et desserts</caption>
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Nom du plat</th>
                  <th scope="col">Description</th>
                  <th scope="col">Prix</th>
                </tr>
              </thead>
              {menu.map((category) => (
                <tbody key={category.name}>
                  <tr className="category-row">
                    <th scope="rowgroup" colSpan="4">
                      <span className="category-number">{category.number}</span>
                      <span>{category.name}</span>
                      <span className="dish-count">{String(category.dishes.length).padStart(2, '0')} ASSIETTES</span>
                    </th>
                  </tr>
                  {category.dishes.map((dish) => (
                    <tr className="dish-row" key={dish.name}>
                      <td className="dish-image">
                        <img src={dish.image} alt={dish.alt} loading="lazy" />
                      </td>
                      <th className="dish-name" scope="row">{dish.name}</th>
                      <td className="dish-description">{dish.description}</td>
                      <td className="dish-price">{dish.price}</td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
          <p className="season-note"><span aria-hidden="true">✳</span> La carte évolue selon les arrivages du marché. N’hésitez pas à nous demander les options végétariennes.</p>
        </section>

        <section className="creation-section" aria-labelledby="creation-title">
          <div className="creation-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> LES COULISSES DE LA CARTE</p>
            <h2 id="creation-title">Du prompt à<br /><em>l’assiette.</em></h2>
            <p className="creation-description">J’ai construit le tableau, puis utilisé l’IA pour proposer des idées de plats. Voici la demande, un extrait de sa réponse et les améliorations apportées.</p>
          </div>
          <div className="creation-content">
            <article className="work-card">
              <p className="card-label"><span>01</span> MA REQUÊTE À L’IA</p>
              <p className="prompt-text">« Propose le contenu d’un menu de restaurant français de saison : trois entrées, trois plats principaux et trois desserts. Pour chaque plat, donne un nom appétissant, une description courte et un prix en euros. Présente la réponse en lignes de tableau HTML avec une image et un texte alternatif descriptif pour chaque plat. »</p>
            </article>
            <article className="work-card">
              <p className="card-label"><span>02</span> EXTRAIT DE LA RÉPONSE GÉNÉRÉE</p>
              <pre className="code-sample"><code>{generatedRows}</code></pre>
              <p className="small-note">À corriger : les images n’ont pas de texte alternatif et l’en-tête oublie la colonne Image. La version revue, avec les 9 plats en 3 catégories, est intégrée à la carte ci-dessus.</p>
            </article>
            <article className="work-card fix-card">
              <p className="card-label"><span>03</span> VÉRIFICATION & CORRECTIONS</p>
              <pre className="code-sample corrected-sample"><code>{correctedSnippet}</code></pre>
              <p className="fix-explanation">J’ai ajouté un <code>alt</code> descriptif à chaque image pour l’accessibilité et corrigé la structure du tableau avec un en-tête <code>thead</code>, des colonnes explicites et des cellules bien placées. J’ai aussi regroupé les plats par catégorie et adapté le balisage pour que les titres de section et les prix soient faciles à parcourir.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#accueil">
          <span className="wordmark-icon" aria-hidden="true">L</span>
          <span>LE JARDIN<span className="wordmark-period">.</span></span>
        </a>
        <p>Bon, beau, de saison. <span>Fait avec cœur à Paris.</span></p>
        <a className="back-top" href="#accueil">RETOUR EN HAUT ↑</a>
      </footer>
    </>
  )
}

export default App

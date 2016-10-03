import React from 'react';
import {
	Appear,
	Deck,
	Heading,
	Image,
	ListItem,
	List,
	Slide,
	Spectacle,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from 'spectacle-code-slide';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

// images
import css from '../assets/css.png';
import container from '../assets/container.gif';
import cssDoom from '../assets/cssDoom.gif';
import question from '../assets/question.gif';
import toolbox from '../assets/toolbox.gif';
import typing from '../assets/typing.gif';
import typography from '../assets/typography.gif';
import choices from '../assets/choices.gif';
import explore from '../assets/explore.gif';

// code
import cssDefs from '../assets/cssDefs.example';
import cssSelectors from '../assets/cssSelectors.example';

preloader({
	css,
	container,
	cssDoom,
	question,
	toolbox,
	typing,
	typography,
	choices,
	explore,
});

const theme = createTheme({
	primary: '#353238',
	brick: '#BE5A38',
});

const Presentation = () => (
	<Spectacle theme={theme}>
		<Deck transition={['zoom', 'fade']} transitionDuration={500}>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="brick">
					HTML (encore!) et CSS (enfin!)
				</Heading>
				<Heading size={1} fit caps>
					Conteneurs, cascade et couleurs criardes
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Image src={css} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="white">
					(Ou presque!)
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Image src={container} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="white">
					Mais d'abord, les conteneurs HTML!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="brick">
					Block et inline
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						certaines balises sont de type <em>block</em>, d'autres sont <em>inline</em>
					</ListItem></Appear>
					<Appear><ListItem>
						quelle différence?? (un indice testez &lt;p&gt; et &lt;strong&gt; par exemple)
					</ListItem></Appear>
					<Appear><ListItem>
						une balise block crée un retour à la ligne avant ET après celle-ci
						(et peut être redimensionnée!!!)
					</ListItem></Appear>
					<Appear><ListItem>
						une balise inline écrit le texte à la suite sans retour à la ligne
					</ListItem></Appear>
					<Appear><ListItem>
						faire une liste de chaque type d'éléments avec le cours précédent
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="brick">
					Les conteneurs génériques
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						ils n'ont aucun sens particuliers
					</ListItem></Appear>
					<Appear><ListItem>
						permettent de grouper d'autres balises
					</ListItem></Appear>
					<Appear><ListItem>
						afin de factoriser le stylage
					</ListItem></Appear>
					<Appear><ListItem>
						un conteneur générique de type block: &lt;div&gt;
					</ListItem></Appear>
					<Appear><ListItem>
						un conteneur générique de type inline: &lt;span&gt;
					</ListItem></Appear>
					<Appear><ListItem>
						réfléchir à leur usage
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="brick">
					Avec HTML5, voici les conteneurs sémantiques
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						&lt;section&gt;, &lt;article&gt;, &lt;nav&gt;,
						&lt;aside&gt;, &lt;header&gt;, &lt;footer&gt;
					</ListItem></Appear>
					<Appear><ListItem>
						éléments couramment trouvés sur une page HTML
					</ListItem></Appear>
					<Appear><ListItem>
						lire ce très bon article : <a className="link" href="http://www.alsacreations.com/article/lire/1376-html5-section-article-nav-header-footer-aside.html" target="_blank" rel="noopener noreferrer">HTML5 : Nouveaux éléments de section, article, header, footer, aside, nav</a>
					</ListItem></Appear>
					<Appear><ListItem>
						comparer la page que vous avez préparée avec cela
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={cssDoom} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="brick">
					A vous les couleurs moches (et les prises de tête!)
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="brick">
					CSS ...
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						veut dire <em>Cascading Stylesheets</em>
					</ListItem></Appear>
					<Appear><ListItem>
						permet de styler les éléments HTML
						(donc ne <b>jamais</b> choisir un élément HTML pour son style, mais pour son sens)
					</ListItem></Appear>
					<Appear><ListItem>
						permet de positionner les éléments HTML sur la page
					</ListItem></Appear>
					<Appear><ListItem>
						repose sur le <em>box model</em> : <a className="link" href="https://developer.mozilla.org/fr/Apprendre/CSS/Les_bases/Le_mod%C3%A8le_de_bo%C3%AEte" target="_blank" rel="noopener noreferrer">Le modèle de boîte</a>
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={question} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="brick">
					Attribut style, balise style ou feuille de style??
				</Heading>
			</Slide>
			<CodeSlide
				transition={[]}
				lang="markup"
				code={cssDefs}
				ranges={[
					{ loc: [0, 1], note: 'Via l\'attribut HTML style' },
					{ loc: [1, 10], note: 'Via la balise <style> dans le <head>' },
					{ loc: [10, 13], note: 'Dans un fichier séparé' },
					{ loc: [13, 18], note: 'Que l\'on importe dans le <head>' },
					{ loc: [0, 18], note: 'Essayez les 3 techniques' },
				]}
			/>
			<Slide bgColor="primary">
				<Image src={choices} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="brick">
					Les sélecteurs CSS
				</Heading>
			</Slide>
			<CodeSlide
				transition={[]}
				lang="css"
				code={cssSelectors}
				ranges={[
					{ loc: [0, 1], note: 'Un commentaire en CSS' },
					{ loc: [1, 4], note: 'Sélecteur de balise' },
					{ loc: [4, 7], note: 'Sélecteur de classe' },
					{ loc: [7, 10], note: 'Sélecteur d\'id' },
				]}
			/>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="brick">
					Attributs HTML <em>id</em> et <em>class</em>
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						permettent de faire le lien entre l'élément HTML et son CSS
					</ListItem></Appear>
					<Appear><ListItem>
						ordre de spécificité
					</ListItem></Appear>
					<Appear><ListItem>
						tester et comprendre l'ordre de spécificité
					</ListItem></Appear>
					<Appear><ListItem>
						lire ce très bon article : <a className="link" href="https://developer.mozilla.org/fr/docs/CSS/Premiers_pas/Les_s%C3%A9lecteurs" target="_blank" rel="noopener noreferrer">Les sélecteurs</a>
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="brick">
					Positionner les éléments et mise en page
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						créer un fichier CSS séparé (à préférer aux autres techniques de stylage)
					</ListItem></Appear>
					<Appear><ListItem>
						lire ce très bon article : <a className="link" href="https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/le-positionnement-en-css" target="_blank" rel="noopener noreferrer">Quelques autres techniques de mise en page</a>
					</ListItem></Appear>
					<Appear><ListItem>
						bien le lire!!!
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={toolbox} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="brick">
					Construire sa boite à outils
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="brick">
					Atom est un outil <strong>PUISSANT</strong>
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						un système de plugins très complets, installer <em>atom-live-server</em>
					</ListItem></Appear>
					<Appear><ListItem>
						voir : <a className="link" href="https://atom.io/packages" target="_blank" rel="noopener noreferrer">Packages make Atom do amazing things.</a>
					</ListItem></Appear>
					<Appear><ListItem>
						<a className="link" href="http://d2wy8f7a9ursnm.cloudfront.net/atom-editor-cheat-sheet.pdf" target="_blank" rel="noopener noreferrer">maîtriser les racourcis!</a>
					</ListItem></Appear>
					<Appear><ListItem>
						séparer son écran, curseur multiple, etc.
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={typing} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="brick">
					Mise en page HTML via CSS
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="brick">
					Modifier votre page HTML
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						utiliser les conteneurs sémantiques pour organiser votre contenu
					</ListItem></Appear>
					<Appear><ListItem>
						placer votre contenu via CSS
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={typography} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="brick">
					Utiliser une fonte
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="brick">
					La fonte vient d'une feuille de style
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						aller sur <a className="link" href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Fonts</a>
					</ListItem></Appear>
					<Appear><ListItem>
						importer une belle fonte
					</ListItem></Appear>
					<Appear><ListItem>
						<strong>éviter d'abuser des fonts! 2 voire 3 est un max sur une page</strong>
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={explore} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="brick">
					Explorer les propriétés CSS
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="brick">
					A vous de jouer!
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						une liste exhaustive <a className="link" href="https://developer.mozilla.org/fr/docs/Web/CSS/Reference" target="_blank" rel="noopener noreferrer">Référence CSS</a>
					</ListItem></Appear>
					<Appear><ListItem>
						demandez-moi!
					</ListItem></Appear>
				</List>
			</Slide>
		</Deck>
	</Spectacle>
);

export default Presentation;

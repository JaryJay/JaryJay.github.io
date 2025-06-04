export interface Project {
	name: string;
	description: string;
	devpostLink?: string;
	githubLink?: string;
	playLink?: string;
	imageUrls: string[];
}

export const projects: Project[] = [
	{
		name: 'Chess Roguelike',
		description:
			"A procedurally generated chess dungeon crawler mobile game with upgrades and progression.\nComing soon to Google Play and the App Store!\nIt's built with Godot 4.4. It uses an in-house AI inspired\n If you want to try out the alpha, please contact me -- you will need to provide your email.\n\nP.S. The game has no ads, because I never bothered to add them.",
		githubLink: 'https://github.com/JaryJay/chess-roguelike',
		imageUrls: [
			'/projects/chess-roguelike/faction-select.png',
			'/projects/chess-roguelike/gameplay.png',
		],
	},
	{
		name: 'Spring Dynasty',
		description:
			"A real-time strategy game where you command an army of squads to battle against up to 5 other players. It's built with Godot 4.2!\nSpring Dynasty offers a singleplayer campaign and a multiplayer free-for-all experience.",
		githubLink: 'https://github.com/JaryJay/spring-dynasty',
		imageUrls: [
			'/projects/spring-dynasty/image.png',
			'/projects/spring-dynasty/image2.png',
			'/projects/spring-dynasty/image3.png',
		],
	},
	{
		name: 'Personal Website',
		description:
			"This site that you're looking at right now!\nBuilt with Svelte, ShadCN, and TailwindCSS.\nIt's a static website hosted with GitHub Pages.",
		githubLink: 'https://github.com/JaryJay/JaryJay.github.io',
		imageUrls: ['/projects/JaryJay.github.io/image.png'],
	},
	{
		name: 'Facebook Bot',
		description:
			'A desktop app that automatically scrapes Facebook Marketplace for deals.\nBuilt with Electron, Typescript, Vue.js, Selenium, and TailwindCSS!',
		githubLink: 'https://github.com/JaryJay/facebook-bot',
		imageUrls: ['/projects/facebook-bot/image.png'],
	},
	{
		name: 'Java Serialization Library',
		description:
			'A Java serialization library, optimized for compactness.\nComes with a webapp (built in Vue) for generating boilerplate code.',
		devpostLink: 'https://derealizer-class-generator.netlify.app/#/',
		githubLink: 'https://github.com/virtual-cardboard/derealizer',
		imageUrls: ['/projects/derealizer/image.png'],
	},
	{
		name: 'TTRPG command-line tool',
		description:
			'A command-line tool for DMs to manage tabletop role-playing games, made in plain Java.',
		githubLink: 'https://github.com/JaryJay/jaryjay-sharnon',
		imageUrls: [
			'https://raw.githubusercontent.com/JaryJay/jaryjay-sharnon/main/screenshots/screenshot2.png',
		],
	},
];

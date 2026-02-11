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
		name: 'Sentir',
		description:
			"An AI autocomplete Chrome extension for every input field.\nIt's built with React, and runs on Gemini 2.0 Flash.\n\nIt's still a work in progress, but you can watch the GitHub repo for updates!",
		githubLink: 'https://github.com/JaryJay/sentir',
		imageUrls: ['/projects/sentir/image.png'],
	},
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

export const hackathonProjects: Project[] = [
	{
		name: 'Robotany',
		description:
			'A smart, remote-controlled, NLP-powered flowerpot that my team and I made for Hack the North 2023. We were one of the finalists -- the top 12 out of 250 teams!',
		devpostLink: 'https://devpost.com/software/the-plant-whisperer',
		githubLink: 'https://github.com/Dissonant101/htn-23',
		imageUrls: [
			'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/591/793/datas/gallery.jpg',
			'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/592/105/datas/gallery.jpg',
		],
	},
	{
		name: 'Hermitrade',
		description:
			'An ethereum-based second-hand electronics marketplace made with React, Typescript and Solidity. This project, which I worked on with 3 other cool people, won 2 prizes 🏆 at JamHacks 2022!',
		devpostLink: 'https://devpost.com/software/hermitrade',
		githubLink: 'https://github.com/Dissonant101/hermitrade',
		imageUrls: [
			'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/986/791/datas/gallery.jpg',
			'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/986/796/datas/gallery.jpg',
			'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/986/902/datas/gallery.jpg',
		],
	},
	{
		name: 'Lost In Gravity',
		description:
			'A gravity-bending, grenade-slinging horror game where you navigate a maze and destroy robots.\nMade in Unity, and won 2nd place out of 28 teams.',
		devpostLink: 'https://devpost.com/software/lost-in-gravity',
		playLink: 'https://play.unity.com/mg/other/webgl-builds-216024',
		imageUrls: [
			'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/021/947/datas/gallery.jpg',
			'./projects/lost-in-gravity/image2.png',
		],
	},
];

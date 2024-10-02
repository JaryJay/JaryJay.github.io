<script lang="ts">
	import Card from './Card.svelte';
	import type { Project } from './projects/project';
	import ProjectCard from './projects/ProjectCard.svelte';

	type BlogPreview = {
		name: string;
		description: string;
	};

	const blogs: BlogPreview[] = [
		{ name: 'Test Blog', description: 'Lorem ipsum dolor sit amet' },
		{ name: 'Test Blog', description: 'Lorem ipsum dolor sit amet' },
		{ name: 'Test Blog', description: 'Lorem ipsum dolor sit amet' }
	];

	const projects: Project[] = [
		{
			name: 'Spring Dynasty',
			description:
				"A real-time strategy game where you command an army of squads to battle against up to 5 other players. It's built with Godot 4.2!\nSpring Dynasty offers a singleplayer campaign and a multiplayer free-for-all experience.",
			githubLink: 'https://github.com/JaryJay/spring-dynasty',
			imageUrl:
				'https://private-user-images.githubusercontent.com/47123100/279412708-b8181df4-5b4e-48ac-b519-52a67cc1e4b0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjc5MDA4NDgsIm5iZiI6MTcyNzkwMDU0OCwicGF0aCI6Ii80NzEyMzEwMC8yNzk0MTI3MDgtYjgxODFkZjQtNWI0ZS00OGFjLWI1MTktNTJhNjdjYzFlNGIwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDAyVDIwMjIyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTYwNzZiZjEzYTRmNmMwMTUzNjVlMWY5Mjk3NzU3NDg1MzRmODI3OTU3ZjdkMDM4NWUyOTI2NjhiOWVkYmQ2NzYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.dfueRDkjW4wF6pxor_q5iZPw2yz-LaTuAXtEKl840vI'
		}
	];

	const hackathonProjects: Project[] = [
		{
			name: 'Robotany',
			description:
				'A smart, remote-controlled, NLP-powered flowerpot that my team and I made for Hack the North 2023. We were one of the finalists -- the top 12 out of 250 teams!',
			devpostLink: 'https://devpost.com/software/the-plant-whisperer',
			githubLink: 'https://github.com/Dissonant101/htn-23',
			imageUrl:
				'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/591/793/datas/gallery.jpg'
		},
		{
			name: 'Hermitrade',
			description:
				'An ethereum-based second-hand electronics marketplace made with React, Typescript and Solidity. This project, which I worked on with 3 other cool people, won 2 prizes 🏆 at JamHacks 2022!',
			devpostLink: 'https://devpost.com/software/hermitrade',
			githubLink: 'https://github.com/Dissonant101/hermitrade',
			imageUrl:
				'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/986/791/datas/gallery.jpg'
		}
	];
</script>

<svelte:head>
	<title>Jay's Website</title>
	<meta name="description" content="Welcome to my personal website!" />
</svelte:head>

<section class="home-section">
	<div class="space-y-1 md:space-y-4">
		<h1 class="text-3xl sm:text-4xl md:text-6xl text-stone-700 font-semibold">Jay Ren</h1>
		<h3 class="text-lg sm:text-xl md:text-2xl text-stone-400 font-semibold">Software Developer</h3>
	</div>
</section>
<div
	class="-z-20 border-b-2 border-stone-400 border-opacity-10 border-dashed w-full transform skew-y-2 absolute"
>
	<div class="flex justify-end sm:justify-between">
		<div class="hidden sm:flex transform translate-y-1/2 gap-1 md:gap-2">
			<div class="bg-stone-400 h-4 md:h-6 w-12 lg:w-24 rounded-full" />
			<div class="bg-stone-200 h-4 md:h-6 w-12 rounded-full" />
			<div
				class="bg-amber-500 bg-opacity-40 h-4 sm:h-6 md:h-8 w-24 lg:w-48 absolute transform -translate-y-3 translate-x-4 md:-translate-y-6 md:translate-x-8 rounded-full"
			/>
		</div>
		<div class="flex flex-row-reverse gap-1 md:gap-2 transform translate-y-1/2">
			<div class="bg-stone-500 h-4 md:h-6 w-16 sm:w-24 rounded-full" />
			<div class="bg-stone-200 h-4 md:h-6 w-6 rounded-full" />
			<div class="bg-amber-500 h-4 md:h-6 w-12 rounded-full" />
			<div
				class="bg-amber-500 bg-opacity-40 h-4 sm:h-6 md:h-8 w-48 absolute transform translate-y-3 -translate-x-4 md:translate-y-4 md:-translate-x-8 rounded-full"
			/>
		</div>
	</div>
</div>
<div class="pb-4" />
<section class="home-section text-stone-700 space-y-1 md:space-y-4">
	<h2 class="section-label">Blog</h2>
	<div class="flex gap-4">
		{#each blogs as blog}
			<Card title={blog.name} description={blog.description} />
		{/each}
	</div>
</section>
<section class="home-section text-stone-700 space-y-1 md:space-y-4">
	<h2 class="section-label">Projects</h2>
	<div class="flex gap-4">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
<section class="home-section text-stone-700 space-y-1 md:space-y-4">
	<h2 class="section-label">Hackathon Wins</h2>
	<div class="flex gap-4 max-w-full">
		{#each hackathonProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<style>
	.home-section {
		@apply mx-auto max-w-xl sm:max-w-[640px] md:max-w-3xl lg:max-w-5xl px-4 my-2 sm:my-4 md:my-8;
	}
	.section-label {
		@apply text-lg sm:text-xl md:text-3xl font-semibold;
	}
</style>

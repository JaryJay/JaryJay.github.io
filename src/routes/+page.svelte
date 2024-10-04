<script lang="ts">
	import LineDecoration from '@/components/LineDecoration.svelte';
	import { type Project, projects } from './projects/project';
	import ProjectCard from './projects/ProjectCard.svelte';

	type BlogPreview = {
		name: string;
		description: string;
	};

	const blogs: BlogPreview[] = [
		{ name: 'Test Blog', description: 'Lorem ipsum dolor sit amet' },
		{ name: 'Test Blog', description: 'Lorem ipsum dolor sit amet' },
		{ name: 'Test Blog', description: 'Lorem ipsum dolor sit amet' },
	];

	const firstTwoProjects = projects.slice(0, 2);

	const hackathonProjects: Project[] = [
		{
			name: 'Robotany',
			description:
				'A smart, remote-controlled, NLP-powered flowerpot that my team and I made for Hack the North 2023. We were one of the finalists -- the top 12 out of 250 teams!',
			devpostLink: 'https://devpost.com/software/the-plant-whisperer',
			githubLink: 'https://github.com/Dissonant101/htn-23',
			imageUrl:
				'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/591/793/datas/gallery.jpg',
		},
		{
			name: 'Hermitrade',
			description:
				'An ethereum-based second-hand electronics marketplace made with React, Typescript and Solidity. This project, which I worked on with 3 other cool people, won 2 prizes 🏆 at JamHacks 2022!',
			devpostLink: 'https://devpost.com/software/hermitrade',
			githubLink: 'https://github.com/Dissonant101/hermitrade',
			imageUrl:
				'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/986/791/datas/gallery.jpg',
		},
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
<LineDecoration class="absolute transform rotate-2" />
<div class="pb-4" />
<section class="home-section text-stone-700 space-y-1 md:space-y-4">
	<h2 class="section-label">Blog</h2>
	<div class="flex gap-4">
		<div
			class="rounded-lg border-2 border-stone-200 border-dashed w-full flex justify-center p-4 text-sm md:text-xl"
		>
			🚧 This section is under construction! 🚧
		</div>
	</div>
</section>
<section class="home-section text-stone-700 space-y-1 md:space-y-4">
	<div class="flex gap-4 items-center">
		<h2 class="section-label">Projects</h2>
		<!-- <ArrowButton>More</ArrowButton> -->
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
		{#each firstTwoProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
<section class="home-section text-stone-700 space-y-1 md:space-y-4">
	<h2 class="section-label">Hackathon Wins</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
		{#each hackathonProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

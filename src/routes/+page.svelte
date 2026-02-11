<script lang="ts">
	import LineDecoration from '@/components/LineDecoration.svelte';
	import { type Project, projects } from './projects/project';
	import ProjectCard from './projects/ProjectCard.svelte';
	import Button from '@/lib/components/ui/button/button.svelte';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

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
</script>

<svelte:head>
	<title>Jay's Website</title>
	<meta name="description" content="Welcome to my personal website!" />
</svelte:head>

<section class="home-section">
	<div class="space-y-1 md:space-y-4">
		<h1 class="text-foreground font-semibold">Jay Ren</h1>
		<h4 class="text-muted-foreground">Software Developer</h4>
	</div>
</section>
<LineDecoration class="absolute transform rotate-2" />
<div class="pb-4" />
<!-- <section class="space-y-1 home-section md:space-y-4">
	<h2 class="section-label">Blog</h2>
	<div class="flex gap-4">
		<div
			class="flex justify-center w-full p-4 text-sm border-2 border-dashed rounded-lg md:text-xl"
		>
			🚧 This section is under construction! 🚧
		</div>
	</div>
</section> -->
<section class="space-y-1 home-section md:space-y-4">
	<h3 class="section-label">Experience</h3>
	<div class="text-sm md:text-base text-foreground">
		<p>
			Summer 2026: <b>Deep Learning Software Engineering Intern @ NVIDIA</b>. I'll be contributing
			to NVIDIA's deep learning software stack (cuDNN/TensorRT).
		</p>
		<p>
			Fall 2025: <b>Deep Learning Compiler Development Intern @ Huawei</b>. Working on an
			LLVM/MLIR-based compiler for neural network inference on custom hardware. Owned a fuzz testing
			project for testing the compiler on procedurally generated MLIR modules.
		</p>
		<p>
			Winter 2025: <b>Software Engineering Intern @ ETHGlobal</b>. Built a GitHub integration with
			TypeScript used by 6,400+ developers.
		</p>
		<p>
			Summer 2024: <b>Software Developer Intern @ LavaReach</b> (now acquired), an early-stage B2B
			startup<br />
			based in Toronto.
		</p>
		<p>
			Summer 2022: <b>Full-stack Developer Intern @ Nokia</b>. Worked on an order-tracking system
			for Nokia's supply chain.
		</p>
	</div>
</section>
<section class="space-y-1 home-section md:space-y-4">
	<div class="flex items-center gap-4">
		<h3 class="section-label">Projects</h3>
		<!-- <ArrowButton>More</ArrowButton> -->
	</div>
	<div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
		{#each firstTwoProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
	<Button variant="ghost">
		<a href="/projects" class="flex gap-2 items-center">
			See All <ChevronRight />
		</a>
	</Button>
</section>
<section class="space-y-1 home-section md:space-y-4">
	<h3 class="section-label">Hackathon Wins</h3>
	<div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
		{#each hackathonProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

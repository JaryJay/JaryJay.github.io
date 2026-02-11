<script lang="ts">
	import LineDecoration from '@/components/LineDecoration.svelte';
	import { projects, hackathonProjects } from '@/lib/projects';
	import ProjectCard from '@/lib/components/ProjectCard.svelte';
	import Button from '@/lib/components/ui/button/button.svelte';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import { experiences } from '@/lib/experiences';

	const firstTwoProjects = projects.slice(0, 2);

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
	<h3 id="experience" class="section-label">Experience</h3>
	<div class="text-sm md:text-base text-foreground">
		{#each experiences as experience}
			<p>
				{experience.time}: <b>{experience.title}</b> @ <b>{experience.company}</b>.
				{experience.description}
			</p>
		{/each}
	</div>
</section>
<section class="space-y-1 home-section md:space-y-4">
	<div class="flex items-center gap-4">
		<h3 id="projects" class="section-label">Projects</h3>
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
	<h3 id="hackathon-wins" class="section-label">Hackathon Wins</h3>
	<div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
		{#each hackathonProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

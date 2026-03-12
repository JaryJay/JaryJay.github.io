<script lang="ts">
	import { experiences } from '$lib/experiences';
	import { projects, hackathonProjects } from '$lib/projects';
	import { quips } from '$lib/quips';
	import LineDecoration from '@/components/LineDecoration.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import { onMount } from 'svelte';
	import VerticalSection from '$lib/components/VerticalSection.svelte';
	import DynamicGrid from '$lib/components/DynamicGrid.svelte';

	const firstTwoProjects = projects.slice(0, 2);

	let chosenQuip = '';
	onMount(() => (chosenQuip = quips[Math.floor(Math.random() * quips.length)]));
</script>

<svelte:head>
	<title>Jay Ren</title>
	<meta name="description" content="Welcome to my personal website!" />
</svelte:head>

<VerticalSection>
	<h1 class="text-foreground font-semibold">Jay Ren</h1>
	<h4 class="text-muted-foreground">{chosenQuip}&nbsp;</h4>
</VerticalSection>
<div class="py-2 sm:py-1" />
<LineDecoration class="absolute transform rotate-2" />
<div class="py-2 sm:hidden" />
<VerticalSection>
	<h3 id="experience" class="section-label">Experience</h3>
	<div class="text-sm md:text-base text-foreground">
		{#each experiences as experience}
			<p>
				{experience.time}: <b>{experience.title}</b> @ <b>{experience.company}</b>.
				{experience.description}
			</p>
		{/each}
	</div>
</VerticalSection>
<VerticalSection>
	<div class="flex items-center gap-4">
		<h3 id="projects" class="section-label">Projects</h3>
	</div>
	<DynamicGrid>
		{#each firstTwoProjects as project}
			<ProjectCard {project} />
		{/each}
	</DynamicGrid>
	<Button variant="ghost">
		<a href="/projects" class="flex gap-2 items-center">
			See All <ChevronRight />
		</a>
	</Button>
</VerticalSection>
<VerticalSection>
	<h3 id="hackathon-wins" class="section-label">Hackathon Wins</h3>
	<DynamicGrid>
		{#each hackathonProjects as project}
			<ProjectCard {project} />
		{/each}
	</DynamicGrid>
</VerticalSection>

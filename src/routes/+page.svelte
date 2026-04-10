<script lang="ts">
	import { experiences } from '$lib/experiences';
	import { links } from '$lib/links';
	import { projects, hackathonProjects } from '$lib/projects';
	import { quips } from '$lib/quips';
	import LineDecoration from '$lib/components/LineDecoration.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import VerticalSection from '$lib/components/VerticalSection.svelte';
	import DynamicGrid from '$lib/components/DynamicGrid.svelte';
	import FadeIn from '$lib/components/FadeIn.svelte';
	import GradientName from '$lib/components/GradientName.svelte';
	import TypewriterText from '$lib/components/TypewriterText.svelte';
	import IconLink from '$lib/components/IconLink.svelte';
	import ExperienceEntry from '$lib/components/ExperienceEntry.svelte';

	const firstTwoProjects = projects.slice(0, 2);
</script>

<svelte:head>
	<title>Jay Ren</title>
	<meta name="description" content="Welcome to my personal website!" />
</svelte:head>

<VerticalSection>
	<GradientName>Jay Ren</GradientName>
	<h4 class="text-muted-foreground">
		<TypewriterText texts={quips} />
	</h4>
	<div class="flex gap-3 pt-1">
		<IconLink href={links.github} title="GitHub" icon="mdi:github" />
		<IconLink href={links.linkedin} title="LinkedIn" icon="mdi:linkedin" />
	</div>
</VerticalSection>
<div class="py-2 sm:py-1" />
<LineDecoration class="absolute transform rotate-2" />
<div class="py-2 sm:hidden" />
<VerticalSection>
	<h3 id="experience" class="section-label">Experience</h3>
	<div class="space-y-0">
		{#each experiences as experience, i}
			<FadeIn delay={i * 80}>
				<ExperienceEntry
					{experience}
					accent={i === 0}
					last={i === experiences.length - 1}
				/>
			</FadeIn>
		{/each}
	</div>
</VerticalSection>
<VerticalSection>
	<div class="flex items-center gap-4">
		<h3 id="projects" class="section-label">Projects</h3>
	</div>
	<DynamicGrid>
		{#each firstTwoProjects as project, i}
			<FadeIn delay={i * 100}>
				<ProjectCard {project} />
			</FadeIn>
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
		{#each hackathonProjects as project, i}
			<FadeIn delay={i * 100}>
				<ProjectCard {project} />
			</FadeIn>
		{/each}
	</DynamicGrid>
</VerticalSection>


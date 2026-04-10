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
	import FadeIn from '$lib/components/FadeIn.svelte';

	const firstTwoProjects = projects.slice(0, 2);

	// Typewriter quip logic
	let displayedQuip = '';
	let quipDone = false;

	onMount(() => {
		const chosenQuip = quips[Math.floor(Math.random() * quips.length)];
		let i = 0;
		const interval = setInterval(() => {
			displayedQuip = chosenQuip.slice(0, i + 1);
			i++;
			if (i >= chosenQuip.length) {
				clearInterval(interval);
				quipDone = true;
			}
		}, 30);
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Jay Ren</title>
	<meta name="description" content="Welcome to my personal website!" />
</svelte:head>

<VerticalSection>
	<h1 class="gradient-name font-semibold">Jay Ren</h1>
	<h4 class="text-muted-foreground">
		{displayedQuip}<span class="cursor-blink" class:hidden={quipDone}>|</span>&nbsp;
	</h4>
	<div class="flex gap-3 pt-1">
		<a
			href="https://github.com/JaryJay"
			target="_blank"
			rel="noopener noreferrer"
			title="GitHub"
			class="social-link"
		>
			<span class="iconify size-6" data-icon="mdi:github" data-inline="false"></span>
		</a>
		<a
			href="https://linkedin.com/in/jay-ren-a57657206"
			target="_blank"
			rel="noopener noreferrer"
			title="LinkedIn"
			class="social-link"
		>
			<span class="iconify size-6" data-icon="mdi:linkedin" data-inline="false"></span>
		</a>
	</div>
</VerticalSection>
<div class="py-2 sm:py-1" />
<LineDecoration class="absolute transform rotate-2" />
<div class="py-2 sm:hidden" />
<VerticalSection>
	<h3 id="experience" class="section-label">Experience</h3>
	<ol class="experience-timeline">
		{#each experiences as experience, i}
			<FadeIn delay={i * 80}>
				<li class="timeline-item" class:timeline-item--accent={i === 0}>
					<div class="timeline-dot" class:timeline-dot--accent={i === 0}></div>
					<div class="timeline-content">
						<div class="flex flex-wrap items-baseline gap-x-2">
							<span class="font-semibold text-sm sm:text-base">{experience.title}</span>
							<span class="text-muted-foreground text-xs sm:text-sm">@ {experience.company}</span>
						</div>
						<div class="text-muted-foreground text-xs sm:text-sm">{experience.time} · {experience.location}</div>
						<p class="text-sm sm:text-base mt-1 !mt-1">{experience.description}</p>
					</div>
				</li>
			</FadeIn>
		{/each}
	</ol>
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

<style>
	.gradient-name {
		background: linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--muted-foreground)) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	:global(.dark) .gradient-name {
		background: linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--accent)) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.social-link {
		@apply text-muted-foreground hover:text-foreground transition-all duration-150 hover:scale-110 inline-flex cursor-pointer;
	}

	.cursor-blink {
		animation: blink 1s step-end infinite;
	}

	.cursor-blink.hidden {
		display: none;
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}

	/* Experience timeline */
	.experience-timeline {
		@apply relative pl-6 space-y-1 list-none;
	}

	.experience-timeline::before {
		content: '';
		@apply absolute left-[7px] top-2 bottom-2 w-[2px] bg-border;
	}

	.timeline-item {
		@apply relative flex gap-4 pb-6 rounded-lg transition-colors duration-150 hover:bg-muted/40 px-2 py-2 -mx-2 cursor-default;
		list-style: none;
	}

	.timeline-dot {
		@apply absolute -left-[21px] top-3 w-3 h-3 rounded-full bg-border border-2 border-background shrink-0;
	}

	.timeline-dot--accent {
		@apply bg-amber-500 dark:bg-accent border-background;
	}

	.timeline-item--accent .timeline-content .flex span:first-child {
		@apply text-amber-600 dark:text-accent-foreground;
	}

	.timeline-content {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
		min-width: 0;
	}
</style>


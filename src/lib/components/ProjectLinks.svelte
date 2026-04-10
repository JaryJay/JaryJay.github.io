<script lang="ts">
	import Code from 'lucide-svelte/icons/code';
	import Play from 'lucide-svelte/icons/play';
	import type { Project } from '$lib/projects';

	export let project: Project;
	/** Tailwind classes applied to each icon, e.g. override size or opacity. */
	export let iconClass: string = 'transition-colors size-6';
</script>

{#if project.devpostLink}
	<a
		href={project.devpostLink}
		on:click|stopPropagation
		target="_blank"
		rel="noopener noreferrer"
		title="View on Devpost"
		class="hover:scale-110 transition-transform"
	>
		<Code class={iconClass} />
	</a>
{/if}
{#if project.githubLink}
	<a
		href={project.githubLink}
		on:click|stopPropagation
		target="_blank"
		rel="noopener noreferrer"
		title="View on GitHub"
		class="hover:scale-110 transition-transform"
	>
		<span class="iconify {iconClass}" data-icon="mdi:github" data-inline="false"></span>
	</a>
{/if}
{#if project.playLink}
	<a
		href={project.playLink}
		on:click|stopPropagation
		target="_blank"
		rel="noopener noreferrer"
		title="Play"
		class="hover:scale-110 transition-transform"
	>
		<Play class={iconClass} />
	</a>
{/if}

<script lang="ts">
	import type { Project } from '$lib/projects';
	import IconLink from './IconLink.svelte';

	export let project: Project;
	/** Tailwind classes applied to each icon, e.g. override size or opacity. */
	export let iconClass: string = 'transition-colors size-6';
</script>

{#if project.devpostLink}
	<IconLink
		href={project.devpostLink}
		title="View on Devpost"
		icon="mdi:code-tags"
		iconClass={iconClass}
	/>
{/if}
{#if project.githubLink}
	<IconLink
		href={project.githubLink}
		title="View on GitHub"
		icon="mdi:github"
		iconClass={iconClass}
	/>
{/if}
{#if project.playLink}
	<IconLink
		href={project.playLink}
		title="Play"
		icon="mdi:play-circle"
		iconClass={iconClass}
	/>
{/if}

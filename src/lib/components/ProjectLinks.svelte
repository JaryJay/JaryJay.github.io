<script lang="ts">
	import Code from 'lucide-svelte/icons/code';
	import Play from 'lucide-svelte/icons/play';

	export let devpostLink: string | undefined = undefined;
	export let githubLink: string | undefined = undefined;
	export let playLink: string | undefined = undefined;
	/** Size class for the icons, e.g. "size-6" */
	export let iconClass: string = 'transition-colors size-6';
</script>

{#if devpostLink}
	<a
		href={devpostLink}
		on:click|stopPropagation
		target="_blank"
		rel="noopener noreferrer"
		title="View on Devpost"
		class="hover:scale-110 transition-transform"
	>
		<Code class={iconClass} />
	</a>
{/if}
{#if githubLink}
	<a
		href={githubLink}
		on:click|stopPropagation
		target="_blank"
		rel="noopener noreferrer"
		title="View on GitHub"
		class="hover:scale-110 transition-transform"
	>
		<span class="iconify {iconClass}" data-icon="mdi:github" data-inline="false"></span>
	</a>
{/if}
{#if playLink}
	<a
		href={playLink}
		on:click|stopPropagation
		target="_blank"
		rel="noopener noreferrer"
		title="Play"
		class="hover:scale-110 transition-transform"
	>
		<Play class={iconClass} />
	</a>
{/if}

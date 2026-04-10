<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Experience } from '$lib/experiences';

	export let experience: Experience;
	/** Highlight this entry with the accent colour (e.g. the most-recent role). */
	export let accent: boolean = false;
	/** Hide the connecting line below the dot (use on the last entry). */
	export let last: boolean = false;
</script>

<div
	class={cn(
		'flex gap-3 rounded-lg px-2 py-2 transition-colors duration-150 hover:bg-muted/40 cursor-default',
	)}
>
	<!-- Dot + connecting line column -->
	<div class="flex flex-col items-center mt-1 shrink-0" style="width: 12px">
		<div
			class={cn(
				'w-3 h-3 rounded-full border-2 border-background shrink-0 z-10',
				accent ? 'bg-amber-500 dark:bg-accent' : 'bg-muted-foreground',
			)}
		></div>
		{#if !last}
			<div class="w-px flex-1 bg-border mt-1 min-h-4"></div>
		{/if}
	</div>

	<!-- Optional company logo -->
	{#if experience.logoUrl}
		<img
			src={experience.logoUrl}
			alt="{experience.company} logo"
			class="w-8 h-8 rounded object-contain mt-0.5 shrink-0"
		/>
	{/if}

	<!-- Content -->
	<div class="flex-1 pb-2 min-w-0">
		<div class="flex flex-wrap items-baseline gap-x-2">
			<span
				class={cn(
					'font-semibold text-sm sm:text-base',
					accent && 'text-amber-600 dark:text-accent-foreground',
				)}>{experience.title}</span
			>
			<span class="text-muted-foreground text-xs sm:text-sm">@ {experience.company}</span>
		</div>
		<div class="text-muted-foreground text-xs sm:text-sm">
			{experience.time} · {experience.location}
		</div>
		<p class="text-sm sm:text-base mt-1">{experience.description}</p>
	</div>
</div>

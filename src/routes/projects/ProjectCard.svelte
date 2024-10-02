<script lang="ts">
	import Card from '../Card.svelte';
	import type { Project } from './project';

	export let project: Project;
</script>

<Card class="flex flex-col gap-1 md:gap-2">
	<img
		src={project.imageUrl}
		alt={'Image representing ' + project.name}
		class="object-cover rounded-md aspect-ratio h-24 sm:h-36 md:h-48 lg:h-56"
	/>
	<div class="flex justify-between items-center">
		<h4 class="text-sm sm:text-base md:text-lg font-semibold">{project.name}</h4>
		<div class="flex gap-2">
			{#if project.devpostLink}
				<a href={project.devpostLink}>
					<span
						class="iconify size-4 sm:size-5 md:size-6 text-stone-600 hover:text-stone-800 transition-colors"
						data-icon="mdi:code-tags"
						data-inline="false"
					></span>
				</a>
			{/if}
			{#if project.githubLink}
				<a href={project.githubLink}>
					<span
						class="iconify size-4 sm:size-5 md:size-6 text-stone-600 hover:text-stone-800 transition-colors"
						data-icon="mdi:github"
						data-inline="false"
					></span>
				</a>
			{/if}
		</div>
	</div>
	<div class="flex-1">
		<p
			class="text-stone-600 text-sm sm:text-base md:text-lg line-clamp-2 sm:line-clamp-3 md:line-clamp-4 text-ellipsis whitespace-pre-line"
		>
			{project.description}
		</p>
	</div>
</Card>

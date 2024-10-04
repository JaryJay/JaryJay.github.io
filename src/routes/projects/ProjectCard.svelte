<script lang="ts">
	import { cn } from '@/lib/utils';
	import Card from '../Card.svelte';
	import type { Project } from './project';
	import ResponsiveDialog from '@/lib/components/ui/ResponsiveDialog.svelte';
	import * as Drawer from '$lib/components/ui/drawer/index.js';

	export let project: Project;
	let open = false;
</script>

<Card
	class={cn('flex flex-col gap-1 md:gap-2', $$props.class)}
	slot="trigger"
	on:click={() => (open = !open)}
>
	<img
		src={project.imageUrl}
		alt={'Image representing ' + project.name}
		class="object-cover rounded-md aspect-ratio h-24 sm:h-36 md:h-48 lg:h-56 pointer-events-none"
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

<ResponsiveDialog bind:open>
	<Drawer.Header class="text-left" slot="header">
		<Drawer.Title>{project.name}</Drawer.Title>
		<Drawer.Description>
			{project.description}
		</Drawer.Description>
	</Drawer.Header>
	<div class="p-4 md:p-0 flex flex-col gap-1 md:gap-2">
		<div class="hidden md:flex justify-between items-center">
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
		<img
			src={project.imageUrl}
			alt={'Image representing ' + project.name}
			class="object-cover rounded-md aspect-ratio pointer-events-none"
		/>
		<div class="flex-1 hidden md:block">
			<p class="text-stone-600 text-sm sm:text-base md:text-lg whitespace-pre-line">
				{project.description}
			</p>
		</div>
	</div>
</ResponsiveDialog>

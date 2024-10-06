<script lang="ts">
	import { cn } from '@/lib/utils';
	import Card from '../Card.svelte';
	import type { Project } from './project';
	import {
		Drawer,
		DrawerContent,
		DrawerTitle,
		DrawerDescription,
		DrawerHeader,
	} from '$lib/components/ui/drawer/index.js';
	import Carousel from '@/lib/components/ui/carousel/carousel.svelte';
	import CarouselContent from '@/lib/components/ui/carousel/carousel-content.svelte';
	import CarouselItem from '@/lib/components/ui/carousel/carousel-item.svelte';
	import { Next, Previous } from '@/lib/components/ui/carousel';
	import Code from 'lucide-svelte/icons/code';
	import Play from 'lucide-svelte/icons/play';

	export let project: Project;
	let open = false;
</script>

<Card
	class={cn('flex flex-col gap-1 md:gap-2', $$props.class)}
	slot="trigger"
	on:click={() => (open = !open)}
>
	<img
		src={project.imageUrls[0]}
		alt={'Image representing ' + project.name}
		class="object-cover h-24 rounded-md pointer-events-none aspect-ratio sm:h-36 md:h-48 lg:h-56"
	/>
	<div class="flex items-center justify-between">
		<h4 class="text-sm font-semibold sm:text-base md:text-lg">{project.name}</h4>
		<div class="flex gap-2">
			{#if project.devpostLink}
				<a href={project.devpostLink} on:click|stopPropagation target="__blank">
					<Code class="transition-colors size-6 text-stone-600 hover:text-stone-800" />
				</a>
			{/if}
			{#if project.githubLink}
				<a href={project.githubLink} on:click|stopPropagation target="__blank">
					<span
						class="transition-colors iconify size-6 text-stone-600 hover:text-stone-800"
						data-icon="mdi:github"
						data-inline="false"
					></span>
				</a>
			{/if}
			{#if project.playLink}
				<a href={project.playLink} on:click|stopPropagation target="__blank">
					<Play class="transition-colors size-6 text-stone-600 hover:text-stone-800" />
				</a>
			{/if}
		</div>
	</div>
	<div class="flex-1">
		<p
			class="text-sm whitespace-pre-line text-stone-600 sm:text-base md:text-lg line-clamp-2 sm:line-clamp-3 md:line-clamp-4 text-ellipsis"
		>
			{project.description}
		</p>
	</div>
</Card>

<Drawer bind:open>
	<DrawerContent>
		<div class="max-w-md md:max-w-2xl mx-auto">
			<DrawerHeader class="text-left">
				<DrawerTitle class="flex items-center gap-2">
					{project.name}
					{#if project.devpostLink}
						<a href={project.devpostLink} on:click|stopPropagation target="__blank">
							<Code class="transition-colors size-6 text-stone-600 hover:text-stone-800" />
						</a>
					{/if}
					{#if project.githubLink}
						<a href={project.githubLink} on:click|stopPropagation target="__blank">
							<span
								class="transition-colors iconify size-6 text-stone-600 hover:text-stone-800"
								data-icon="mdi:github"
								data-inline="false"
							></span>
						</a>
					{/if}
					{#if project.playLink}
						<a href={project.playLink} on:click|stopPropagation target="__blank">
							<Play class="transition-colors size-6 text-stone-600 hover:text-stone-800" />
						</a>
					{/if}
				</DrawerTitle>
				<DrawerDescription>
					{project.description}
				</DrawerDescription>
			</DrawerHeader>

			<Carousel class="px-4 pb-4 mx-auto" data-vaul-no-drag>
				<CarouselContent>
					{#each project.imageUrls as imageUrl, i (i)}
						<CarouselItem class={cn('basis-full md:basis-1/2')}>
							<img
								src={imageUrl}
								alt={`Image ${i + 1} representing ${project.name}`}
								class="rounded-md aspect-ratio"
							/>
						</CarouselItem>
					{/each}
				</CarouselContent>
				{#if project.imageUrls.length > 1}
					<Previous />
					<Next />
				{/if}
			</Carousel>
		</div>
	</DrawerContent>
</Drawer>

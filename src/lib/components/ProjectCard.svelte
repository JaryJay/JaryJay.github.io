<script lang="ts">
	import { mediaQuery } from 'svelte-legos';
	import { cn } from '$lib/utils';
	import Card from './Card.svelte';
	import type { Project } from '../projects';
	import * as Dialog from '$lib/components/ui/dialog';
	import {
		Drawer,
		DrawerContent,
		DrawerTitle,
		DrawerDescription,
		DrawerHeader,
	} from '$lib/components/ui/drawer';
	import {
		Root as Carousel,
		Content as CarouselContent,
		Item as CarouselItem,
	} from '$lib/components/ui/carousel';
	import { Next, Previous } from '$lib/components/ui/carousel';
	import ProjectLinks from './ProjectLinks.svelte';
	import TagChip from './TagChip.svelte';
	export let project: Project;
	let open = false;
	const isDesktop = mediaQuery('(min-width: 768px)');
</script>

<Card
	class={cn(
		'bg-card text-card-foreground flex flex-col gap-1 md:gap-2 outline outline-1 outline-border hover:outline-primary transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group/card',
		$$props.class,
	)}
	slot="trigger"
	on:click={() => (open = !open)}
>
	<div class="overflow-hidden rounded-md">
		<img
			src={project.imageUrls[0]}
			alt={'Image representing ' + project.name}
			class="object-cover h-30 rounded-md pointer-events-none aspect-ratio sm:h-36 md:h-48 lg:h-56 transition-transform duration-300 group-hover/card:scale-105"
		/>
	</div>
	<div class="flex items-center justify-between">
		<h4 class="text-sm font-semibold sm:text-base md:text-lg">
			{project.name}
		</h4>
		<div class="flex gap-2">
			<ProjectLinks
				devpostLink={project.devpostLink}
				githubLink={project.githubLink}
				playLink={project.playLink}
			/>
		</div>
	</div>
	<div class="flex-1">
		<p
			class="text-sm whitespace-pre-line sm:text-base md:text-lg line-clamp-2 sm:line-clamp-3 md:line-clamp-4 text-ellipsis"
		>
			{project.description}
		</p>
	</div>
	{#if project.tags && project.tags.length > 0}
		<div class="flex flex-wrap gap-1 pt-1">
			{#each project.tags as tag}
				<TagChip {tag} />
			{/each}
		</div>
	{/if}
</Card>

{#if $isDesktop}
	<Dialog.Root bind:open>
		<Dialog.Content class="max-w-4xl lg:max-w-5xl bg-card text-card-foreground">
			<Dialog.Header>
				<Dialog.Title class="flex gap-2 items-center">
					{project.name}
					<ProjectLinks
						devpostLink={project.devpostLink}
						githubLink={project.githubLink}
						playLink={project.playLink}
						iconClass="transition-colors size-6 text-opacity-80 hover:text-opacity-100"
					/>
				</Dialog.Title>
				<Dialog.Description class="whitespace-pre-line">
					{project.description}
				</Dialog.Description>
			</Dialog.Header>
			<Carousel class="mx-auto" data-vaul-no-drag>
				<CarouselContent>
					{#each project.imageUrls as imageUrl, i (i)}
						<CarouselItem class="flex items-center justify-center">
							<img
								src={imageUrl}
								alt={`Image ${i + 1} representing ${project.name}`}
								class="rounded-md m-auto object-contain max-h-[65vh]"
							/>
						</CarouselItem>
					{/each}
				</CarouselContent>
				{#if project.imageUrls.length > 1}
					<Previous />
					<Next />
				{/if}
			</Carousel>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer bind:open>
		<DrawerContent>
			<div class="max-w-md md:max-w-3xl mx-auto">
				<DrawerHeader class="text-left">
					<DrawerTitle class="flex gap-2 items-center">
						{project.name}
						<ProjectLinks
							devpostLink={project.devpostLink}
							githubLink={project.githubLink}
							playLink={project.playLink}
							iconClass="transition-colors size-6 text-opacity-80 hover:text-opacity-100"
						/>
					</DrawerTitle>
					<DrawerDescription class="whitespace-pre-line">
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
{/if}


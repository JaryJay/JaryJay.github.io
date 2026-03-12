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
	import Code from 'lucide-svelte/icons/code';
	import Play from 'lucide-svelte/icons/play';
	export let project: Project;
	let open = false;
	const isDesktop = mediaQuery('(min-width: 768px)');
</script>

<Card
	class={cn(
		'bg-card text-card-foreground flex flex-col gap-1 md:gap-2 outline outline-1 outline-border hover:outline-primary transition-[outline] duration-200',
		$$props.class,
	)}
	slot="trigger"
	on:click={() => (open = !open)}
>
	<img
		src={project.imageUrls[0]}
		alt={'Image representing ' + project.name}
		class="object-cover h-30 rounded-md pointer-events-none aspect-ratio sm:h-36 md:h-48 lg:h-56"
	/>
	<div class="flex items-center justify-between">
		<h4 class="text-sm font-semibold sm:text-base md:text-lg">
			{project.name}
		</h4>
		<div class="flex gap-2">
			{#if project.devpostLink}
				<a href={project.devpostLink} on:click|stopPropagation target="__blank">
					<Code class="transition-colors size-6" />
				</a>
			{/if}
			{#if project.githubLink}
				<a href={project.githubLink} on:click|stopPropagation target="__blank">
					<span class="transition-colors iconify size-6" data-icon="mdi:github" data-inline="false"
					></span>
				</a>
			{/if}
			{#if project.playLink}
				<a href={project.playLink} on:click|stopPropagation target="__blank">
					<Play class="transition-colors size-6" />
				</a>
			{/if}
		</div>
	</div>
	<div class="flex-1">
		<p
			class="text-sm whitespace-pre-line sm:text-base md:text-lg line-clamp-2 sm:line-clamp-3 md:line-clamp-4 text-ellipsis"
		>
			{project.description}
		</p>
	</div>
</Card>

{#if $isDesktop}
	<Dialog.Root bind:open>
		<Dialog.Content class="max-w-4xl lg:max-w-5xl bg-card text-card-foreground">
			<Dialog.Header>
				<Dialog.Title class="flex gap-2 items-center">
					{project.name}
					{#if project.devpostLink}
						<a href={project.devpostLink} on:click|stopPropagation target="__blank">
							<Code class="transition-colors size-6 text-opacity-80 hover:text-opacity-100" />
						</a>
					{/if}
					{#if project.githubLink}
						<a href={project.githubLink} on:click|stopPropagation target="__blank">
							<span
								class="transition-colors iconify size-6 text-opacity-80 hover:text-opacity-100"
								data-icon="mdi:github"
								data-inline="false"
							></span>
						</a>
					{/if}
					{#if project.playLink}
						<a href={project.playLink} on:click|stopPropagation target="__blank">
							<Play class="transition-colors size-6 text-opacity-80 hover:text-opacity-100" />
						</a>
					{/if}
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
						{#if project.devpostLink}
							<a href={project.devpostLink} on:click|stopPropagation target="__blank">
								<Code class="transition-colors size-6 text-opacity-80 hover:text-opacity-100" />
							</a>
						{/if}
						{#if project.githubLink}
							<a href={project.githubLink} on:click|stopPropagation target="__blank">
								<span
									class="transition-colors iconify size-6 text-opacity-80 hover:text-opacity-100"
									data-icon="mdi:github"
									data-inline="false"
								></span>
							</a>
						{/if}
						{#if project.playLink}
							<a href={project.playLink} on:click|stopPropagation target="__blank">
								<Play class="transition-colors size-6 text-opacity-80 hover:text-opacity-100" />
							</a>
						{/if}
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

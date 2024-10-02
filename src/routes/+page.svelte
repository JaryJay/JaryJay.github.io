<script lang="ts">
	import Card from './Card.svelte';

	type BlogPreview = {
		name: string;
		description: string;
	};

	const blogs: BlogPreview[] = [
		{ name: 'Test Blog', description: 'Lorem ipsum dolor sit amet' },
		{ name: 'Test Blog', description: 'Lorem ipsum dolor sit amet' },
		{ name: 'Test Blog', description: 'Lorem ipsum dolor sit amet' }
	];
</script>

<svelte:head>
	<title>Jay's Website</title>
	<meta name="description" content="Welcome to my personal website!" />
</svelte:head>

<section class="home-section">
	<div class="space-y-1 md:space-y-4">
		<h1 class="text-3xl sm:text-4xl md:text-6xl text-stone-700 font-semibold">Jay Ren</h1>
		<h3 class="text-lg sm:text-xl md:text-2xl text-stone-400 font-semibold">Software Developer</h3>
	</div>
</section>
<div
	class="-z-20 border-b-2 border-stone-400 border-opacity-10 border-dashed w-full transform skew-y-3 absolute"
>
	<div class="flex flex-row-reverse transform translate-y-[2px]">
		<div class="bg-stone-500 h-4 md:h-6 w-24" />
		<div class="bg-stone-200 h-4 md:h-6 w-6" />
		<div class="bg-amber-500 h-4 md:h-6 w-12" />
		<div
			class="bg-amber-500 bg-opacity-40 h-6 md:h-8 w-48 absolute transform translate-y-2 -translate-x-4 md:translate-y-4 md:-translate-x-8"
		/>
	</div>
</div>
<section class="home-section text-stone-700 space-y-1 md:space-y-4">
	<h2 class="text-lg sm:text-xl md:text-3xl font-semibold">BLOG</h2>
	<div class="flex gap-4">
		{#each blogs as blog}
			<Card>
				<h4 class="text-lg font-semibold">{blog.name}</h4>
				<p class="">{blog.description}</p>
			</Card>
		{/each}
	</div>
</section>
<section class="home-section text-stone-700 space-y-1 md:space-y-4">
	<h2 class="text-lg sm:text-xl md:text-3xl font-semibold">PROJECTS</h2>
	<div class="flex gap-4">
		{#each blogs as blog}
			<Card>
				<h4 class="text-lg font-semibold">{blog.name}</h4>
				<p class="">{blog.description}</p>
			</Card>
		{/each}
	</div>
</section>
<section class="home-section text-stone-700 space-y-1 md:space-y-4">
	<h2 class="text-lg sm:text-xl md:text-3xl font-semibold">HACKATHON WINS</h2>
	<div class="flex gap-4">
		{#each blogs as blog}
			<Card>
				<h4 class="text-lg font-semibold">{blog.name}</h4>
				<p class="">{blog.description}</p>
			</Card>
		{/each}
	</div>
</section>

<style>
	.home-section {
		@apply mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl px-4 my-2 sm:my-4 md:my-8;
	}
</style>

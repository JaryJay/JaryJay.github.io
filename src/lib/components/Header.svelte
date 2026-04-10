<script lang="ts">
	import { page } from '$app/stores';
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';

	type Route = {
		route: string;
		name: string;
	};
	const routes: Route[] = [
		{ route: '/', name: 'HOME' },
		{ route: '/blog', name: 'BLOG' },
		{ route: '/projects', name: 'ALL PROJECTS' },
		// { route: '/faith', name: 'FAITH' },
	];
</script>

<div class="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
<header
	class="mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl flex justify-between items-center py-2"
>
	<nav>
		<ul class="flex px-4 gap-4 md:gap-8">
			{#each routes as { route, name } (name)}
				<li
					aria-current={$page.url.pathname === route ? 'page' : undefined}
					class="font-semibold py-1 md:py-2 text-foreground text-sm md:text-base group list-none"
				>
					<a href={route} class="underline-animation relative">{name}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="flex px-4 gap-4 md:gap-8">
		<DarkModeToggle />
	</div>
</header>
</div>

<style>
	li[aria-current='page'] {
		@apply font-extrabold;
	}

	.underline-animation::after {
		content: '';
		@apply absolute left-0 bottom-0 w-full h-[1px] bg-current scale-x-0 transition-transform duration-100 ease-in-out;
	}

	.group:hover .underline-animation::after {
		@apply scale-x-100;
	}
</style>

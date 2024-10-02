<script lang="ts">
	import { page } from '$app/stores';

	type Route = {
		route: string;
		name: string;
	};
	const routes: Route[] = [
		{ route: '/', name: 'HOME' },
		{ route: '/blog', name: 'BLOG' },
		{ route: '/projects', name: 'PROJECTS' },
		{ route: '/faith', name: 'FAITH' }
	];
</script>

<header class="mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl flex justify-between py-2">
	<nav>
		<ul class="flex px-4 gap-4 md:gap-8">
			{#each routes as { route, name }, i}
				<li
					aria-current={$page.url.pathname === route ? 'page' : undefined}
					class="font-bold py-1 md:py-2 text-stone-700 text-sm md:text-base"
				>
					<a href={route}>{name}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="flex px-4 gap-4 md:gap-8">
		<!-- Put some links here (e.g. GitHub) -->
	</div>
</header>

<style>
	li[aria-current='page'] {
		@apply font-extrabold;
	}
</style>

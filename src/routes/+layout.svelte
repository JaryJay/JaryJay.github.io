<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { page } from '$app/stores';
</script>

<ModeWatcher />
<div class="app">
	<Header />

	{#key $page.url.pathname}
		<main>
			<slot />
		</main>
	{/key}

	<Footer />
</div>

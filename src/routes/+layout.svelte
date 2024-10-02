<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<!-- <footer class="mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">Footer</footer> -->
</div>

<style>
</style>

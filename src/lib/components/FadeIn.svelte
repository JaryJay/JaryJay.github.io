<script lang="ts">
	import { onMount } from 'svelte';

	export let delay: number = 0;

	let element: HTMLDivElement;
	let visible = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.1 },
		);
		observer.observe(element);
		return () => observer.disconnect();
	});
</script>

<div
	bind:this={element}
	class="fade-in-wrapper"
	class:visible
	style="transition-delay: {delay}ms"
>
	<slot />
</div>

<style>
	.fade-in-wrapper {
		opacity: 0;
		transform: translateY(12px);
		transition:
			opacity 0.4s ease,
			transform 0.4s ease;
	}

	.fade-in-wrapper.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';

	/** Array of strings to randomly pick from and type out. */
	export let texts: string[];
	/** Milliseconds between each character. */
	export let speed: number = 30;

	let displayed = '';
	let done = false;

	onMount(() => {
		const text = texts[Math.floor(Math.random() * texts.length)];
		let i = 0;
		const interval = setInterval(() => {
			displayed = text.slice(0, i + 1);
			i++;
			if (i >= text.length) {
				clearInterval(interval);
				done = true;
			}
		}, speed);
		return () => clearInterval(interval);
	});
</script>

<span class="typewriter-root"
	>{displayed}<span class="cursor" class:hidden={done}>|</span>&nbsp;</span
>

<style>
	.cursor {
		animation: blink 1s step-end infinite;
	}

	.cursor.hidden {
		display: none;
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>

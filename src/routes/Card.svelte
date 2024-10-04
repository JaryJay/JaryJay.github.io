<script lang="ts">
	import Button from '@/lib/components/ui/button/button.svelte';

	export let title: string = '';
	export let description: string = '';
</script>

<button
	class={'transition-shadow flex flex-col rounded-md sm:rounded-lg md:rounded-2xl shadow-md hover:shadow-xl md:shadow-lg hover:md:shadow-2xl bg-white p-4 text-left items-stretch ' +
		$$props.class}
	on:click
>
	<slot>
		<h4 class="text-sm sm:text-base md:text-lg font-semibold">{title}</h4>
		<div class="flex-1">
			<p class="text-sm sm:text-base md:text-lg truncate sm:text-ellipsis">{description}</p>
		</div>
	</slot>
</button>

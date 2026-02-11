<script lang="ts">
	import Button from '@/lib/components/ui/button/button.svelte';
	import { cn } from '@/lib/utils';

	export let title: string = '';
	export let description: string = '';
</script>

<button
	class={cn(
		'transition-shadow flex flex-col rounded-md sm:rounded-lg md:rounded-2xl shadow-md hover:shadow-xl md:shadow-lg hover:md:shadow-2xl p-4 text-left items-stretch',
		$$props.class,
	)}
	on:click
>
	<slot>
		<h4>{title}</h4>
		<div class="flex-1">
			<p class="truncate sm:text-ellipsis">{description}</p>
		</div>
	</slot>
</button>

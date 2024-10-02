<script lang="ts">
	export let title: string = '';
	export let description: string = '';
</script>

<div
	class={'flex flex-col rounded-md sm:rounded-lg md:rounded-2xl shadow-md md:shadow-lg bg-white p-4 w-60 sm:w-96 md:w-[36rem] ' +
		$$props.class}
>
	<slot>
		<h4 class="text-sm sm:text-base md:text-lg font-semibold">{title}</h4>
		<div class="flex-1">
			<p class="text-sm sm:text-base md:text-lg truncate sm:text-ellipsis">{description}</p>
		</div>
	</slot>
</div>

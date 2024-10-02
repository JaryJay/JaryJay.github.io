<script>
	import BlobDecoration from './BlobDecoration.svelte';
</script>

<div class={'border-b-2 border-stone-200 border-dashed w-full ' + $$props.class}>
	<div class="flex justify-between relative">
		<div class="flex transform translate-y-1/2 gap-1 md:gap-2">
			<BlobDecoration size="md" class="bg-stone-400" />
			<BlobDecoration size="sm" class="bg-stone-200" />
			<BlobDecoration
				size="xl"
				class="absolute bg-amber-500 bg-opacity-40 transform -translate-y-2/3 translate-x-1/4"
			/>
		</div>
		<div class="flex flex-row-reverse gap-1 md:gap-2 transform translate-y-1/2">
			<BlobDecoration size="lg" class="bg-stone-400" />
			<BlobDecoration size="xs" class="bg-stone-200" />
			<BlobDecoration size="md" class="bg-amber-500" />
			<BlobDecoration
				size="xl"
				class="bg-amber-500 bg-opacity-40 absolute transform translate-y-2/3 -translate-x-1/3"
			/>
		</div>
	</div>
</div>

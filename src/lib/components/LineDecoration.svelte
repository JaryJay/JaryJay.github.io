<script>
	import BlobDecoration from './BlobDecoration.svelte';
</script>

<div class={'-z-10 border-b-2 border-border/50 border-dashed w-full' + $$props.class}>
	<div class="flex justify-between relative">
		<div class="flex transform translate-y-1/2 gap-1 md:gap-2">
			<BlobDecoration size="md" class="bg-stone-400/25 dark:bg-stone-600/25" />
			<BlobDecoration size="sm" class="bg-stone-200/25 dark:bg-stone-800/25" />
			<BlobDecoration
				size="xl"
				class="absolute bg-amber-500 dark:bg-accent bg-opacity-40 transform -translate-y-2/3 translate-x-1/4"
			/>
		</div>
		<div class="flex flex-row-reverse gap-1 md:gap-2 transform translate-y-1/2">
			<BlobDecoration size="lg" class="bg-stone-400/25 dark:bg-stone-600/25" />
			<BlobDecoration size="xs" class="bg-stone-200/25 dark:bg-stone-800/25	" />
			<BlobDecoration size="md" class="bg-amber-500 dark:bg-accent" />
			<BlobDecoration
				size="xl"
				class="bg-amber-500/25 dark:bg-accent/25 absolute transform translate-y-2/3 -translate-x-1/3"
			/>
		</div>
	</div>
</div>

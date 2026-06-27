<script>
	import BlobDecoration from './BlobDecoration.svelte';
</script>

<div class={'-z-10 border-b-2 border-border/50 border-dashed w-full' + $$props.class}>
	<div class="flex justify-between relative">
		<div class="flex transform translate-y-1/2 gap-1 md:gap-2">
			<BlobDecoration size="md" class="bg-muted/25" />
			<BlobDecoration size="sm" class="bg-muted/40" />
			<BlobDecoration
				size="xl"
				class="absolute bg-brand/40 transform -translate-y-2/3 translate-x-1/4"
			/>
		</div>
		<div class="flex flex-row-reverse gap-1 md:gap-2 transform translate-y-1/2">
			<BlobDecoration size="lg" class="bg-muted/25" />
			<BlobDecoration size="xs" class="bg-muted/40" />
			<BlobDecoration size="md" class="bg-brand" />
			<BlobDecoration
				size="xl"
				class="bg-brand/25 absolute transform translate-y-2/3 -translate-x-1/3"
			/>
		</div>
	</div>
</div>

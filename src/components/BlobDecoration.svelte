<script lang="ts">
	type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	export let size: Size = 'md';

	const sizeToClasses: Record<Size, string> = {
		xs: 'w-4 sm:w-6',
		sm: 'w-6 sm:w-8 md:w-12',
		md: 'w-8 sm:w-12 md:w-16',
		lg: 'w-16 sm:w-24 md:w-36',
		xl: 'w-24 sm:w-36 md:w-48',
	};
	let widthTag = sizeToClasses[size];
</script>

<div class={'h-4 md:h-6 rounded-full ' + widthTag + ' ' + $$props.class} />

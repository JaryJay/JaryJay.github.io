<script lang="ts">
	export let href: string;
	export let title: string;
	/** Iconify icon identifier, e.g. "mdi:github" */
	export let icon: string;
	/** Tailwind classes for the icon. Defaults to "size-6". */
	export let iconClass: string = 'size-6';
</script>

<a
	{href}
	{title}
	on:click|stopPropagation
	target="_blank"
	rel="noopener noreferrer"
	class="text-muted-foreground hover:text-foreground transition-all duration-150 hover:scale-110 inline-flex cursor-pointer"
>
	<slot>
		<span class="iconify {iconClass}" data-icon={icon} data-inline="false" />
	</slot>
</a>

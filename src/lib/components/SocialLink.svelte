<script lang="ts">
	export let href: string;
	export let title: string;
	/** Iconify icon identifier, e.g. "mdi:github" */
	export let icon: string;
	/** Tailwind size class for the icon. Defaults to "size-6". */
	export let iconSize: string = 'size-6';
</script>

<a
	{href}
	{title}
	target="_blank"
	rel="noopener noreferrer"
	class="social-link"
>
	<span class="iconify {iconSize}" data-icon={icon} data-inline="false"></span>
</a>

<style>
	.social-link {
		@apply text-muted-foreground hover:text-foreground transition-all duration-150 hover:scale-110 inline-flex cursor-pointer;
	}
</style>

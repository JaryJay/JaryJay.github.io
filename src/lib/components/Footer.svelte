<script lang="ts">
	import IconLink from '$lib/components/IconLink.svelte';
	import { links } from '$lib/links';
</script>

<footer class="border-t border-border/50 mt-12">
	<div class="centered-content px-4 py-6 flex items-center justify-between gap-4 flex-wrap">
		<p class="text-muted-foreground text-sm !mt-0">
			© {new Date().getFullYear()} Jay Ren
		</p>
		<div class="flex gap-4">
			<IconLink href={links.email} title="Email" icon="mdi:email" iconClass="size-5" />
			<IconLink href={links.github} title="GitHub" icon="mdi:github" iconClass="size-5" />
			<IconLink href={links.linkedin} title="LinkedIn" icon="mdi:linkedin" iconClass="size-5" />
		</div>
	</div>
</footer>

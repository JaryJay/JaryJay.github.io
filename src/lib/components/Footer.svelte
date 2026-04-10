<script lang="ts">
	import SocialLink from './SocialLink.svelte';
</script>

<footer class="border-t border-border/50 mt-12">
	<div class="centered-content px-4 py-6 flex items-center justify-between gap-4 flex-wrap">
		<p class="text-muted-foreground text-sm !mt-0">
			© {new Date().getFullYear()} Jay Ren
		</p>
		<div class="flex gap-4">
			<SocialLink href="https://github.com/JaryJay" title="GitHub" icon="mdi:github" iconSize="size-5" />
			<SocialLink href="https://linkedin.com/in/jay-ren-a57657206" title="LinkedIn" icon="mdi:linkedin" iconSize="size-5" />
		</div>
	</div>
</footer>

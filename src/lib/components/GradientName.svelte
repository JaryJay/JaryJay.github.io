<h1 class="gradient-name font-semibold">
	<slot />
</h1>

<style>
	.gradient-name {
		background: linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--muted-foreground)) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	:global(.dark) .gradient-name {
		background: linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--accent)) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
</style>

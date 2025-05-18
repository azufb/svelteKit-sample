<!-- TypeScript(JavaScript) -->
<script lang="ts">
	// 分割代入でprops受け取り
	let { message } = $props();
</script>

<!-- HTML -->
<div>
	<p class="message">{message}</p>
</div>

<!-- Styling -->
<style>
	.message {
		color: #f96743;
		font-size: 24px;
	}
</style>

<!-- TypeScript(JavaScript) -->
<script lang="ts">
	// 分割代入でprops受け取り
	let { isAttend } = $props();

	let message = isAttend ? 'あずにゃん参加！' : 'あずにゃん不参加...😭';
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

<!-- TypeScript(JavaScript) -->
<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { BUTTON_THEME } from '$lib/components/Button.types';
	import Message from '$lib/components/Message.svelte';

	let isAttend: boolean | null = $state(null);
	let message = $state('');

	/**
	 * ボタン押下時の処理
	 */
	function handleClickAttend() {
		isAttend = !isAttend;
	}

	$effect(() => {
		if (isAttend === null) {
			message = 'Svelte, Hello World!';
			return;
		}
		message = isAttend ? 'あずにゃん参加！' : 'あずにゃん不参加...😭';
	});
</script>

<!-- HTML -->
<h1>Hackers' Meetup #11</h1>
<Message {message} />

<div>
	{#if isAttend}
		<Button label="不参加..." theme={BUTTON_THEME.ERROR} onClick={handleClickAttend} />
	{:else}
		<Button label="参加する！" theme={BUTTON_THEME.SUCCESS} onClick={handleClickAttend} />
	{/if}
</div>

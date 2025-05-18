<!-- TypeScript(JavaScript) -->
<script lang="ts">
	import { BUTTON_THEME, type ButtonProps } from './Button.types';

	let props: ButtonProps = $props();
</script>

<!-- HTML -->
<button
	class="button"
	class:successButton={props.theme === BUTTON_THEME.SUCCESS}
	class:errorButton={props.theme === BUTTON_THEME.ERROR}
>
	{props.label}
</button>

<!-- Styling -->
<style>
	.button {
		padding: 4px 8px;
		font-weight: bold;
	}

	.successButton {
		background-color: #497cc8;
	}

	.errorButton {
		background-color: #ff5757;
	}
</style>

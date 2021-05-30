<template>
	<CustomButton transparent secondary @click="addNewLink">
		<IconPlus />
		<p class="m-left-10">Submit A Link</p>
	</CustomButton>
</template>

<script>
import { CustomButton } from '@kits'
import { IconPlus } from '@icon'

export default {
	name: 'submit-button',

	components: {
		CustomButton,
		IconPlus
	},

	methods: {
		addNewLink() {
			this.$router.push({ name: 'addNewItem' })
		}
	}
}
</script>

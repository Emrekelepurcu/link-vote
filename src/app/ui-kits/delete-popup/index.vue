<template>
	<Modal>
		<Container class="d-flex justify-center align-center f-direction-row">
			<Container class="bg-color-secondary delete-popup">
				<Container class="d-flex justify-center f-direction-column m-bottom-15">
					<p>{{ globalText.deleteText }}</p>
					<h3>{{ deleteData.linkName }}</h3>
				</Container>
				<Container class="d-flex justify-center f-direction-row">
					<CustomButton secondary class="m-right-5" @click="deleteAction()">
						{{ globalText.confirmText }}
					</CustomButton>
					<CustomButton secondary class="m-left-5" @click="closeModal()">
						{{ globalText.cancelText }}
					</CustomButton>
				</Container>
			</Container>
		</Container>
	</Modal>
</template>

<script>
import { Container, Modal, CustomButton } from '@kits'
import { GLOBALDATA } from '@constant'

export default {
	name: 'toaster',

	props: {
		deleteData: {
			type: Object,
			default: () => {}
		}
	},

	computed: {
		globalText() {
			return GLOBALDATA
		}
	},

	components: {
		Container,
		Modal,
		CustomButton
	},

	methods: {
		deleteAction() {
			this.$emit('deleteAction', this.deleteData)
		},

		closeModal() {
			this.$emit('closeModal')
		}
	}
}
</script>

<style lang="scss" scoped>
.delete-popup {
	width: max-content;
	height: max-content;
	padding: 50px;
	border-radius: $border-radius;
	text-align: center;
}
</style>

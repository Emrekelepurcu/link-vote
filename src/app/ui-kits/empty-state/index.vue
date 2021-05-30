<template>
	<Container class="d-flex f-direction-column justify-center empty-state m-top-20 m-bottom-20">
		<h2 id="empty-state-title" class="color-secondary font-weight-bolder">{{ title }}</h2>
		<p id="empty-state-desc" class="color-primary font-weight-bolder m-top-15">{{ desc }}</p>
	</Container>
</template>

<script>
import { Container } from '@kits'
import { GLOBALDATA } from '@constant'

export default {
	name: 'vote-container',
	components: {
		Container
	},
	props: {
		title: {
			type: String,
			default: GLOBALDATA.emptyStateTitle
		},
		desc: {
			type: String,
			default: GLOBALDATA.emptyStateDesc
		}
	}
}
</script>


<style lang="scss" scoped>
.empty-state {
	text-align: center;
}
</style>

<template>
	<Container class="d-flex f-direction-row vote-list m-top-20 m-bottom-20" v-if="linkData.linkName && linkData.linkUrl">
		<VotePoint :point="votePoint"/>
		<CustomButton transparent noBorder class="remove-icon" @click="removeItem">
			<IconDelete />
		</CustomButton>
		<Container class="d-flex f-direction-column justify-flex-start m-left-15 vote-flow">
			<VoteText :linkName="linkData.linkName" :linkUrl="linkData.linkUrl" />
			<Container class="d-flex f-direction-row justify-flex-start align-flex-end p-left-0 m-top-10">
				<VoteButton class="m-right-15" voteText="UpVote" @vote="voting" />
				<VoteButton voteText="DownVote" :isUpvote="false" @vote="voting" />
			</Container>
		</Container>
	</Container>
</template>

<script>
import { Container, CustomButton } from '@kits'
import { VotePoint, VoteText, VoteButton } from './components'
import { IconDelete } from '@icon'
export default {
	name: 'vote-container',
	data() {
		return {
			votePoint: 0
		}
	},
	components: {
		Container,
		VotePoint,
		VoteText,
		VoteButton,
		CustomButton,
		IconDelete
	},
	props: {
		linkData: {
			type: Object,
			required: true
		}
	},
	created() {
		this.votePoint = this.linkData.votePoint
	},
	methods: {
		voting(isUpvoteButton) {
			this.votePoint = isUpvoteButton ? this.votePoint + 1 : this.votePoint - 1
			const emitData = {
				id: this.linkData.id,
				votePoint: this.votePoint
			}
			this.$emit('voteAction', emitData)
		},

		removeItem() {
			this.$emit('removeItem', this.linkData)
		}
	}
}
</script>


<style lang="scss" scoped>
.vote-list {
	position: relative;
	height: 110px;
	padding: 10px;
	border-radius: $border-radius-small;
	transition: all 0.3s;

	.remove-icon {
		position: absolute;
		right: 0;
		top: 0;
		display: none;
	}

	&:hover {
		background-color: lighten($color-grey, 5%);
		.remove-icon {
			display: block;
		}
	}

	.vote-flow {
		overflow: hidden;
	}

}
</style>

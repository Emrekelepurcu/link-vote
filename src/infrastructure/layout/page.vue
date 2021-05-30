<template>
	<div id="main-container">
		<Header>
			<Container class="d-flex justify-space-between">
				<div class="logo">
					hepsiBurada
				</div>
				<div class="logo">
					linkVote
				</div>
			</Container>
		</Header>
		<Body>
			<router-view />
		</Body>
	</div>
</template>

<script>
import Header from '@layout/components/page-header'
import Body from '@layout/components/page-body'
import { Container } from '@kits'

export default {
	name: 'App',
	components: {
		Header,
		Body,
		Container
	}
}
</script>

<style>

</style>

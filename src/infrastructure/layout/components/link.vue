<template>
	<div class="link">
		<router-link
			class="link-item"
			v-for="(item, index) in navItems"
			:key="index"
			:to="{ name: item.name }">
				{{ item.name }}
		</router-link>
	</div>
</template>

<script>
export default {
		name: 'pageHeader',
		props: {
			navItems: {
				type: Array,
				required: true
			}
		}
}
</script>

<style lang="scss" scoped>
.link {
	&-item {
		color: red;
	}
	a {
		text-decoration: none;
	}
}
</style>

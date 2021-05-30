<template>
  <div id="app">
		<div ref="toasterRef"></div>
    <Page />
  </div>
</template>

<script>
import Page from '@layout/page'
import EventBus from '@utils/event-bus'

export default {
  name: 'App',
  components: {
    Page
  },

	created() {
		// Using EventBus for toaster instead of vuex
		EventBus.$on('ToasterActivate', (toasterInstance) => {
			this.$refs.toasterRef.appendChild(toasterInstance)
			setTimeout(() => {
				this.$refs.toasterRef.innerHTML = ""
			}, 2000);
    })
	}
}
</script>

<style>
* {
	font-family: Verdana, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background: #BBB;
	min-height: 100vh;
	padding-bottom: 50px;
}
</style>

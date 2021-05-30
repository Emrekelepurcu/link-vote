import Vue from 'vue'
import EventBus from '@utils/event-bus'
import { Toaster } from '@kits'

const creatingToaster = () => ({

	data() {
		return {
			timer: null
		}
	},
	methods: {
		createToaster(title) {
			// Creating Toaster component for inserting it to dom and send emit via eventbus
			let ComponentClass = Vue.extend(Toaster)
			let instance = new ComponentClass({
					propsData: { toasterText: title }
			})
			instance.$mount()
			EventBus.$emit('ToasterActivate', instance.$el)
		},
	}
})

export default creatingToaster

<template>
	<Container class="d-flex f-direction-row justify-center ">
		<Container class="d-flex f-direction-column justify-flex-start custom-container">
			<Container class="d-flex f-direction-column justify-flex-start">
				<CustomButton noBorder class="m-top-15 custom-button justify-flex-start" @click="returnList">
					<IconLeftArrow />
					<p class="color-white m-left-10">Back to List</p>
				</CustomButton>
				<h2 class="color-secondary font-weight-colder m-top-25 m-bottom-20">Add New Link</h2>
				<ValidationObserver ref="observer" v-slot="{ handleSubmit }">
					<form @submit.prevent="handleSubmit(addNewLink)">
						<ValidationProvider name="required" rules="required|max:20" v-slot="{ errors, failed }">
							<CustomInput
								idName="link-name"
								labelName="Link Name"
								:error="failed"
								v-model="form.linkName"
							/>
							<p class="color-danger m-bottom-20 m-top-10"> {{ errors[0] }}</p>
						</ValidationProvider>
						<ValidationProvider :rules="{required: true, regex: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/ }" v-slot="{ errors, failed }">
							<CustomInput
								class="m-top-10"
								idName="link-url"
								labelName="Link URL"
								:error="failed"
								v-model="form.linkUrl"
							/>
							<p class="color-danger m-top-10"> {{ errors[0] }}</p>
						</ValidationProvider>
						<Container class="d-flex justify-flex-end m-top-15">
							<CustomButton type="submit" secondary>
								<p class="color-white">ADD</p>
							</CustomButton>
						</Container>
					</form>
				</ValidationObserver>
			</Container>
		</Container>
	</Container>
</template>

<script>
import { Container, CustomInput, CustomButton } from '@kits'
import { IconLeftArrow } from '@icon'
import { v4 as uuidv4 } from 'uuid';

import storageMixin from '@mixins/storage-mixin' // saveStorageList
import creatingToaster from '@mixins/toaster' // createToaster

export default {
	name: 'addNewItem',

	mixins: [storageMixin('urlList', true), creatingToaster()],

	components: {
		Container,
    CustomInput,
		CustomButton,
		IconLeftArrow
  },

	data() {
		return {
			form: {
				linkName: '',
				linkUrl: ''
			}
		}
	},

	methods: {
		addNewLink() {
			const payload = {
				...this.form,
				votePoint: 0,
				id: uuidv4(),
				updatedDate: new Date()
			}

			this.saveStorageList(payload)
			this.createToaster(`${this.form.linkName} succesfully created`)
			this.resetForm()
		},

		resetForm() {
			this.form.linkName = ''
			this.form.linkUrl = ''
			requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
		},

		returnList() {
			this.$router.push({ name: 'list' })
		}
	}
}
</script>

<style lang="scss" scoped>
.custom-container {
	max-width: 700px;
}

.custom-button {
	max-width: 200px;
}
</style>

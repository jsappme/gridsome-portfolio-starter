<template>
	<Layout>
		<div class="container max-w-none overflow-hidden">
			<div class="mx-auto my-10 w-64 text-center uppercase font-bold">
				Hello {{ user.given_name || user.name }}
			</div>
			<table class="table-auto mx-auto mb-4">
				<tbody>
					<tr>
						<td class="border px-4 py-2">Picture</td>
						<td class="border px-4 py-2"><img :src="user.picture" /></td>
					</tr>
					<tr>
						<td class="border px-4 py-2">Given Name</td>
						<td class="border px-4 py-2">{{ user.given_name }}</td>
					</tr>
					<tr>
						<td class="border px-4 py-2">Family Name</td>
						<td class="border px-4 py-2">{{ user.family_name }}</td>
					</tr>
					<tr>
						<td class="border px-4 py-2">Name</td>
						<td class="border px-4 py-2">{{ user.name }}</td>
					</tr>
					<tr>
						<td class="border px-4 py-2">Nickname</td>
						<td class="border px-4 py-2">{{ user.nickname }}</td>
					</tr>
					<tr>
						<td class="border px-4 py-2">Email</td>
						<td class="border px-4 py-2">{{ user.email }}</td>
					</tr>
				</tbody>
			</table>
			<div class="text-center mb-4">
				<g-link to="/logout">Logout</g-link>
			</div>
		</div>
	</Layout>
</template>
<script>
export default{
	metaInfo: {
		title: 'Profile'
	},
	mounted() {
		this.user = this.$auth.user || {};
	},
	data(){
		return{
			user: {}
		}
	},
}
</script>

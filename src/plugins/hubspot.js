import Vue from 'vue'
import { hownerid, hapikey } from "../../hubspot_config.json";

let hubspot = new Vue({
	computed: {
	},
	methods: {
		getContactByEmail(email){
			console.log(email);
			fetch("https://api.hubapi.com/contacts/v1/contact/email/" + email + "/profile?hapikey=" + hapikey, {
				method: "GET"
			})
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((json) => {
				console.log(json);
				if(json.inlineMessage) {
					alert(json.inlineMessage);
				}else if(json.errors && json.errors[0] && json.errors[0].message){
					alert(json.errors[0].message);
				}else if(json.message){
					alert(json.message);
				}else{
					alert("ERROR!!!");
				}
			});
		}
	}
})

export default {
  install: function(Vue) {
    Vue.prototype.$hubspot = hubspot;
    console.log(hownerid, hapikey);
  }
}

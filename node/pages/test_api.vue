<template>
    <v-container>
        <v-btn @click="click_public">public api</v-btn>
        <v-btn @click="click_private">private api</v-btn>
    </v-container>
</template>

<script>
export default {
    methods: {
        click_public: async function() {
            const res = await this.$axios.$get('http://localhost:3010/api/public')
            console.log(res)
        },
        click_private: async function() {
            const res = await this.$axios.$post('http://localhost:3010/api/private', 
            {}, 
            {
                header: {'Authorization': this.$auth.getToken('auth0') }
            })
            console.log(res)
        }
    }
}
</script>
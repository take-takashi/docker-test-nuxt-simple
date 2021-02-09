<template>
    <v-container>
        <v-btn @click="click_public">public api</v-btn>
        <v-btn @click="click_private">private api</v-btn>
        <v-btn @click="click_api">click api</v-btn>

        <v-spacer class="ma-5"></v-spacer>

        <v-row>
            <v-col>
                <p v-for="item in test" v-bind:key="item.name">{{ item.name }}</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            test: null,
        }
    },
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
        },
        click_api: async function() {
            //const res = await this.$axios.$get('http://localhost:3000/api/mst_user')
            const res = await this.$axios.$get('./api/mst_user')
            console.log(res)
            this.test = res
        }
    }
}
</script>
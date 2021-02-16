<template>
    <v-container>

        <v-row>
            <v-col>
                <v-alert type="info" dismissible outlined>
                    ユーザーの検索条件を指定してください。
                </v-alert>
            </v-col>
        </v-row>

        <v-form>
            <v-row>
                <v-col>
                    <v-text-field label="name" outlined persistent-hint hint="名前を入れてください"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field label="email" outlined></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="d-flex justify-center">
                    <v-btn class="blue mx-2" @click="on_search"><span class="white--text font-weight-bold">検　　索</span></v-btn>
                    <v-btn class="red  mx-2"><span class="white--text font-weight-bold">条件ﾘｾｯﾄ</span></v-btn>
                </v-col>
            </v-row>

            <v-divider class="ma-5"></v-divider>

            <div v-if="data != null">
                <v-data-table :headers="headers" :items="data"></v-data-table>
            </div>

            <div>
                <nuxt-link to="/test_userinfo?user_id=123">test_userinfo01</nuxt-link>
                <nuxt-link to="/test_userinfo?user_id=001">test_userinfo02</nuxt-link>
                <nuxt-link to="/test_userinfo?user_id=999">test_userinfo99</nuxt-link>
            </div>
            
        </v-form>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            headers: [
                {text: 'name', value: 'name'},
                {text: 'email', value: 'email'},
            ],
            data: null,
        }
    },
    methods: {
        on_search: async function() {
            const data = await this.$axios.$get('http://localhost:3010/json/UserMst')
            this.data = data;
        }
    }
}
</script>
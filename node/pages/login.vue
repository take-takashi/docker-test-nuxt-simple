<template>
    <v-container>
        <v-form>
            <v-btn @click="loginTest">ログイン</v-btn>
        </v-form>
    </v-container>
</template>

<script>
export default {
    layout: 'noheader',
    methods: {
        loginTest: function() {
            this.$auth.loginWith('auth0')
        }
    }
}
</script>
<template>
    <v-btn v-bind="$attrs" v-on="$listeners" @click="click" color="error">
        ログアウト
    </v-btn>
</template>

<script>
export default {
    methods: {
        click: async function() {
            await this.$auth.logout()
            this.$router.push('/login')
        }
    }
}
</script>
<template>
    <v-container>
        <p>こんにちは、{{ $auth.$state.user.name }}さん！</p>
    </v-container>
</template>

<script>
export default {
    layout: 'default',
    mounted: function() {
        console.log(this.$auth.getToken('auth0'));
    }
}
</script>
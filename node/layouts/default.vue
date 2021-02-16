<template>
    <v-app>
        <v-app-bar app dense>
            <v-toolbar-title class="title">
                <span>{{ $store.state.main.title }}</span>
            </v-toolbar-title>
            <LayoutMenu></LayoutMenu>
        </v-app-bar>
        <v-main>
            <Nuxt :keep-alive="is_keep_alive" />
        </v-main>

        <LayoutFooter></LayoutFooter>
    </v-app>
</template>


<script>
export default {
    data() {
        return {
            // keep-aliveモードのON,OFF
            is_keep_alive: true,
        }
    },
    created() {
        // developmentの時のみKeepAliveを無効化する
        if (process.env.NODE_ENV === 'development') {
            this.is_keep_alive = false
        }
    }
}
</script>

<style lang="scss" scoped>
// タイトルが勝手に省略されるのを防ぐ
.title {
    overflow: visible;
    text-overflow: unset;
}
</style>
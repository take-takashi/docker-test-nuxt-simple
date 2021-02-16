<template>
    <v-app>
        <v-app-bar app dense>
            <v-toolbar-title class="title">
                <span>{{ $store.state.main.title }}</span>
            </v-toolbar-title>
            <LayoutMenu></LayoutMenu>
        </v-app-bar>
        <v-main>
            <Nuxt keep-alive />
        </v-main>

        <LayoutFooter></LayoutFooter>
    </v-app>
</template>

<style lang="scss" scoped>
// タイトルが勝手に省略されるのを防ぐ
.title {
    overflow: visible;
    text-overflow: unset;
}
</style>
<template>
  <v-app light>
    <v-app-bar app dense>
      <v-toolbar-title>{{ $store.state.main.title }}</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs>
          <v-tab :to="'/'">index</v-tab>
          <v-tab :to="'test'">test</v-tab>
        </v-tabs>
      </template>

    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
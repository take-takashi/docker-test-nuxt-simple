<template>
  <v-app>
    <v-app-bar app dense>
      <v-toolbar-title>{{ $store.state.main.title }}</v-toolbar-title>

      <template>
        <v-tabs>
          <v-tab :to="'/'">index</v-tab>
          <v-tab :to="'login'">login</v-tab>
          <v-tab :to="'test'">test</v-tab>
          <v-tab :to="'test_api'">test_api</v-tab>
          <v-tab :to="'test_search'">test_search</v-tab>
        </v-tabs>
      </template>

    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <LayoutFooter></LayoutFooter>
  </v-app>
</template>
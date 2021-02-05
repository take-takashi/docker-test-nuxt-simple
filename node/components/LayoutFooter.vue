<template>
    <v-footer v-bind="$attrs" v-on="$listeners">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
</template>
<template>
    <v-main>
      <v-container>

        <div>
          <p>{{ $store.state.main.title }}</p>
        </div>

      </v-container>
    </v-main>
</template>

<script>
export default {
  middleware: 'test'
}
</script>

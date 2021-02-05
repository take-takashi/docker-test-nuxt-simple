<template>
    <v-main>
      <v-container>

        <div>
          <p>{{ $store.state.main.title }}</p>
          <p>
            <ButtonLogout></ButtonLogout>
          </p>
        </div>

      </v-container>
    </v-main>
</template>

<script>
export default {
  layout: 'default'
}
</script>
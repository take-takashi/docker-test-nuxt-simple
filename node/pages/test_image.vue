<template>
    <v-container>

        <div v-if="this.json != null">
            <v-img :src="this.json.src"></v-img>
        </div>

    </v-container>
</template>

<script>
export default {
    data() {
        return {
            json: null,
        }
    },
    activated: async function() {
        const jsons = await this.$axios.$get('./api/image')
        this.json = jsons
        console.log(this.json)
    },
}
</script>
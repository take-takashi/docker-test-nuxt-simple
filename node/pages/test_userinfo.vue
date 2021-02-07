<template>
    <v-container>
        <p>hello</p>
        <v-simple-table v-if="user != null">
            <tbody>
                <tr v-for="(value, key) in user" :key="key">
                    <td>{{ key }}</td>
                    <td>{{ value }}</td>
                </tr>
            </tbody>
        </v-simple-table>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            user: null,
        }
    },
    mounted: async function() {
        const data = await this.$axios.$get('http://localhost:3010/json/UserInfo')
        this.user = data
    }
}
</script>
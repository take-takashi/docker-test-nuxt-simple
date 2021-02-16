<template>
    <v-container>

        <!-- エラーがある場合の表示 -->
        <div v-if="this.error === true">
            <v-alert type="error">
                <span>指定されたユーザーが存在しません！</span>
            </v-alert>
        </div>
        

        <p>クエリパラメータ「{{ $route.query.user_id }}」</p>
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
            error: false,
        }
    },
    activated: async function() {
        let user_data = null
        if (this.$route.query.user_id === '123') {
            user_data = await this.$axios.$get('./api/info_user')
        } else if (this.$route.query.user_id === '001') {
            user_data = await this.$axios.$get('./api/info_user02')
        }
        
        if (user_data != null) {
            this.user = user_data
        } else {
            this.error = true
        }
        
    }
}
</script>
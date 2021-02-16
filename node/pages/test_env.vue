<template>
    <v-container>
        <v-row>
            <v-col>
                <span>aaa = {{ test1 }}</span>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            // .envファイルの変数を読み込む方法
            // NUXT_ENV_で始めた変数は自動的に読み込まれる
            // なお、templateの中に直接読み込むことはできないので、
            // script内で読み込む必要がある
            test1: process.env.NUXT_ENV_TEST,
            test2: process.env.TEST,
        }
    },
}
</script>
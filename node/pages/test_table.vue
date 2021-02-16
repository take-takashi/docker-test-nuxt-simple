<template>
    <v-container>

        <v-data-table 
            :headers="header"
            :items="item"
        >
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon small @click="on_button(item)">
                    mdi-dots-vertical-circle-outline
                </v-icon>
            </template>
        </v-data-table>
        
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            header: [
                { text: 'name', value: 'name' },
                { text: 'email', value: 'email' },
                { text: 'mente', value: 'actions', sortable: false }
            ],
            item: [
                {name: 'testさん', email: 'test@test'}
            ]
        }
    },
    methods: {
        on_button(item) {
            console.log('item = ', item)
        }
    }
}
</script>
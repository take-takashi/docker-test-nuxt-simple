<template>
    <v-container>
        <v-form>
            <v-row>
                <v-col>
                    <v-text-field label="name" outlined persistent-hint hint="名前を入れてください"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field label="email" outlined></v-text-field>
                </v-col>
            </v-row>

            <v-divider class="ma-5"></v-divider>

            <v-row>
                <v-col class="d-flex justify-center">
                    <v-btn class="blue mx-2"><span class="white--text font-weight-bold">検　　索</span></v-btn>
                    <v-btn class="red  mx-2"><span class="white--text font-weight-bold">条件ﾘｾｯﾄ</span></v-btn>
                </v-col>
            </v-row>
            
        </v-form>
    </v-container>
</template>

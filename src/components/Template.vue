<template>
    <div class="">
        <h3>{{ title }}</h3>
        <div>{{ content }}</div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    const DATA = {

    };

    @Component({

        name: 'Article',

        data (): object {
            return {
                title: 'title',
                content: 'content',
            };
        },

        methods: {
            action (e: any): number {
                return 0;
            },
        },

        computed: { },

        mounted (): void {
            console.log();
        },

        components: {},
    })

    export default class Article extends Vue {}
</script>
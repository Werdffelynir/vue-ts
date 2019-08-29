<template>
    <div class="">
        <h3>{{ title }}</h3>
        <div>{{ content }}</div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    function func (a: any = 0): number {
        return 100 / 30 + a;
    }
    
    @Component({
        data (): object {
            return {
                title: 'title',
                content: 'content',
            };
        },
        components: {},
    })

    export default class Article extends Vue {}
</script>

<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }
</style>

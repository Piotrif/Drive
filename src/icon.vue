<template>
    <svg class="icon" :class="'icon-' + name">
        <use :xlink:href="xlink"/>
    </svg>
</template>

<script>

export default {
    props: ['name'],
    data () {
        return {
            icon: this.name
        }
    },
    computed: {
        xlink () {
            return require('./assets/svg/' + this.icon + '.svg').default
        }
    }
}
</script>
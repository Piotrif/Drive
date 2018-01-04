<template>
    <div>
        <nav class="sidemenu flexbox-center">
            <ul>
                <li v-for="(item, index) in icons" v-bind:key="index" :class="{'active': activeStep === index + 1}">
                    <a @click="changeStep(index + 1)">
                        <icon class="small-svg" :name="item.icon"></icon>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                activeStep: this.initStep
            }
        },
        props: [
            'initStep',
            'icons'
        ],
        methods: {
            changeStep (selectedStep) {
                this.activeStep = selectedStep
                this.$emit('changeStep', selectedStep)
            }
        }
    }
</script>
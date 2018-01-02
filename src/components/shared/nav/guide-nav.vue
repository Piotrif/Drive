<template>
    <div>
        <nav class="sidemenu flexbox-center">
            <ul>
                <li :class="{'active': activeStep === 1}">
                    <a @click="changeStep(1)">
                        <img src="./../../../assets/svg/wrench.svg" alt="wrench svg" class="wrench-svg">
                    </a>
                </li>
                <li :class="{'active': activeStep === 2}">
                    <a @click="changeStep(2)">
                        <img src="./../../../assets/svg/wrench.svg" alt="wrench svg" class="wrench-svg">
                    </a>
                </li>
                <li :class="{'active': activeStep === 3}">
                    <a @click="changeStep(3)">
                        <img src="./../../../assets/svg/wrench.svg" alt="wrench svg" class="wrench-svg">
                    </a>
                </li>
                <li :class="{'active': activeStep === 4}">
                    <a @click="changeStep(4)">
                        <img src="./../../../assets/svg/wrench.svg" alt="wrench svg" class="wrench-svg">
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
            'task',
            'sidebar',
            'initStep'
        ],
        methods: {
            changeStep (selectedStep) {
                this.activeStep = selectedStep
                this.$emit('changeStep', selectedStep)
            }
        }
    }
</script>
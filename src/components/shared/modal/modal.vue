<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper flexbox-center">
                <div class="modal-container">
                    <button type="button" @click="closeModal" class="close-button">
                        <span aria-hidden="true" tabindex="-1">×</span>
                    </button>
                    <div class="modal-body">
                        <slot name="body">
                            <component :is="selectedView" @close="closeModal" :data="data"></component>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import taskModalActivity from './../../pages/task/task-modal-activity.vue'
import taskModalRoutine from './../../pages/task/task-modal-routine.vue'

export default {
    name: 'modal',
    data () {
        return {
            selectedView: null
        }
    },
    props: [
        'modalType',
        'data'
    ],
    components: {
        'task-modal-activity': taskModalActivity,
        'task-modal-routine': taskModalRoutine
    },
    methods: {
        closeModal () {
            this.$emit('close')
        }
    },
    created () {
        this.selectedView = this.modalType
        console.log('data', this.data)
    }
}
</script>
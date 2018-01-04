<template>
    <div>
        <modal v-if="showModal" :data="accordionSelected" :modalType="'task-modal-routine'" @close="closeModal"></modal>
        <div class="grid-x accordion-counter">
            <div class="large-8 cell">
                <span>4 aktiviteter</span>
            </div>
            <div class="large-2 cell">
                <a>ikon</a>
                <a @click="openModal">opret rutine</a>
            </div>
        </div>
        <!-- ------------- Header ------------- -->
        <div v-for="activity in activities" v-bind:key="activity.id">
            <div class="grid-x align-items" >
                <div style="width: 23px;" @click="toggleContent(activity.id)">
                    pil
                </div>
                <div class="large-10 cell">
                    <div class="grid-x accordion row align-items" @click="select(activity)" :class="{'selected': accordionSelected.id == activity.id}">
                        <div class="large-3 cell item">
                            <span>{{activity.task}}</span>
                        </div>
                        <div class="large-4 cell item">
                            <span>{{activity.user}}</span>
                            <span>{{activity.work}}</span>
                        </div>
                        <div class="large-2 cell item">
                            <span>{{activity.timeFrom | formatDate}} - {{activity.timeTo | formatDate}}</span>
                        </div>
                        <div class="large-2 cell item flexbox-center">
                            <div class="activity-status">{{activity.status}}</div>
                        </div>
                    </div>
                </div>
                <div style="margin-left: 23px;">
                    blyant
                </div>
            </div>

            <!-- ------------- Content ------------- -->
            <div class="grid-x">
                <div style="margin-left: 23px;" class="large-10 cell accordion content" v-if="contentVisible == activity.id">
                    <div class="grid-x">
                        <div class="large-1 cell">
                            <span>ikon</span>
                        </div>
                        <div class="large-5 cell">
                            <span>Knude BBA0140 T:Brønd Sy:Fælles</span>
                        </div>
                        <div class="large-1 cell">
                            <span>ikon</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import modal from './../../shared/modal/modal.vue'

export default {
    data () {
        return {
            contentVisible: false,
            accordionSelected: false,
            showModal: false,
            activities: [
                { id: 1, task: 'Indstilling / kalibrering', user: 'John Hansen', work: 'Arkil', timeFrom: 'Wed Jan 03 2018 13:06:27 GMT+0100 (Romance Standard Time)', timeTo: 'Wed Jan 05 2018 13:06:27 GMT+0100 (Romance Standard Time)', status: 'Ikke rekvireret' },
                { id: 2, task: 'Indstilling / kalibrering', user: 'Erik Nielsen', work: 'Arkil', timeFrom: 'Wed Jan 05 2018 13:06:27 GMT+0100 (Romance Standard Time)', timeTo: 'Wed Jan 08 2018 13:06:27 GMT+0100 (Romance Standard Time)', status: 'Ikke rekvireret' }
            ]
        }
    },
    components: {
        modal
    },
    methods: {
        toggleContent (id) {
            if (this.contentVisible === id) {
                this.contentVisible = false
            } else {
                this.contentVisible = id
            }

            if (this.contentVisible) {
                this.$emit('content-visible', this)
            }
        },
        select (activity) {
            if (this.accordionSelected.id === activity.id) {
                this.accordionSelected = false
            } else {
                this.accordionSelected = activity
            }
        },
        openModal () {
            this.showModal = true
        },
        closeModal () {
            this.showModal = false
        }
    },
    filters: {
        formatDate (date) {
            return window['moment'](date).format('DD[.] MMM')
        }
    }
}
</script>

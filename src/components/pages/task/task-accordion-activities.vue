<template>
    <div>
        <modal v-if="showModal" :data="accordionSelected" :modalType="modalType" @close="closeModal"></modal>
        <div class="grid-x accordion-counter align-items">
            <div class="large-7 cell customContentInsertion">
                <span>4 aktiviteter</span>
            </div>
            <div class="large-1 cell">
                <button>
                    <icon class="bin-svg small-svg fill-dark-gray" name="bin"></icon>
                </button>
            </div>
            <div class="large-2 cell">
                <a class="button-small" @click="openModal('task-modal-routine')" :class="{'disabled': accordionSelected == false}">
                    <icon class="routine-svg small-svg fill-white" name="routine"></icon>
                    opret rutine
                </a>
            </div>
        </div>

        <!-- ------------- Header ------------- -->
        <div v-for="(activity, index) in activities" v-bind:key="activity.id">
            <div class="grid-x align-items">
                <!-- <div class="large-1 cell icon-cell accordion-toggle" @click="toggleContent(activity.id)"> -->
                <div class="large-1 cell icon-cell accordion-toggle" @click="accordionOpen(index)">
                    <icon class="chevron-right-svg big-svg fill-dark-gray" name="chevron-right"></icon>
                </div>
                <div class="large-10 cell">
                    <div class="grid-x accordion row align-items" @click="select(activity)" :class="{'selected': accordionSelected.id == activity.id}">
                        <div class="large-3 cell item">
                            <span>{{activity.task}}</span>
                        </div>
                        <div class="large-3 cell item">
                            <span>{{activity.user}}</span>
                            <span>{{activity.work}}</span>
                        </div>
                        <div class="large-3 cell item">
                            <span>{{activity.timeFrom | formatDate}} - {{activity.timeTo | formatDate}}</span>
                        </div>
                        <div class="large-1 cell item">
                            <icon class="bubble-svg medium-svg fill-dark-gray" name="bubble"></icon>
                        </div>
                        <div class="large-2 cell item flexbox-center">
                            <div class="activity-status">{{activity.status}}</div>
                        </div>
                    </div>
                </div>
                <div class="accordion-edit">
                    <icon class="pencil-svg medium-svg fill-dark-gray" name="pencil"></icon>
                </div>
            </div>
            <p>{{ activity.isOpen }}</p>
            <!-- ------------- Content ------------- -->
            <div class="grid-x">
                <!-- <div class="large-10 cell accordion customContentInsertion" v-if="contentVisible == activity.id"> -->
                <div class="large-10 cell accordion customContentInsertion" v-if="activity.isOpen">
                    <div class="grid-x content">
                        <div class="large-1 cell flexbox-center">
                            <icon class="location-svg small-svg fill-dark-gray" name="location"></icon>
                        </div>
                        <div class="large-10 cell">
                            <span>Knude BBA0140 T:Brønd Sy:Fælles</span>
                        </div>
                        <div class="large-1 cell">
                            <icon class="bin-svg small-svg fill-dark-gray" name="bin"></icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-x">
            <div class="large-10 cell new-accordion flexbox-center customContentInsertion" @click="openModal('task-modal-activity')">
                <p>Tilføj aktivitet</p>
            </div>
        </div>
    </div>
</template>

<script>
import modal from './../../shared/modal/modal.vue'

export default {
    data () {
        return {
            // isOpen: false,
            contentVisible: false,
            accordionSelected: false,
            showModal: false,
            modalType: null,
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
        accordionOpen (index) {
            this.activities[index].isOpen = !this.activities[index].isOpen
        },
        select (activity) {
            if (this.accordionSelected.id === activity.id) {
                this.accordionSelected = false
            } else {
                this.accordionSelected = activity
            }
        },
        openModal (type) {
            if (type === 'task-modal-activity' || this.accordionSelected !== false) {
                this.showModal = true
                this.modalType = type
            }
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

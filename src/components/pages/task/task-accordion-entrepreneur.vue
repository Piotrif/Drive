<template>
    <div>
        <!-- <div class="grid-x accordion-counter">
            <div class="large-8 cell">
                <span>2 entreprenøropgaver</span>
            </div>
        </div> -->

        <!-- ------------- Header ------------- -->
        <div class="grid-x align-items">
            <div class="large-1 icon-cell cell customContentInsertion">
                <icon class="user-svg small-svg fill-dark-gray" name="user"></icon>
            </div>
            <div class="large-2 cell">
                John hansen | Arkil
            </div>
            <div class="large-1 cell">
                <icon class="address-book-svg small-svg fill-dark-gray" name="address-book"></icon>
            </div>
        </div>
        <div v-for="activity in activities" v-bind:key="activity.id">
            <div class="grid-x align-items" >
                <div class="large-1 cell icon-cell accordion-toggle" @click="toggleContent(activity.id)">
                    <icon class="chevron-right-svg big-svg fill-dark-gray" name="chevron-right"></icon>
                </div>
                <div class="large-10 cell">
                    <div class="grid-x accordion row align-items" @click="select(activity)" :class="{'selected': accordionSelected.id == activity.id}">
                        <div class="large-1 cell icon-cell item">
                            <icon class="task-check-svg medium-svg fill-dark-gray" name="task-check"></icon>
                        </div>
                        <div class="large-3 cell item">
                            <span>{{activity.task}}</span>
                        </div>
                        <div class="large-2 cell item">
                            <span>{{activity.object}} objekt</span>
                        </div>
                        <div class="large-2 cell item">
                            <span>{{activity.activities}} aktiviteter</span>
                        </div>
                        <div class="large-2 cell item">
                            <span>{{activity.time}} dage tilbage</span>
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

            <!-- ------------- Content ------------- -->
            <div class="grid-x">
                <div style="margin-left: 23px;" class="large-10 cell accordion" v-if="contentVisible == activity.id">
                    <!-- Dokuments -->
                    <div class="grid-x content align-items">
                        <div class="large-1 cell icon-cell flexbox-center">
                            <icon class="pictures-svg medium-svg fill-dark-gray" name="pictures"></icon>
                        </div>
                        <div class="large-10 cell">
                            <span>Dokumenter</span>
                        </div>
                    </div>
                    <div class="grid-x content">
                        <div class="large-1 cell icon-cell flexbox-center">
                            <icon class="location-svg small-svg fill-dark-gray" name="location"></icon>
                        </div>
                        <div class="large-10 cell">
                            <span>Knude BBA0140 T:Brønd Sy:Fælles</span>
                        </div>
                        
                        <!-- User work -->
                        <div class="grid-x large-auto entrepreneur-work">
                            <div class="large-1 cell icon-cell">
                                <icon class="circle-thin-svg small-svg fill-dark-gray" name="circle-thin"></icon>
                            </div>
                            <div class="large-3 cell">
                                <span>Indstilling/kablibrering</span>
                            </div>
                            <div class="large-1 cell icon-cell">
                                <icon class="bubble-svg small-svg fill-dark-gray" name="bubble"></icon>
                            </div>
                            <div class="large-2 cell">
                                <icon class="dollar-svg small-svg fill-dark-gray" name="dollar"></icon>
                                <span>23RTG34</span>
                            </div>
                            <div class="large-3 cell">
                                <icon class="flag-svg small-svg fill-dark-gray" name="flag"></icon>
                                <span>1 dag tilbage</span>
                            </div>
                            <div class="large-2 cell">
                                <icon class="checkmark-svg small-svg fill-dark-gray" name="checkmark"></icon>
                                <span>Færdig i dag</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            contentVisible: false,
            accordionSelected: false,
            activities: [
                { id: 1, task: 'Indstilling / kalibrering', object: 1, activities: 2, time: 2, status: 'Færdig' },
                { id: 2, task: 'Indstilling / kalibrering', object: 1, activities: 2, time: 2, status: 'Færdig' }
            ]
        }
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
        select () {
            this.accordionSelected = !this.accordionSelected
        }
    },
    filters: {
        formatDate (date) {
            return window['moment'](date).format('DD[.] MMM')
        }
    }
}
</script>

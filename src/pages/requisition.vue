<template>
    <div class="requisition user-work">
        <header class="header-subpage">
            <div class="content-left">
                <div class="grid-x">
                    <div class="large-2 medium-2 small-12 cell flexbox-center">
                        <img src="./../assets/svg/arrow-left-circle.svg" alt="arrow left" class="arrow-left-circle-svg">
                    </div>
                    <div class="large-5 medium-7 small-12 cell">
                        <div class="grid-x">
                            <div class="large-1 cell">
                                <p><u>Entreprenøropgave</u></p>    
                            </div>
                        </div>
                        <div class="grid-x">
                            <div class="large-5 medium-7 small-12 cell">
                                <h1>{{taskName}}</h1>
                                <div class="grid-x">
                                </div>
                            </div>
                        </div>
                        <div class="grid-x">
                            <div class="large-12 medium-12 small-12 cell">
                                <div v-if="!saved">Du accepterede opgaven {{timeStamp}}</div>
                                <div v-if="saved"><img src="./../assets/svg/checkmark.svg" alt="checkmark" class="checkmark-svg"><span>Gemt kl. {{savedTimeStamp}}</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="large-3 medium-3 small-12 cell flexbox-center">
                        <div class="grid-x grid-margin-x">
                            <div class="large-12 medium-12 small-12 cell">
                                <a class="button button-customized" @click="save">Færdigmeld</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <nav class="sidemenu flexbox-center">
                <ul>
                    <li :class="{'active': state == 1}">
                        <a @click="changeState(1)">
                            <img src="./../assets/svg/wrench.svg" alt="wrench svg" class="wrench-svg">
                        </a>
                    </li>
                    <li :class="{'active': state == 2}">
                        <a @click="changeState(2)">
                            <img src="./../assets/svg/wrench.svg" alt="wrench svg" class="wrench-svg">
                        </a>
                    </li>
                    <li :class="{'active': state == 3}">
                        <a @click="changeState(3)">
                            <img src="./../assets/svg/wrench.svg" alt="wrench svg" class="wrench-svg">
                        </a>
                    </li>
                    <li :class="{'active': state == 4}">
                        <a @click="changeState(4)">
                            <img src="./../assets/svg/wrench.svg" alt="wrench svg" class="wrench-svg">
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="overflow content-left">
                
                <!-- ------------- Aktiviteter ------------- -->
                <section v-show="state == 1">
                    <h2>Aktiviteter <span v-if="allTasksCompleted" class="float-right finished-text">Færdig - godt gået!</span></h2>
                        <div class="grid-x activity-container" v-for="activityObject in activityObjects" v-bind:key="activityObject.id">
                            <div class="large-12 medium-12 small-12 cell">
                                <div class="activity-header">
                                    {{activityObject.name}}
                                </div>
                                <div class="activity-group">
                                    <div class="grid-x activity-list" v-for="activity in activityList(activityObject, activities)" v-bind:key="activity.id">
                                        <div class="large-6 medium-6 small-6 cell">
                                            <span class="activity-item">{{activity.name}}</span>
                                            <span class="activity-item">{{activity.remark ? activity.remark : 'Ingen bemærkning'}}</span>
                                        </div>
                                        <div class="large-4 medium-4 small-4 cell">
                                            <span class="activity-item">Note</span>
                                            <span class="activity-item">{{activity.note ? activity.note : 'Ingen note'}}</span>
                                        </div>
                                        <div class="large-2 medium-2 small-2 cell">
                                            <a class="">Deny</a>
                                            <a class="">Accept</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

                <!-- ------------- Dokumentation ------------- -->
                <section v-show="state == 2">
                    <h2 class="no-margin">Dokumentation</h2>
                    <p>Ingen dokumentation til opgaven</p>
                </section>

                <!-- ------------- Billeder ------------- -->
                <section v-show="state == 3">
                    <h2 class="no-margin">Tilføj billeder</h2>
                    <input type="file" name="fileUpload" v-on:change="gotUpload">
                </section>

                <!-- ------------- Kontakt ------------- -->
                <section v-show="state == 4">
                    <h2 class="no-margin">Kontakt</h2>
                    <div class="grid-x">
                        <div v-if="contact.caseworker != null" class="large-6 medium-6 small-12 cell">
                            <div class="contact-cards">
                                <p class="contact-header">Sagsbehandler {{contact.caseworker}}</p>
                                <div v-if="contact.phone != null" class="contact-group">
                                    <div class="contact-background">
                                        <img src="./../assets/svg/enquiry.svg" alt="enquiry svg" class="medium-svg float-left">
                                    </div>
                                    <span>{{contact.phone}}</span>
                                </div>
                                <div v-if="contact.email != null" class="contact-group">
                                    <div class="contact-background">
                                        <img src="./../assets/svg/envelope.svg" alt="envelope svg" class="medium-svg float-left">
                                    </div>
                                    <span>{{contact.email}}</span>
                                </div>
                            </div>

                        </div>
                        <div v-if="contact.reporter != null" class="large-6 medium-6 small-12 cell">
                            <div class="contact-cards">
                                <p class="contact-header">Anmelder {{contact.reporter}}</p>
                                <div v-if="contact.address != null" class="contact-group">
                                    <div class="contact-background">
                                        <img src="./../assets/svg/location.svg" alt="location svg" class="medium-svg float-left">
                                    </div>
                                    <span>{{contact.address}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<script>
import FileUploadHandler from './../mixins/shared/fileupload.js'

export default {
    name: 'requisition',
    mixins: [FileUploadHandler],
    data () {
        return {
            user: 'Niras admin',
            param: null,
            taskName: 'Separatkloakering',
            timeStamp: '11. maj 2016',
            state: 1,
            saved: false,
            savedTimeStamp: null,
            contact: {
                caseworker: null,
                phone: null,
                email: null,
                reporter: null,
                address: null
            },
            allTasksCompleted: false,
            activityObjects: [],
            activities: []
        }
    },
    methods: {
        save () {
            console.log('save')
            this.saved = true
            this.savedTimeStamp = window['moment'](new Date()).format('HH[:]mm')
        },
        changeState (state) {
            this.state = state
        },
        activityList (object, activities) {
            console.log('object', object)
            console.log('activity', activities)
            return activities.filter(activity => {
                return activity.activityObjectId === object.id
            })
        }
    },
    created () {
        // Denne værdi bliver bestemt ud fra id i url
        this.param = this.$route.params.id

        this.activityObjects = [
            {id: 4291, name: 'Knude BBA0140 T:Brønd Sy:Fælles'},
            {id: 5829, name: 'Knude LAA0120 T:Brønd Sy:Fælles'}
        ]

        this.activities = [
            {id: 1, name: 'Ændre start- og stopkoter', note: 'I kælderen', remark: '', activityObjectId: 4291},
            {id: 2, name: 'Ændre stopkoter', note: '', remark: 'Skal ses på inden d. 2.', activityObjectId: 5829},
            {id: 3, name: 'Ændre startkoter', note: 'På loftet', remark: '', activityObjectId: 4291}
        ]

        this.contact.caseworker = 'NIRAS admin'
        this.contact.reporter = 'Børge Rosenbaum'
        this.contact.phone = 22450615
        this.contact.email = 'dasfamily@niras.dk'
        this.contact.address = 'Lodsvej 1, 9370 Hals'
    }
}
</script>
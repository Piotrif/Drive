<template>
    <div class="enquiry">
        <header class="header-subpage">
            <div class="content-left">
                <div class="grid-x">
                    <div class="large-2 medium-2 small-12 cell">
                    </div>
                    <div class="large-7 medium-7 small-12 cell">
                        <p><u>Henvendelse</u></p>
                    </div>
                    <div class="large-3 medium-3 small-12 cell">
                    </div>
                </div>
                <div class="grid-x">
                    <div class="large-2 medium-2 small-12 cell">
                        <div class="flexbox-center full-height">
                            <img src="./../assets/svg/arrow-left-circle.svg" alt="arrow left" class="arrow-left-circle-svg">
                        </div>
                    </div>
                    <div class="large-7 medium-7 small-12 cell">
                        <h1>Ny henvendelse</h1>
                        <div class="grid-x">
                            <div class="large-12 medium-12 small-12 cell">
                                <img src="./../assets/svg/user.svg" alt="user" class="user-svg"> <span>{{user}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="large-3 medium-3 small-12 cell">
                        <div class="grid-x">
                            <div class="large-6 medium-6 small-6 cell">
                                <a class="button button-big" @click="exit" v-if="existingEnquiry">Afslut</a>
                            </div>
                            <div class="large-6 medium-6 small-6 cell">
                                <a class="button button-big" @click="save">Gem</a>
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
                
                <!-- ------------- STATE 1 ------------- -->
                <section v-show="state == 1">
                    <h2>Anmelder</h2>
                    <div class="form">
                        <div class="grid-x">
                            <div class="large-1 medium-1 small-1 cell flexbox-center">
                                <img src="./../assets/svg/file-text.svg" alt="file text svg" class="file-text-svg">
                            </div>
                            <div class="large-3 medium-3 small-3 cell border-bottom">
                                <p>Kontakttype<span class="required">*</span></p>
                            </div>
                            <div class="auto cell border-bottom">
                                <select v-model="review.contacttype" id="select">
                                    <option value="0" disabled="disabled">Vælg Kontakttype i listen</option>
                                    <option v-for="(contacttype, index) in contacttypes" :selected="selected" v-bind:key="index" :value="contacttype.id">
                                        {{contacttype.name}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form">
                        <div class="grid-x">
                            <div class="large-1 medium-1 small-1 cell flexbox-center">
                                <img src="./../assets/svg/user.svg" alt="user svg" class="user-svg">
                            </div>
                            <div class="large-3 medium-3 small-3 cell border-bottom">
                                <p>Navn</p>
                            </div>
                            <div class="auto cell border-bottom">
                                <input type="text" v-model="review.user">
                            </div>
                        </div>
                    </div>

                    <div class="form">
                        <div class="grid-x">
                            <div class="large-1 medium-1 small-1 cell flexbox-center">
                                <img src="./../assets/svg/user.svg" alt="user svg" class="user-svg">
                            </div>
                            <div class="large-3 medium-3 small-3 cell border-bottom">
                                <p>Telefon</p>
                            </div>
                            <div class="auto cell border-bottom">
                                <input type="number" v-model="review.phone">
                            </div>
                        </div>
                    </div>

                    <div class="form">
                        <div class="grid-x">
                            <div class="large-1 medium-1 small-1 cell flexbox-center">
                                <img src="./../assets/svg/mail-checked.svg" alt="email svg" class="mail-checked-svg">
                            </div>
                            <div class="large-3 medium-3 small-3 cell border-bottom">
                                <p>E-mail</p>
                            </div>
                            <div class="auto cell border-bottom">
                                <input type="email" v-model="review.email">
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- ------------- STATE 2 ------------- -->
                <section v-show="state == 2">
                    <h2>Problem</h2>
                    <div class="form">
                        <div class="grid-x">
                            <div class="large-1 medium-1 small-1 cell flexbox-center">
                                <img src="./../assets/svg/mail-checked.svg" alt="email svg" class="mail-checked-svg">
                            </div>
                            <div class="large-3 medium-3 small-3 cell border-bottom">
                                <p>Forsyningsart</p>
                            </div>
                            <div class="auto cell border-bottom select-supply">
                                <div class="button-filter-round water" @click="selectSupply('water')" :class="{'selected-supply-water': selectedSupply == 'water'}"></div><span>Vand</span>
                                <div class="button-filter-round sewer" @click="selectSupply('sewer')" :class="{'selected-supply-sewer': selectedSupply == 'sewer'}"></div><span>Kloak</span>
                            </div>
                        </div>
                    </div>

                    <div class="form">
                        <div class="grid-x">
                            <div class="large-1 medium-1 small-1 cell flexbox-center">
                                <img src="./../assets/svg/mail-checked.svg" alt="email svg" class="mail-checked-svg">
                            </div>
                            <div class="large-3 medium-3 small-3 cell border-bottom">
                                <p>Dato for problem</p>
                            </div>
                            <div class="auto cell border-bottom">
                                <input type="text" v-model="problem.date">
                            </div>
                        </div>
                    </div>

                    <div class="form">
                        <div class="grid-x">
                            <div class="large-1 medium-1 small-1 cell flexbox-center">
                                <img src="./../assets/svg/mail-checked.svg" alt="email svg" class="mail-checked-svg">
                            </div>
                            <div class="large-3 medium-3 small-3 cell border-bottom">
                                <p>Adresse for problem</p>
                            </div>
                            <div class="auto cell border-bottom">
                                <input type="text" v-model="problem.address">
                            </div>
                        </div>
                    </div>

                    <div class="form">
                        <div class="grid-x">
                            <div class="large-1 medium-1 small-1 cell flexbox-center">
                                <img src="./../assets/svg/file-text.svg" alt="file text svg" class="file-text-svg">
                            </div>
                            <div class="large-3 medium-3 small-3 cell border-bottom">
                                <p>Ejendomstype</p>
                            </div>
                            <div class="auto cell border-bottom">
                                <select v-model="problem.propertytype" id="select">
                                    <option value="0" disabled="disabled">Vælg ejendomstype i listen</option>
                                    <option v-for="(propertytype, index) in propertytypes" :selected="selected" v-bind:key="index" :value="propertytype.id">
                                        {{propertytype.name}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form">
                        <div class="grid-x">
                            <div class="large-1 medium-1 small-1 cell flexbox-center">
                                <img src="./../assets/svg/file-text.svg" alt="file text svg" class="file-text-svg">
                            </div>
                            <div class="large-3 medium-3 small-3 cell border-bottom">
                                <p>Problemtype<span class="required">*</span></p>
                            </div>
                            <div class="auto cell border-bottom">
                                <select v-model="problem.problemtype" id="select">
                                    <option value="0" disabled="disabled">Vælg ejendomstype i listen</option>
                                    <option v-for="(problemtype, index) in problemtypes" :selected="selected" v-bind:key="index" :value="problemtype.id">
                                        {{problemtype.name}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form">
                        <div class="grid-x">
                            <div class="large-1 medium-1 small-1 cell flexbox-center">
                                <img src="./../assets/svg/file-text.svg" alt="file text svg" class="file-text-svg">
                            </div>
                            <div class="large-3 medium-3 small-3 cell border-bottom">
                                <p>Vejrtype</p>
                            </div>
                            <div class="auto cell border-bottom">
                                <select v-model="problem.weathertype" id="select">
                                    <option value="0" disabled="disabled">Vælg ejendomstype i listen</option>
                                    <option v-for="(weathertype, index) in weathertypes" :selected="selected" v-bind:key="index" :value="weathertype.id">
                                        {{weathertype.name}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form">
                        <div class="grid-x">
                            <div class="large-1 medium-1 small-1 cell flexbox-center">
                                <img src="./../assets/svg/file-text.svg" alt="file text svg" class="file-text-svg">
                            </div>
                            <div class="large-3 medium-3 small-3 cell border-bottom bigger-padding">
                                <p>Beskrivelse</p>
                            </div>
                            <div class="auto cell border-bottom">
                                <textarea v-model="problem.description" rows="4" cols="30"></textarea>
                            </div>
                        </div>
                    </div>
                </section>

                <section v-show="state == 3">
                    <h2 class="no-margin">Dokumenter</h2>
                    <p>
                        Upload billeder og dokumenter<br />
                        <em>F.eks. pdf, jpg, Word, Excel</em>
                    </p>
                    <input type="file" name="fileUpload" v-on:change="gotUpload">
                </section>

                <section v-show="state == 4">
                    <h2 class="no-margin">Opgave</h2>
                </section>
            </div>
        </main>
        <aside class="map">
            <h1>Map</h1>
            <!-- <map-component></map-component> -->
        </aside>
    </div>
</template>

<script>
import FileUploadHandler from './../mixins/shared/fileupload.js'

export default {
    name: 'enquiry',
    mixins: [FileUploadHandler],
    data () {
        return {
            user: 'Niras admin',
            existingEnquiry: false,
            state: 1,
            selected: null,
            contacttypes: [],
            propertytypes: [],
            problemtypes: [],
            weathertypes: [],
            selectedSupply: 'water',
            review: {
                contacttype: '',
                user: '',
                phone: '',
                email: ''
            },
            problem: {
                date: '',
                address: '',
                contacttype: '',
                propertytype: '',
                problemtype: '',
                weathertype: '',
                description: ''
            }
        }
    },
    methods: {
        changeState (state) {
            this.state = state
        },
        selectSupply (supply) {
            this.selectedSupply = supply
        },
        save () {
            console.log('save clicked')
        },
        exit () {
            console.log('exit clicked')
        }
    },
    created () {
        // this.contacttypes = [
        //     {id: 1, name: 'Anden forsyning'},
        //     {id: 2, name: 'Andet'},
        //     {id: 3, name: 'Borger'},
        //     {id: 4, name: 'Brand'},
        //     {id: 5, name: 'Brand og redning'},
        //     {id: 6, name: 'Driftspersonale'}
        // ],
        this.propertytypes = [
            {id: 1, name: 'Andet'},
            {id: 2, name: 'Beboelse'},
            {id: 3, name: 'Butik'},
            {id: 4, name: 'Butik - lednedsmiddel'},
            {id: 5, name: 'Byggeplads'}
        ]

        this.problemtypes = [
            {id: 1, name: 'Adgangsforhold (anlægsarbejde m.v.)'},
            {id: 2, name: 'Andet'},
            {id: 3, name: 'Defekt dæksel'},
            {id: 4, name: 'Fejlmelding/alarm'},
            {id: 5, name: 'Fluer'}
        ]

        this.weathertypes = [
            {id: 1, name: 'Andet'},
            {id: 2, name: 'Ikke relevant'},
            {id: 3, name: 'Regnvejr'},
            {id: 4, name: 'Skybrud'},
            {id: 5, name: 'Storm/orkan'}
        ]
    }
}
</script>
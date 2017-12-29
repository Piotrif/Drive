<template>
    <div class="user-work">
        <header class="header-subpage">
            <div class="content-left">
                <div class="grid-x">
                    <div class="large-2 medium-2 small-12 cell flexbox-center">
                        <img src="./../assets/svg/arrow-left-circle.svg" alt="arrow left" class="arrow-left-circle-svg">
                    </div>
                    <div class="large-5 medium-7 small-12 cell">
                        <div class="grid-x">
                            <div class="large-1 cell">
                                <p><u>Opgave</u></p>    
                            </div>
                        </div>
                        <div class="grid-x">
                            <div class="large-5 medium-7 small-12 cell">
                                <h1>Ny opgave</h1>
                                <div class="grid-x">
                                </div>
                            </div>
                        </div>
                        <div class="grid-x">
                            <div class="large-12 medium-12 small-12 cell">
                                <img src="./../assets/svg/user.svg" alt="user" class="user-svg"><span>{{user}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="large-3 medium-3 small-12 cell flexbox-center">
                        <div class="grid-x grid-margin-x">
                            <div class="large-6 medium-6 small-6 cell">
                                <a class="button button-big" @click="exit">Afslut</a>
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
                
                <!-- ------------- Oplysninger ------------- -->
                <section v-show="state == 1">
                    <div class="grid-x">
                        <div class="large-10 cell">
                            <h2>Oplysninger</h2>
                        </div>
                        <div class="large-2 cell flexbox">
                            <button class="float-right">Slet opgave</button>
                        </div>
                    </div>
                    
                    <div class="form">
                        <div class="grid-x">
                            <div class="large-1 medium-1 small-1 cell flexbox-center">
                                <img src="./../assets/svg/file-text.svg" alt="file text svg" class="file-text-svg">
                            </div>
                            <div class="large-3 medium-3 small-3 cell border-bottom">
                                <p>Skabelon<span class="required"></span></p>
                            </div>
                            <div class="auto cell border-bottom">
                               <select id="selectTemplate">
                                    <option value="0">Ingen</option>
                                    <option value="0">Arkil 4 opgaver</option>
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
                                <p>Forsyningsart</p>
                            </div>
                            <div class="auto cell border-bottom">
                                <div class="button-filter-round water" @click="selectSupply('water')" :class="{'selected-supply-water': selectedSupply == 'water'}"></div><span>Vand</span>
                                <div class="button-filter-round sewer" @click="selectSupply('sewer')" :class="{'selected-supply-sewer': selectedSupply == 'sewer'}"></div><span>Kloak</span>
                            </div>
                        </div>
                    </div>

                    <div class="form">
                        <div class="grid-x">
                            <div class="large-1 medium-1 small-1 cell flexbox-center">
                                <img src="./../assets/svg/user.svg" alt="user svg" class="user-svg">
                            </div>
                            <div class="large-3 medium-3 small-3 cell border-bottom">
                                <p>Adresse</p>
                            </div>
                            <div class="auto cell border-bottom">
                                <input type="text">
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- ------------- Dokumenter ------------- -->
                <section v-show="state == 2">
                    <div>
                        <h2>Dokumenter</h2>
                        <p>
                            Upload billeder og dokumenter<br />
                            <em>F.eks. pdf, jpg, Word, Excel</em>
                        </p>
                        <input type="file" name="fileUpload" v-on:change="gotUpload">
                    </div>
                </section>
                
                <!-- ------------- Aktiviteter ------------- -->
                <section v-show="state == 3">
                    <div class="grid-x">
                        <div class="large-8 cell">
                            <h2>Aktiviteter</h2>
                        </div>
                        <div class="large-1 cell">
                            <button>Rekvirer</button>
                        </div>
                    </div>
                    <accordion-activities></accordion-activities>
                </section>

                <!-- ------------- Rekvisitioner ------------- -->
                <section v-show="state == 4">
                    <div class="grid-x">
                        <div class="large-8 cell">
                            <h2>Entreprenøropgaver</h2>
                        </div>
                        <div class="large-2 cell">
                            <button>Godkend alle</button>
                        </div>
                    </div>
                    <accordion-entrepreneur></accordion-entrepreneur>
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
import FileUploadHandler from './../mixins/shared/fileupload.js';
import accordionActivities from './../components/pages/task/task-accordion-activities';
import accordionEntrepreneur from './../components/pages/task/task-accordion-entrepreneur';

export default {
    name: 'task',
    components:{
        'accordion-activities': accordionActivities,
        'accordion-entrepreneur': accordionEntrepreneur
    },
    mixins: [FileUploadHandler],
    data() {
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
        changeState(state) {
            this.state = state;
        },
        selectSupply(supply) {
            this.selectedSupply = supply;
        },
        save() {
            console.log("save clicked");
        },
        exit() {
            console.log("exit clicked");
        }
    },
    created() {
        this.contacttypes = [
            {id: 1, name: 'Anden forsyning'},
            {id: 2, name: 'Andet'},
            {id: 3, name: 'Borger'},
            {id: 4, name: 'Brand'},
            {id: 5, name: 'Brand og redning'},
            {id: 6, name: 'Driftspersonale'},
        ],
        this.propertytypes = [
            {id: 1, name: 'Andet'},
            {id: 2, name: 'Beboelse'},
            {id: 3, name: 'Butik'},
            {id: 4, name: 'Butik - lednedsmiddel'},
            {id: 5, name: 'Byggeplads'}
        ],
        this.problemtypes = [
            {id: 1, name: 'Adgangsforhold (anlægsarbejde m.v.)'},
            {id: 2, name: 'Andet'},
            {id: 3, name: 'Defekt dæksel'},
            {id: 4, name: 'Fejlmelding/alarm'},
            {id: 5, name: 'Fluer'}
        ],
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
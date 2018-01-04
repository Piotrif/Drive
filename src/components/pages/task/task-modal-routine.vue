<template>
    <div>
        <h3 class="text-center">Ny rutine</h3>
        <p class="text-center">
            <span>{{data.task}} - </span>
            <span>{{data.user}}</span>
        </p>
        <div class="form">
            <div class="grid-x">
                <div class="large-3 medium-3 small-3 cell border-bottom custom-margin-top">
                    <icon class="user small-svg" name="user"></icon>
                    <span>Interval</span>
                </div>
                <div class="auto cell border-bottom select-item">
                    <div class="button-filter-round" @click="selectTimeStamp('fixed')" :class="{'selected-item': selectedTimeStamp == 'fixed'}">
                        <icon class="history small-svg" name="history"></icon>
                    </div><span>Fast tidpunkt</span>
                    <div class="button-filter-round" @click="selectTimeStamp('current')" :class="{'selected-item': selectedTimeStamp == 'current'}">
                        <icon class="history small-svg" name="history"></icon>
                    </div><span>Løbende interval</span>
                </div>
            </div>
        </div>
        <div class="form">
            <div class="grid-x">
                <div class="large-3 medium-3 small-3 cell border-bottom custom-margin-top">
                    <icon class="user small-svg" name="user"></icon>
                    <span>Gentag</span>
                </div>
                <div class="auto cell border-bottom">
                    <div class="grid-x time-group">
                        <div class="large-3 cell">
                            <div @click="changeTime('daily')" :class="{'selected-time': selectedTime == 'daily'}">Daglig</div>
                        </div>
                        <div class="large-3 cell">
                            <div @click="changeTime('weekly')" :class="{'selected-time': selectedTime == 'weekly'}">Ugelig</div>
                        </div>
                        <div class="large-3 cell">
                            <div @click="changeTime('monthly')" :class="{'selected-time': selectedTime == 'monthly'}">Månedlig</div>
                        </div>
                        <div class="large-3 cell">
                            <div @click="changeTime('yearly')" :class="{'selected-time': selectedTime == 'yearly'}">Årlig</div>
                        </div>
                    </div>
                    <div class="grid-x">
                        <div class="large-4 cell flexbox-centertext">
                            <p>Hver<span v-if="selectedTime == 'yearly'">t</span> <span v-if="number > 1">{{number}}.</span> {{selectedTime | danish}}</p>
                        </div>
                        <div class="large-8 cell">
                            <div class="buttons grid-x">
                                <div class="large-6 cell flexbox-center relative">
                                    <button @click="subtractNumber" type="button" class="absolute-full cursor">
                                        <icon class="small-svg" name="user"></icon>
                                    </button>
                                </div>
                                <div class="large-6 cell flexbox-center relative">
                                    <button @click="addNumber" type="button" class="absolute-full cursor">
                                        <icon class="small-svg" name="user"></icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form">
            <div class="grid-x">
                <div class="large-3 medium-3 small-3 cell border-bottom custom-margin-top">
                    <icon class="user small-svg" name="user"></icon>
                    <span>Periode</span>
                </div>
                <div class="auto cell border-bottom input-with-icon">
                    <input type="text" placeholder="Start dato">
                    <icon class="user small-svg" name="user"></icon>
                </div>
                <div class="large-1 cell text-center flexbox-center border-bottom">
                    <p class="seperator">-</p>
                </div>
                <div class="auto cell border-bottom input-with-icon">
                    <input type="text" placeholder="Slut dato">
                    <icon class="user small-svg" name="user"></icon>
                </div>
            </div>
        </div>

        <div class="text-center buttons-modal">
            <a @click="closeModal">Opret</a>
            <a @click="closeModal">Fortryd</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'task-modal-routine',
    data () {
        return {
            selectedTimeStamp: null,
            selectedTime: 'daily',
            number: 1
        }
    },
    props: [
        'data'
    ],
    methods: {
        selectTimeStamp (time) {
            this.selectedTimeStamp = time
        },
        closeModal () {
            this.$emit('close')
        },
        changeTime (selected) {
            this.selectedTime = selected
        },
        subtractNumber () {
            if (this.number !== 1) {
                this.number -= 1
            }
        },
        addNumber () {
            this.number += 1
        }
    },
    filters: {
        danish (text) {
            if (text === 'daily') {
                return 'dag'
            } if (text === 'weekly') {
                return 'uge'
            } if (text === 'monthly') {
                return 'måned'
            } if (text === 'yearly') {
                return 'år'
            }
        }
    }
}
</script>
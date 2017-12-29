<template>
    <div>
        <div class="grid-x accordion-counter">
            <div class="large-8 cell">
                <span>4 aktiviteter</span>
            </div>
            <div class="large-2 cell">
                <button>ikon</button>
                <button>opret rutine</button>
            </div>
        </div>
        <!-- ------------- Header ------------- -->
        <div class="grid-x align-items">
            <div style="width: 23px;" @click="toggleContent">
                pil
            </div>
            <div class="large-10 cell">
                <div class="grid-x accordion row align-items" @click="select()" :class="{selected: accordionSelected}">
                    <div class="large-3 cell item">
                        <span>Kolloparken 31</span>
                    </div>
                    <div class="large-4 cell item">
                        <span>John Hansen</span>
                        <span>Arkill</span>
                    </div>
                    <div class="large-2 cell item">
                        <span>24. jun - 28. dec</span>
                    </div>
                    <div class="large-2 cell item flexbox-center">
                        <div class="activity-status">Opgave oprettet</div>
                    </div>
                </div>
            </div>
            <div style="margin-left: 23px;">
                blyant
            </div>
        </div>
        <!-- ------------- Content ------------- -->
        <div class="grid-x">
            <div style="margin-left: 23px;" class="large-10 cell accordion content" v-if="contentVisible">
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
</template>

<script>

export default {
    data () {
        return {
            contentVisible: false,
            accordionSelected: false
        }
    },
    methods: {
        toggleContent () {
            this.contentVisible = !this.contentVisible

            if (this.contentVisible) {
                this.$emit('content-visible', this)
            }
        },
        select () {
            this.accordionSelected = !this.accordionSelected
        }
    }
}
</script>

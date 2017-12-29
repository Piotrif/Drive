<template>
    <div>
        <div class="grid-x accordion-counter">
            <div class="large-8 cell">
                <span>2 entreprenøropgaver</span>
            </div>
        </div>
        <!-- ------------- Header ------------- -->
        <div class="grid-x" style="margin-left: 23px;">
            <div style="width: 23px;">
                ikon
            </div>
            <div class="large-2 cell">
                John hansen | Arkil
            </div>
            <div class="large-1 cell">
                ikon
            </div>
        </div>
        <div class="grid-x align-items">
            <div style="width: 23px;" @click="toggleContent">
                <span>pil</span>
            </div>
            <div class="large-10 cell">
                <div class="grid-x accordion row align-items" @click="select()" :class="{selected: accordionSelected}">
                    <div class="large-1 cell item">
                        <span>Ikon</span>
                    </div>
                    <div class="large-3 cell item">
                        <span>Pumpestop</span>
                    </div>
                    <div class="large-3 cell item">
                        <span>2 aktiviteter</span>
                    </div>
                    <div class="large-3 cell item">
                        <span>2 dage tilbage</span>
                    </div>
                    <div class="large-2 cell item flexbox-center">
                        <div class="activity-status">Klar til godkendelse</div>
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
                    <div style="width: 23px;">
                            ikon
                    </div>
                    <div class="large-2 cell">
                        <span>Dokumenter</span>
                    </div>
                    <div class="large-auto cell">
                        bilag #1
                    </div>
                </div>
                <div>
                    <div class="grid-x">
                        <div class="large-1 cell">
                            <span>ikon</span>
                        </div>
                        <div class="large-5 cell">
                            <span>Knude BBA0140 T:Brønd Sy:Fælles</span>
                        </div>
                    </div>
                    <div class="grid-x">
                        <div class="large-1 cell">
                            <span>ikon</span>
                        </div>
                        <div class="large-4 cell">
                            <span>Indstilling/kalibrering</span>
                        </div>
                        <div class="large-2 cell">
                            <div class="grid-x">
                                <div style="width: 23px;">
                                    ikon
                                </div>
                                <div class="large-auto cell">
                                    <span>23RTG34v</span>
                                </div>
                            </div>
                        </div>
                        <div class="large-2 cell">
                            <div class="grid-x">
                                <div style="width: 23px;">
                                    ikon
                                </div>
                                <div class="large-auto cell">
                                    <span>1 dag tilbage</span>
                                </div>
                            </div>
                        </div>
                        <div class="large-2 cell">
                            <div class="grid-x">
                                <div style="width: 23px;">
                                    checkbox
                                </div>
                                <div class="large-auto cell">
                                    <span>Færdig i dag</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-x process-actions flexbox-center">
                    <div class="large-8 large-offset-2 cell flexbox-center">
                        <button>Godkend</button>
                        <button>Afvis</button>
                    </div>
                    <div class="large-2 cell">
                        <button>Tilbagekald</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return{
                contentVisible: false,
                accordionSelected: false
        }
    },
    methods: {
        toggleContent: function () {
            this.contentVisible = !this.contentVisible;

            if (this.contentVisible)
                this.$emit('content-visible', this);
        },
        select(){
            this.accordionSelected = !this.accordionSelected;
        }
    }
}
</script>

<template>
    <div>
        <div class="grid-x accordion-counter">
            <span>4 henvendelser</span>
        </div>
        <div class="grid-x align-items">
            <div style="width: 23px;" @click="toggleContent">
                pil
            </div>
            <div class="large-10 cell">
                <div class="grid-x accordion row flexbox-center" @click="select()" :class="{selected: contentVisible}">
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
        <div class="grid-x">
            <div style="margin-left: 23px;" class="large-10 cell accordion content" v-if="contentVisible">
                <div class="panel-body">
                    <p>Knude 1</p>
                    <p>Knude 2</p>
                    <p>Knude 3</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return{
                contentVisible: false
        }
    },
    methods: {
        toggleContent: function () {
            this.contentVisible = !this.contentVisible;
            if (this.contentVisible)
                this.$emit('content-visible', this);
        },
        select(){
            this.selected = this.contentVisible;
        }
    }
}
</script>

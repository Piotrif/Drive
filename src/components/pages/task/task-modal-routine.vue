<template>
    <div>
        <div class="form">
            <div class="grid-x">
                <div class="large-1 medium-1 small-1 cell flexbox-center">
                    <img src="./../assets/svg/user.svg" alt="user svg" class="user-svg">
                </div>
                <div class="large-3 medium-3 small-3 cell border-bottom">
                    <p>Aktivitet</p>
                </div>
                <div class="auto cell border-bottom">
                    <div class="button-filter-round water" @click="selectSupply('water')" :class="{'selected-supply-water': selectedSupply == 'water'}"></div><span>Fast tidpunkt</span>
                    <div class="button-filter-round sewer" @click="selectSupply('sewer')" :class="{'selected-supply-sewer': selectedSupply == 'sewer'}"></div><span>Løbende interval</span>
                </div>
            </div>
        </div>
        <div class="form">
            <div class="grid-x">
                <div class="large-1 medium-1 small-1 cell flexbox-center">
                    <img src="./../assets/svg/user.svg" alt="user svg" class="user-svg">
                </div>
                <div class="large-3 medium-3 small-3 cell border-bottom">
                    <p>Gentag</p>
                </div>
                <div class="auto cell border-bottom">
                    <div class="grid-x">
                        <div class="large-2 cell">
                            <button>Daglig</button>
                        </div>
                        <div class="large-2 cell">
                            <button>Ugelig</button>
                        </div>
                        <div class="large-2 cell">
                            <button>Månedlig</button>
                        </div>
                        <div class="large-2 cell">
                            <button>Årlig</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-x">
            <div class="large-1 medium-1 small-1 cell flexbox-center">
                <img src="./../assets/svg/user.svg" alt="user svg" class="user-svg">
            </div>
            <div class="large-3 medium-3 small-3 cell border-bottom">
                <p>Periode</p>
            </div>
            <div class="auto cell border-bottom">
                <input type="text">
            </div>
            <div class="auto cell border-bottom">
                <input type="text">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

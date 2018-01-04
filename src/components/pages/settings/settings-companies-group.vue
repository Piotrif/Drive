<template>
    <div class="settings-companies-group">
        <div class="grid-x align-items companies-actions">
            <div class="large-4 cell flexbox-start filter-search">
                <icon class="search-svg small-svg fill-medium-gray" name="search"></icon>
                <input type="text" class="large-2 search-bottom-border" placeholder="Søg efter firma">
            </div>
            <div class="large-auto cell">
                <button class="float-right">Tilføj</button>
            </div>
        </div>
        <div class="grid-x">
            <div class="large-auto cell">
                <div class="grid-x companies-group">
                    <div class="large-2 item" @click="selectedCompany = !selectedCompany" :class="{'selected': selectedCompany}">
                        <span>Arkil</span>
                        <icon class="user-svg small-svg fill-dark-gray float-right" name="user"></icon>
                    </div>
                    <div class="large-2 item">
                        <span>Arkil</span>
                        <icon class="user-svg small-svg fill-dark-gray float-right" name="user"></icon>
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
            selectedCompany: false
        }
    }
}
</script>

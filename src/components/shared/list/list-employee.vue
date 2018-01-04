<template>
    <div>
        <div class="grid-x align-items employee-actions">
            <div class="large-4 cell flexbox-start filter-search">
                <icon class="search-svg small-svg fill-medium-gray" name="search"></icon>
                <input type="text" class="large-2 search-bottom-border" placeholder="Søg efter medarbejder">
            </div>
            <div class="large-auto cell button-with-icon">
                <button class="float-right" @click="openModal('create-new-user')">
                    <icon class="user small-svg" name="user"></icon>
                    <span>Tilføj</span>
                </button>
            </div>
        </div>
        <div class="grid-x">
            <div class="large-auto cell">
                <div class="grid-x list-row align-items">
                    <div class="large-1 cell">icon</div>
                    <div class="large-3 cell item">
                        <span>Søren Hansen</span>
                    </div>
                    <div class="large-4 cell item">
                        <span>soerenhansen@aalborg.dk</span>
                    </div>
                    <div class="large-1 cell item">
                        <div>
                            <icon class="enquiry small-svg" name="enquiry"></icon>
                            1
                        </div>
                    </div>
                    <div class="large-1 cell item">
                        <div>
                            <icon class="task-check small-svg" name="task-check"></icon>
                             1
                        </div>
                    </div>
                    <div class="large-2 cell item flexbox-center">
                        <div class="enquiry-status">Administrator</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    methods: {
        openModal (view) {
            this.$emit('open', view)
        }
    }
}
</script>

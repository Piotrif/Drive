<template>
    <div>
        <div class="form">
            <div class="grid-x">
                <div class="large-1 medium-1 small-1 cell flexbox-center">
                    <icon class="user small-svg" name="user"></icon>
                </div>
                <div class="large-3 medium-3 small-3 cell border-bottom">
                    <p>Aktivitet</p>
                </div>
                <div class="auto cell border-bottom">
                    <input type="text">
                </div>
            </div>
        </div>
        <div class="form">
            <div class="grid-x">
                <div class="large-1 medium-1 small-1 cell flexbox-center">
                    <icon class="user small-svg" name="user"></icon>
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
        <div class="form">
            <div class="grid-x">
                <div class="large-1 medium-1 small-1 cell flexbox-center">
                    <icon class="user small-svg" name="user"></icon>
                </div>
                <div class="large-3 medium-3 small-3 cell border-bottom">
                    <p>Entreprenør</p>
                </div>
                <div class="auto cell border-bottom">
                    <select>
                        <option value="0">Ingen</option>
                        <option value="0">Hans Jensen</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="form">
            <div class="grid-x">
                <div class="large-1 medium-1 small-1 cell flexbox-center">
                    <icon class="user small-svg" name="user"></icon>
                </div>
                <div class="large-3 medium-3 small-3 cell border-bottom">
                    <p>Reference</p>
                </div>
                <div class="auto cell border-bottom">
                    <select>
                        <input type="text">
                    </select>
                </div>
            </div>
        </div>
        <div class="form">
            <div class="grid-x">
                <div class="large-1 medium-1 small-1 cell flexbox-center">
                    <icon class="user small-svg" name="user"></icon>
                </div>
                <div class="large-3 medium-3 small-3 cell border-bottom">
                    <p>Bemærkning</p>
                </div>
                <div class="auto cell border-bottom">
                    <select>
                        <textarea type="text" rows="4" cols="30"></textarea>
                    </select>
                </div>
            </div>
        </div>

        <div class="float-right">
            <a @click="closeModal">Annuller</a>
            <a>Gem</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'task-modal-activity',
    methods: {
        closeModal () {
            this.$emit('close')
        }
    }
}
</script>

<style>

</style>

<template>
    <nav>
        <ul>
            <li class="large-2 cell flexbox-center" :class="{'active': selectedView == 1}" @click="changeSettingView('settings-my-profile', 1)">
                <a>
                    <div class="image-container">
                        <icon class="user small-svg" name="user"></icon>
                    </div>
                    <span>{{user}}</span>
                </a>
            </li>
            <li class="large-2 cell flexbox-center" :class="{'active': selectedView == 2}" @click="changeSettingView('settings-my-organisation', 2)">
                <a>
                    <div class="image-container">
                        <icon class="group small-svg" name="group"></icon>
                    </div>
                    <span>{{workStation}}</span>
                </a>
            </li>
            <li class="large-2 cell flexbox-center" :class="{'active': selectedView == 3}" @click="changeSettingView('settings-my-companies', 3)">
                <a>
                    <div class="image-container">
                        <icon class="building small-svg" name="building"></icon>
                    </div>
                    <span>Firmaer</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data () {
            return {
                user: 'Søren Hansen',
                workStation: 'Aalborg Forsyning',
                selectedView: 1
            }
        },
        methods: {
            changeSettingView (selectedSettingView, view) {
                this.$emit('changeSettingView', selectedSettingView)
                this.selectedView = view
            }
        }
    }
</script>
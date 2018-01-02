<template>
    <nav>
        <ul>
            <li class="large-2 cell flexbox-center">
                <a @click="changeSettingView('settings-my-profile')">Profil</a>
            </li>
            <li class="large-2 cell flexbox-center">
                <a @click="changeSettingView('settings-my-organisation')">Organisation</a>
            </li>
            <li class="large-2 cell flexbox-center">
                <a @click="changeSettingView('settings-my-companies')">Firmaer</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        methods: {
            changeSettingView (selectedSettingView) {
                this.$emit('changeSettingView', selectedSettingView)
            }
        }
    }
</script>
<template>
    <div class="settings">
        <modal v-if="showModal" :modalType="modalType" @close="closeModal"></modal>
        <div class="form-view">
            <header class="header-subpage flexbox-center">
                <div class="content-left">
                    <div class="grid-x align-items">
                        <div class="large-1 medium-2 small-12 cell flexbox-center" @click="gotoFrontPage">
                            <icon class="arrow-left-circle-svg small-svg fill-white stroke-white cursor" name="arrow-left-circle"></icon>
                        </div>
                        <div class="large-4 cell">
                            <h1>Søren Hansen, administrator</h1>
                        </div>
                        <div class="large-2 cell">
                            <a class="button button-big">Gem</a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div class="grid-x">
                    <div class="large-1 cell side-left-menu">
                        <left-nav @changeSettingView="changedSettingView"></left-nav>
                    </div>
                    <div class="large-auto large-offset-1 cell">
                        <component :is="selectedSettingView" @open="openModal"></component>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import leftNav from './../components/pages/settings/settings-left-nav.vue'
    import profile from './../components/pages/settings/settings-profile.vue'
    import organisation from './../components/pages/settings/settings-organisation.vue'
    import companies from './../components/pages/settings/settings-companies.vue'
    import modal from './../components/shared/modal/modal.vue'

    export default {
        name: 'settings',
        data () {
            return {
                selectedSettingView: 'settings-my-profile',
                showModal: false,
                modalType: null
            }
        },
        components: {
            'left-nav': leftNav,
            'settings-my-profile': profile,
            'settings-my-organisation': organisation,
            'settings-my-companies': companies,
            'modal': modal
        },
        methods: {
            changedSettingView (result) {
                this.selectedSettingView = result
            },
            gotoFrontPage () {
                console.log('frontpage')
                this.$router.push({
                    name: 'dashboard'
                })
            },
            closeModal () {
                this.showModal = false
            },
            openModal (view) {
                console.log('view', view)
                this.showModal = true
            }
        }
    }
</script>
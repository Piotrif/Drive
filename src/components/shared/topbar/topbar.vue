<template>
    <nav class="topbar">
        <div class="grid-x">
            <div class="large-6 medium-6 small-6 cell">
                <div class="text-left">
                    <h5><b>NIRAS</b><span class="font-lighter">UTILITY/DRIVE</span></h5>
                </div>
            </div>
            <div class="large-6 medium-6 small-6 cell">
                <div class="float-right" data-toggle="user-dropdown">
                    <div class="image">
                        <icon class="user-svg" name="user"></icon>
                    </div>
                    <div class="user-info">
                        <span class="user">
                            {{user}}
                        </span>
                        <span class="work-station">
                            {{workStation}}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="dropdown-pane" id="user-dropdown" data-dropdown data-auto-focus="true" data-alignment="bottom" data-position="bottom">
            <ul>
                <li>
                    <router-link :to="{name: 'settings'}" data-toggle="user-dropdown">
                        <div class="image-container">
                            <icon class="user small-svg" name="user"></icon>
                        </div>
                        {{user}}
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'settings'}" data-toggle="user-dropdown">
                        <div class="image-container">
                            <icon class="group small-svg" name="group"></icon>
                        </div>
                        {{workStation}}
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'settings'}" data-toggle="user-dropdown">
                        <div class="image-container">
                            <icon class="building small-svg" name="building"></icon>
                        </div>
                        Firmaer
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'login'}" data-toggle="user-dropdown">
                        <div class="image-container">
                            <icon class="log-out small-svg" name="log-out"></icon>
                        </div>
                        Log ud
                    </router-link>
                </li>
            </ul>
        </div>

    </nav>
</template>

<script>
export default {
    name: 'topbar',
    data () {
        return {
            user: 'Søren Hansen',
            workStation: 'Aalborg Forsyning'
        }
    },
    mounted () {
        window.$(document).foundation()
    }
}
</script>
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
                        <img src="./../../../assets/svg/user.svg" alt="user svg" class="user-svg">
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
                    <a>
                        <div class="image-container">
                            <img src="./../../../assets/svg/user.svg" alt="user svg" class="small-svg">
                        </div>
                        {{user}}
                    </a>
                </li>
                <li>
                    <a>
                        <div class="image-container">
                            <img src="./../../../assets/svg/group.svg" alt="group svg" class="small-svg">
                        </div>
                        {{workStation}}
                    </a>
                </li>
                <li>
                    <a>
                        <div class="image-container">
                            <img src="./../../../assets/svg/building.svg" alt="building svg" class="small-svg">
                        </div>
                        Firmaer
                    </a>
                </li>
                <li>
                    <a>
                        <div class="image-container">
                            <img src="./../../../assets/svg/log-out.svg" alt="log out svg" class="small-svg">
                        </div>
                        Log ud
                    </a>
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
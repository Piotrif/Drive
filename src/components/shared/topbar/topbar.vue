<template>
    <nav class="topbar">
        <div class="grid-x">
            <div class="large-6 medium-6 small-6 cell">
                <div class="text-left">
                    <h5><b>NIRAS</b><span class="font-lighter">UTILITY/DRIVE</span></h5>
                </div>
            </div>
            <div class="large-6 medium-6 small-6 cell">
                <div class="text-right">
                    <p class="user">
                        {{user}}
                    </p>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'topbar',
    data () {
        return {
            user: 'Søren Hansen'
        }
    }
}
</script>
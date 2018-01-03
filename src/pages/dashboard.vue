<template>
    <div class="dashboard">
        <div class="dashboard-hero-img blur"></div>
        <dashboard-header @changeWorkView="changedView"></dashboard-header>
        <dashboard-filtering></dashboard-filtering>
        <main>
            <div class="grid-x dashboard-content">
                <div class="large-2 cell">
                    <new-work></new-work>
                </div>
                <div class="large-9 cell dashboard-list">
                    <component :is="selectedView"></component>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import header from './../components/pages/dashboard/dashboard-header.vue'
    import filtering from './../components/pages/dashboard/dashboard-filtering.vue'
    import newWork from './../components/pages/dashboard/dashboard-new-work.vue'
    import enquiries from './../components/pages/dashboard/enquiries/dashboard-enquiries-list.vue'
    import tasks from './../components/pages/dashboard/tasks/dashboard-tasks-list.vue'
    import routines from './../components/pages/dashboard/routines/dashboard-routines-list.vue'

    export default {
        name: 'dashboard',
        data () {
            return {
                selectedView: 'dashboard-enquiries-list'
            }
        },
        components: {
            'dashboard-header': header,
            'dashboard-filtering': filtering,
            'new-work': newWork,
            'dashboard-enquiries-list': enquiries,
            'dashboard-tasks-list': tasks,
            'dashboard-routines-list': routines
        },
        methods: {
            changedView (result) {
                this.selectedView = result
            }
        },
        mounted () {
            window.$(document).foundation()
        }
    }
</script>
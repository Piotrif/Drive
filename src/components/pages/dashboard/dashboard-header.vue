<template>
    <div class="dashboard-header">
        <div class="grid-x">
            <div class="large-3 cell">
                    <h1>Mit overblik</h1>
                </div>
                <div class="large-6 cell">
                   <kpi-notification :kpiData="test"></kpi-notification>
                </div>
                <div class="large-3 cell">
                    <img src="" alt="">
                </div>
        </div>
        <div class="grid-x dashboard-tabs">
            <div class="large-6 cell">
                <button @click="changeWorkView('dashboard-enquiries-list')">Henvendelser</button>
                <button @click="changeWorkView('dashboard-tasks-list')">Opgaver</button>
                <button @click="changeWorkView('dashboard-routines-list')">Rutiner</button>
            </div>
            <div class="large-5 cell">
                <input type="text" class="large-2 float-right" id="" placeholder="Søg på adresse...">
            </div>
        </div>
    </div>
</template>

<script>
    import kpiNotification from './../../shared/kpi/kpi.vue'

    export default {
        components: {
            'kpi-notification': kpiNotification
        },
        data () {
            return {
                selectedtab: 1,
                test: {}
            }
        },
        methods: {
            changeWorkView (selectedView) {
                this.$emit('changeWorkView', selectedView)
            }
        }
    }
</script>
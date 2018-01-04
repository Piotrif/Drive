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
            <div class="large-5 large-offset-1 cell">
                <a :class="{'active': selectedTab === 1}" @click="changeWorkView('dashboard-enquiries-list', 1)">
                    <icon class="enquiry-svg small-svg fill-white" name="enquiry"></icon>
                    <span>Henvendelser</span>
                </a>
                <a :class="{'active': selectedTab === 2}" @click="changeWorkView('dashboard-tasks-list', 2)">
                    <icon class="task-svg small-svg fill-white" name="task"></icon>
                    <span>Opgaver</span>
                </a>
                <a :class="{'active': selectedTab === 3}" @click="changeWorkView('dashboard-routines-list', 3)">
                    <icon class="routine-svg small-svg fill-white" name="routine"></icon>    
                    <span>Rutiner</span>
                </a>
            </div>
            <div class="large-5 cell">
                <input type="text" class="large-2 float-right" placeholder="Søg på adresse...">
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
                selectedTab: 1,
                test: {}
            }
        },
        methods: {
            changeWorkView (selectedView, selected) {
                this.selectedTab = selected
                this.$emit('changeWorkView', selectedView)
            }
        }
    }
</script>
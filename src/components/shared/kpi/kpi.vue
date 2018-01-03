<template>
    <div class="grid-x kpi-notification">
        <div class="large-4 cell flexbox-center flex-column">
            <div class="flexbox-center flex-column">
                <div class="circle flexbox-center">{{ newEnquiriesCounter }}</div>
                <p>{{ newEnquiriesLabel }}</p>
            </div>
        </div>
        <div class="large-4 cell flexbox-center flex-column">
            <div class="flexbox-center flex-column">
                <div class="circle flexbox-center">{{ newTasksCounter }}</div>
                <p>{{ newTasksLabel }}</p>
            </div>
            <!-- <div class="alert-counter">{{ tasksExceededCounter }} {{ tasksExceededLabel }}</div> -->
        </div>
        <div class="large-4 cell flexbox-center flex-column">
            <div class="flexbox-center flex-column">
                <div class="circle flexbox-center">{{ tasksApproveReadyCounter }}</div>
                <p>{{ tasksApproveReadyLabel }}</p>
            </div>
            <!-- <div class="alert-counter">{{ tasksDeniedCounter }} {{ tasksDeniedLabel }}</div> -->
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                newEnquiriesLabel: 'Nye henvendelser',
                newEnquiriesCounter: '5',
                newTasksLabel: 'Nye opgaver',
                newTasksCounter: '5',
                tasksExceededLabel: 'opgaver overskredet',
                tasksExceededCounter: '2',
                tasksApproveReadyLabel: 'klar til godkendelse',
                tasksApproveReadyCounter: '2',
                tasksDeniedLabel: 'opgaver afvist',
                tasksDeniedCounter: '2'
            }
        }
    }
</script>

<style>

</style>

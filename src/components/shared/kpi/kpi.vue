<template>
    <div class="grid-x kpi">
        <div class="large-4 cell flexbox-center flex-column">
            <div class="flexbox-center flex-column">
                <div class="circle-big flexbox-center">
                    <div class="kpi-notification flexbox-center circle-small">
                        <icon class="enquiry-svg small-svg fill-white" name="enquiry"></icon>
                    </div>
                    <span>{{ newEnquiriesCounter }}</span>
                </div>
                <p>{{ newEnquiriesLabel }}</p>
            </div>
        </div>
        <div class="large-4 cell flexbox-center flex-column">
            <div class="flexbox-center flex-column">
                <div class="circle-big flexbox-center">
                    <div class="kpi-notification flexbox-center circle-small">
                        <icon class="task-svg small-svg fill-white" name="task"></icon>
                    </div>
                    <span>{{ newTasksCounter }}</span>
                </div>
                <p>{{ newTasksLabel }}</p>
            </div>
            <!-- <div class="alert-counter">{{ tasksExceededCounter }} {{ tasksExceededLabel }}</div> -->
        </div>
        <div class="large-4 cell flexbox-center flex-column">
            <div class="flexbox-center flex-column">
                <div class="circle-big flexbox-center">
                    <div class="kpi-notification flexbox-center circle-small">
                        <icon class="routine-svg small-svg fill-white" name="routine"></icon>
                    </div>
                    <span>{{ tasksApproveReadyCounter }}</span>
                </div>
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

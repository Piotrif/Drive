<template>
    <div class="header-dashboard">
        <div class="grid-x">
            <div class="large-3 cell">
                    <h1>Mit overblik</h1>
                </div>
                <div class="large-6 cell">
                    <div class="grid-x">
                        <div class="large-4 cell notification-wrap">
                            <div class="notification">
                                <div class="circle">{{ newEnquiriesCounter }}</div>
                                <p>{{ newEnquiriesLabel }}</p>
                            </div>
                        </div>
                        <div class="large-4 cell notification-wrap">
                            <div class="notification">
                                <div class="circle">{{ newTasksCounter }}</div>
                                <p>{{ newTasksLabel }}</p>
                            </div>
                            <!-- <div class="alert-counter">{{ tasksExceededCounter }} {{ tasksExceededLabel }}</div> -->
                        </div>
                        <div class="large-4 cell notification-wrap">
                            <div class="notification">
                                <div class="circle">{{ tasksApproveReadyCounter }}</div>
                                <p>{{ tasksApproveReadyLabel }}</p>
                            </div>
                            <!-- <div class="alert-counter">{{ tasksDeniedCounter }} {{ tasksDeniedLabel }}</div> -->
                        </div>
                    </div>
                </div>
                <div class="large-3 cell">
                    <img src="" alt="">
                </div>
        </div>
        <div class="grid-x">
            <div class="large-6 cell">
                <!-- <button @click="showTasks"></button>
                <button @click="showEnquiry"></button>
                <button @click="showRoutines"></button> -->
            </div>
            <div class="large-6 cell">
                <input type="text">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            newEnquiriesLabel: 'Nye henvendelser',
            newEnquiriesCounter: '5',
            newTasksLabel: 'Nye opgaver',
            newTasksCounter: '5',
            tasksExceededLabel: 'opgaver overskredet',
            tasksExceededCounter: '2',
            tasksApproveReadyLabel: 'klar til godkendelse',
            tasksApproveReadyCounter: '2',
            tasksDeniedLabel: 'opgaver afvist',
            tasksDeniedCounter: '2',
        }
    }
}
</script>
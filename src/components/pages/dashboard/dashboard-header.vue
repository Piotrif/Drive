<template>
    <div class="dashboard-header">
        <div class="grid-x">
            <div class="large-3 cell">
                    <h1>Mit overblik</h1>
                </div>
                <div class="large-6 cell">
                    <div class="grid-x">
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
                </div>
                <div class="large-3 cell">
                    <img src="" alt="">
                </div>
        </div>
        <div class="grid-x dashboard-tabs">
            <div class="large-6 cell">
                <button @click="changeTab('dashboard-enquiries-list')">Henvendelser</button>
                <button @click="changeTab('dashboard-tasks-list')">Opgaver</button>
                <button @click="changeTab('dashboard-routines-list')">Rutiner</button>
            </div>
            <div class="large-5 cell">
                <input type="text" class="large-2 float-right" id="" placeholder="Søg på adresse...">
            </div>
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
                tasksDeniedCounter: '2',
                selectedtab: 1
            }
        },
        methods: {
            changeTab (selectedtab) {
                this.$emit('changeTab', selectedtab)
            }
        }
    }
</script>
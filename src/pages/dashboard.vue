<template>
    <div>
        <dashboard-header></dashboard-header>
        <!-- <tasks v-if="showTasks" :data="data"></tasks>
        <enquiry v-if="showEnquiry" :data="data"></enquiry>
        <routines v-if="showRoutines" :data="data"></routines> -->
    </div>
</template>

<script>
    import header from './../components/pages/dashboard/header.vue';

    export default {
        components: {
            'dashboard-header': header
        }    
    }
</script>
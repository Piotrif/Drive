<template>
<div class="dashboard">
    <div class="dashboard-hero-img blur"></div>
    <dashboard-header></dashboard-header>
    <dashboard-filtering></dashboard-filtering>
    <div class="grid-x dashboard-content">
        <div class="large-2 cell">
            <new-work></new-work>
        </div>
        <div class="large-9 cell dashboard-list">
            <list></list>
        </div>
    </div>
        <!-- <tasks v-if="showTasks" :data="data"></tasks>
        <enquiry v-if="showEnquiry" :data="data"></enquiry>
        <routines v-if="showRoutines" :data="data"></routines> -->
</div>
    
</template>

<script>
    import header from './../components/pages/dashboard/header.vue';
    import filtering from './../components/pages/dashboard/filtering.vue';
    import newWork from './../components/pages/dashboard/new-work.vue';
    import list from './../components/shared/list.vue';

    export default {
        name: 'dashboard',
        components: {
            'dashboard-header': header,
            'dashboard-filtering': filtering,
            'new-work': newWork,
            'list': list
        }    
    }
</script>
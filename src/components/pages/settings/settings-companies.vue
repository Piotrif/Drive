<template>
  <div class="settings-companies">
      <!-- Companies-->
      <div class="grid-x">
        <div class="large-10 cell">
         <group-companies></group-companies>
        </div>
      </div>

      <!-- Company info-->
      <div class="grid-x">
          <div class="large-10 cell compani-info">
              <div class="grid-x">
                  <div class="large-auto cell">
                    <span>Arkill</span>
                </div>
                <div class="large-3 cell flexbox-center">
                    <icon class="location-svg small-svg fill-dark-gray" name="location"></icon>
                    <span>Sønderbro 45</span>
                </div>
                <div class="large-3 cell flexbox-center">
                    <icon class="envelope-svg small-svg fill-dark-gray" name="envelope"></icon>
                    <span>arkil@arkil.dk</span>
                </div>
                <div class="large-3 cell flexbox-center">
                    <icon class="phone-svg small-svg fill-dark-gray" name="phone"></icon>
                    <span>56895623</span>
                </div>
                <div class="large-auto cell">
                    <icon class="pencil-svg small-svg fill-dark-gray float-right" name="pencil"></icon>
                </div>
              </div>
          </div>
        </div>

      <!-- Employee-->
      <div class="grid-x">
        <div class="large-10 cell">
          <notification-kpi></notification-kpi>
          <list-employee @open="openModal(view)"></list-employee>
        </div>
      </div>
  </div>
</template>

<script>
    import notificationKpi from './../../shared/kpi/kpi.vue'
    import employeeList from './../../shared/list/list-employee.vue'
    import companiesGroup from './settings-companies-group.vue'

    export default {
        components: {
            'notification-kpi': notificationKpi,
            'list-employee': employeeList,
            'group-companies': companiesGroup
        },
        data () {
            return {}
        },
        methods: {
            openModal (view) {
                console.log('open modal settings companies')
                this.$emit('open', view)
            }
        }
    }
</script>
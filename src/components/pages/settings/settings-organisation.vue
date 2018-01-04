<template>
  <div class="settings-organisation">
      <div class="grid-x">
        <nav class="settings-top-nav">
          <ul>
              <li>
                  <a @click="changeTab(1)" :class="{'active': selectedTab == 1}">
                      Oplysninger
                  </a>
              </li>
              <li>
                  <a @click="changeTab(2)" :class="{'active': selectedTab == 2}">
                      Medarbejder
                  </a>
              </li>
              <li>
                  <a @click="changeTab(3)" :class="{'active': selectedTab == 3}">
                      Informationslister
                  </a>
              </li>
              <li>
                  <a @click="changeTab(4)" :class="{'active': selectedTab == 4}">
                      Kortopsætning
                  </a>
              </li>
          </ul>
        </nav>
      </div>
      <div class="grid-x">
        <div class="large-10 cell">

          <!-- Generel informations -->
          <section v-show="tab === 1">
            <div class="form">
              <div class="grid-x">
                  <div class="large-1 medium-1 small-1 cell flexbox-center">
                      <icon class="user small-svg" name="user"></icon>
                  </div>
                  <div class="large-3 medium-3 small-3 cell border-bottom">
                      <p>Forsyningsart</p>
                  </div>
                  <div class="auto cell border-bottom">
                      <div class="auto cell border-bottom select-supply">
                        <div class="button-filter-round water" @click="selectSupply('water')" :class="{'selected-supply-water': selectedSupply == 'water'}">
                            <icon class="water small-svg" name="user"></icon>
                        </div><span>Vand</span>
                        <div class="button-filter-round sewer" @click="selectSupply('sewer')" :class="{'selected-supply-sewer': selectedSupply == 'sewer'}">
                            <icon class="sewer small-svg" name="cancel"></icon>
                        </div><span>Kloak</span>
                    </div>
                  </div>
              </div>
            </div>

            <div class="form">
                <div class="grid-x">
                    <div class="large-1 medium-1 small-1 cell flexbox-center">
                        <icon class="user small-svg" name="user"></icon>
                    </div>
                    <div class="large-3 medium-3 small-3 cell border-bottom">
                        <p>Navn</p>
                    </div>
                    <div class="auto cell border-bottom">
                        <input type="text">
                    </div>
                </div>
            </div>

            <div class="form">
                <div class="grid-x">
                    <div class="large-1 medium-1 small-1 cell flexbox-center">
                        <icon class="user small-svg" name="user"></icon>
                    </div>
                    <div class="large-3 medium-3 small-3 cell border-bottom">
                        <p>CVR-nr.</p>
                    </div>
                    <div class="auto cell border-bottom">
                        <input type="text">
                    </div>
                </div>
            </div>
            <div class="form">
                <div class="grid-x">
                    <div class="large-1 medium-1 small-1 cell flexbox-center">
                        <icon class="user small-svg" name="user"></icon>
                    </div>
                    <div class="large-3 medium-3 small-3 cell border-bottom">
                        <p>Adresse</p>
                    </div>
                    <div class="auto cell border-bottom">
                        <input type="text">
                    </div>
                </div>
            </div>
            <div class="form">
                <div class="grid-x">
                    <div class="large-1 medium-1 small-1 cell flexbox-center">
                        <icon class="user small-svg" name="user"></icon>
                    </div>
                    <div class="large-3 medium-3 small-3 cell border-bottom">
                        <p>Telefon</p>
                    </div>
                    <div class="auto cell border-bottom">
                        <input type="number">
                    </div>
                </div>
            </div>
            <div class="form">
                <div class="grid-x">
                    <div class="large-1 medium-1 small-1 cell flexbox-center">
                        <icon class="user small-svg" name="user"></icon>
                    </div>
                    <div class="large-3 medium-3 small-3 cell">
                        <p>E-mail</p>
                    </div>
                    <div class="auto cell">
                        <input type="text">
                    </div>
                </div>
            </div>
          </section>

          <!-- Employee-->
          <section v-show="tab === 2">
              <notification-kpi></notification-kpi>
              <list-employee @open="openModal"></list-employee>
          </section>

          <!-- Information lists -->
          <section v-show="tab === 3">

          </section>

          <!-- Map settings -->
          <section v-show="tab === 4">

          </section>

        </div>
      </div>
  </div>
</template>

<script>
    import notificationKpi from './../../shared/kpi/kpi.vue'
    import employeeList from './../../shared/list/list-employee.vue'

    export default {
        components: {
            'notification-kpi': notificationKpi,
            'list-employee': employeeList
        },
        data () {
            return {
                tab: 1,
                selectedTab: 1,
                selectedSupply: 'water'
            }
        },
        methods: {
            changeTab (selectedTab) {
                this.selectedTab = selectedTab
                this.tab = selectedTab
            },
            selectSupply (supply) {
                this.selectedSupply = supply
            },
            openModal (view) {
                this.$emit('open', view)
            }
        }
    }
</script>
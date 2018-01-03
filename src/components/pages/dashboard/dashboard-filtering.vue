<template>
    <div class="dashboard-filter">
        <div class="grid-x align-items">
            <div @click="waterActive = !waterActive" class="large-1 large-offset-2 cell filter-supply">
                <div :class="{'active': waterActive}" class="flexbox-center water">
                  <icon class="supply-water-svg small-svg fill-white" name="supply-water"></icon>
                </div>
                <span>Vand</span>
            </div>
              <div @click="sewerActive = !sewerActive" class="large-1 cell filter-supply">
                <div :class="{'active': sewerActive}" class="flexbox-center sewer">
                    <icon class="supply-sewer-svg small-svg fill-white" name="supply-sewer"></icon>
                </div>
                <span>Kloak</span>
              </div>
        <div class="large-4 cell filter-responsible-worker">
            <ul class="dropdown menu" data-dropdown-menu>
                <li>
                    <a href="#">Sagsbehandler</a>
                    <ul class="menu">
                        <li><a href="#">Jens</a></li>
                    </ul>
                </li>
            </ul>
          </div>
            <div class="large-1 cell filter-additional">
                <button>Tilføj filter</button>
            </div>
            <div class="large-1 cell filter-export">
                <button>Eksporter</button>
            </div>
      </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                waterActive: true,
                sewerActive: true
            }
        }
    }
</script>
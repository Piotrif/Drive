<template>
  <div class="dashboard-filter">
      <div class="grid-x align-items">
          <div class="large-1 large-offset-2 cell filter-supply">
                  <button></button>
                  <span>Vand</span>
              </div>
              <div class="large-1 cell filter-supply">
                  <button></button>
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
            }
        }
    }
</script>
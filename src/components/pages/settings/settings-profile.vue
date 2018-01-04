<template>
    <div class="settings-profile">
      <div class="grid-x">
            <div class="large-5">
                <div class="grid-x flexbox-center">
                    <div class="change-profile-pic flexbox-center">
                        <icon class="user medium-svg" name="user"></icon>
                    </div>
                </div>
                <section>
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
                                <p style="padding-top: 16px;">Kodeord</p>
                            </div>
                            <div class="auto cell">
                                <button @click="showPasswordForm = !showPasswordForm" class="button">Skift kodeord</button>
                            </div>
                        </div>
                    </div>

                    <!-- Password change -->
                    <div id="changeUserPasswd" v-show="showPasswordForm">
                        <div class="form">
                            <div class="grid-x">
                                <div class="large-1 medium-1 small-1 cell flexbox-center">
                                    <icon class="user small-svg" name="user"></icon>
                                </div>
                                <div class="large-3 medium-3 small-3 cell">
                                    <p>Nuværende</p>
                                </div>
                                <div class="auto cell">
                                    <input type="text">
                                </div>
                            </div>
                        </div>

                        <div class="form">
                            <div class="grid-x">
                                <div class="large-1 medium-1 small-1 cell flexbox-center">
                                    <icon class="user small-svg" name="user"></icon>
                                </div>
                                <div class="large-3 medium-3 small-3 cell">
                                    <p>Nyt kodeord</p>
                                </div>
                                <div class="auto cell">
                                    <input type="text">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                showPasswordForm: false
            }
        }
    }
</script>
<template>
    <div class="login flexbox-center flex-row">
        <div class="flex-div login-left">
            <h1>Velkommen</h1>
            <form class="login-container" v-on:submit.prevent="onSubmit">
                <div class="input-svg">
                    <icon class="user small-svg" name="user"></icon>
                    <input type="email" class="username" placeholder="Email" v-model="user.username">
                </div>
                <div class="input-svg">
                    <icon class="locked small-svg" name="locked"></icon>
                    <input type="password" class="password" placeholder="Adgangskode" v-model="user.password">
                </div>
                <button type="submit" class="button">Log ind</button>
            </form>

            <div class="bottom">
                <div class="flexbox-center flex-row">
                    <div>
                        <icon class="logo niraslogo" name="niraslogo"></icon>
                    </div>
                    <div>
                        <p>DRIVE - en del af <b>NIRAS</b>UTILITY</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex-div login-right">
            <div class="background-image blur"></div>
            <div class="overlay flexbox-center">
                <div class="flex-div">
                    <h1 class="logo">DRIVE</h1>
                    <p>Få styr på daglig drift og vedligehold</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cross from './../assets/svg/cross.svg'

export default {
    name: 'login',
    data () {
        return {
            icon: cross,
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit () {
            console.log('user', this.user)
            this.$router.push({
                name: 'dashboard'
            })
        }
    },
    mounted () {
        console.log('document', document.body)
    }
}
</script>
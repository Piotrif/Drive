<template>
    <div class="login flexbox-center flex-row">
        <div class="flex-div login-left">
            <h1>Velkommen</h1>
            <form class="login-container" v-on:submit.prevent="onSubmit">
                <div class="input-svg">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                        <title></title>
                        <g id="icomoon-ignore">
                        </g>
                        <path d="M810.751 298.638c0 164.933-133.705 298.638-298.638 298.638s-298.638-133.705-298.638-298.638c0-164.933 133.705-298.638 298.638-298.638v0c164.933 0 298.638 133.705 298.638 298.638v0zM742.982 604.957c-63.27 48.5-143.544 77.719-230.643 77.719s-167.373-29.219-231.555-78.39l0.912 0.671c-174.168 76.58-281.696 314.677-281.696 419.043h1024c0-103.236-110.916-341.559-281.47-418.817z"></path>
                    </svg>
                    <input type="email" class="username" placeholder="Email" v-model="user.username">
                </div>
                <div class="input-svg">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                        <title></title>
                        <g id="icomoon-ignore">
                        </g>
                        <path d="M464 512h-416c-8.832 0-16-7.152-16-16v-256c0-8.848 7.168-16 16-16h48v-64c0-88.368 71.632-160 160-160s160 71.632 160 160v64h48c8.848 0 16 7.152 16 16v256c0 8.848-7.152 16-16 16zM352 152c0-48.608-42.992-88-96-88s-96 39.392-96 88v72h192v-72z"></path>
                    </svg>
                    <input type="password" class="password" placeholder="Adgangskode" v-model="user.password">
                </div>
                <button type="submit" class="button call-to-action">Log ind</button>
            </form>

            <div class="bottom">
                <div class="flexbox-center flex-row">
                    <div>
                        <img src="./../assets/images/niraslogo.svg" alt="Niras logo" class="niraslogo">
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
export default {
    name: 'login',
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log("user", this.user);
        }
    }
}
</script>
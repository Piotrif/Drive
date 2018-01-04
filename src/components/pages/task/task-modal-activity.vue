<template>
    <div class="activity-modal">
        <div class="form">
            <div class="grid-x">
                <div class="large-1 medium-1 small-1 cell flexbox-center">
                    <icon class="user small-svg" name="user"></icon>
                </div>
                <div class="large-3 medium-3 small-3 cell border-bottom">
                    <p>Aktivitet</p>
                </div>
                <div class="auto cell border-bottom">
                    <select v-model="data.activity" id="select">
                        <option value="0" disabled="disabled">Vælg aktivitet</option>
                        <option v-for="(activity, index) in activities" :selected="selectedActivity" v-bind:key="index" :value="{id: activity.id, activity: activity.name}">
                            {{activity.name}}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="form">
            <div class="grid-x">
                <div class="large-1 medium-1 small-1 cell flexbox-center">
                    <icon class="user small-svg" name="user"></icon>
                </div>
                <div class="large-3 medium-3 small-3 cell border-bottom">
                    <p>Periode</p>
                </div>
                <div class="auto cell border-bottom input-with-icon">
                    <input type="text" placeholder="Start dato" v-model="data.startDate">
                    <icon class="user small-svg" name="user"></icon>
                </div>
                <div class="large-1 cell text-center flexbox-center border-bottom">
                    <p class="seperator">-</p>
                </div>
                <div class="auto cell border-bottom input-with-icon">
                    <input type="text" placeholder="Slut dato" v-model="data.endDate">
                    <icon class="user small-svg" name="user"></icon>
                </div>
            </div>
        </div>
        <div class="form">
            <div class="grid-x">
                <div class="large-1 medium-1 small-1 cell flexbox-center">
                    <icon class="user small-svg" name="user"></icon>
                </div>
                <div class="large-3 medium-3 small-3 cell border-bottom">
                    <p>Entreprenør</p>
                </div>
                <div class="auto cell border-bottom">
                    <select v-model="data.user">
                        <option value="0" disabled="disabled">Vælg entreprenør</option>
                        <option v-for="(user, index) in users" :selected="selectedUser" v-bind:key="index" :value="{id: user.id, user: user.name}">
                            {{user.name}}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="form">
            <div class="grid-x">
                <div class="large-1 medium-1 small-1 cell flexbox-center">
                    <icon class="user small-svg" name="user"></icon>
                </div>
                <div class="large-3 medium-3 small-3 cell border-bottom">
                    <p>Reference</p>
                </div>
                <div class="auto cell border-bottom">
                    <input type="text" v-model="data.reference">
                </div>
            </div>
        </div>
        <div class="form">
            <div class="grid-x">
                <div class="large-1 medium-1 small-1 cell flexbox-center">
                    <icon class="user small-svg" name="user"></icon>
                </div>
                <div class="large-3 medium-3 small-3 cell border-bottom flexbox-center">
                    <p style="margin-left: -51px;">Bemærkning</p>
                </div>
                <div class="auto cell border-bottom">
                    <textarea type="text" rows="4" cols="30" v-model="data.note"></textarea>
                </div>
            </div>
        </div>

        <div class="text-center buttons-modal">
            <a @click="addActivity">Tilføj</a>
            <a @click="closeModal">Fortryd</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'task-modal-activity',
    data () {
        return {
            selectedActivity: null,
            selectedUser: null,
            activities: [],
            data: {}
        }
    },
    methods: {
        closeModal () {
            this.$emit('close')
        },
        addActivity () {
            console.log('data', this.data)
            this.closeModal()
        }
    },
    created () {
        this.activities = [
            {id: 1, name: 'Indstilling / kalibrering'},
            {id: 2, name: 'Andet'}
        ]
        this.users = [
            {id: 1, name: 'Hans Jensen'},
            {id: 2, name: 'John Hansen'}
        ]
    }
}
</script>
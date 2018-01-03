<template>
    <div>
        <div class="grid-x align-items employee-actions">
            <div class="large-4 cell">
                <input type="text" class="large-2 search-bottom-border" placeholder="Søg på medarbejder">
            </div>
            <div class="large-auto cell">
                <button class="float-right">Tilføj</button>
            </div>
        </div>
        <div class="grid-x">
            <div class="large-auto cell">
                <div class="grid-x list align-items">
                    <div class="large-1 cell">icon</div>
                    <div class="large-3 cell item">
                        <span>Søren Hansen</span>
                    </div>
                    <div class="large-4 cell item">
                        <span>soerenhansen@aalborg.dk</span>
                    </div>
                    <div class="large-1 cell item">
                        <div>icon 1</div>
                    </div>
                    <div class="large-1 cell item">
                        <div>icon 1</div>
                    </div>
                    <div class="large-2 cell item flexbox-center">
                        <div class="enquiry-status">Administrator</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    }
}
</script>

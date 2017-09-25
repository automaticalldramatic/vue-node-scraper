<template>
    <div class="wrapper">
        <div class="grid container grid--gutters grid--full">
            <div class="hello">
                <h1></h1>
                <form-com></form-com>
            </div>
            <transition name="fade-out-left">
                <scraperesult></scraperesult>
            </transition>
        </div>
    </div>
</template>

<script>
import ScrapeResult from '@/components/ScrapeResult.vue'
import FormCom from '@/components/Form.vue'

export default {
    name: 'home',
    components: {
        'form-com': FormCom,
        'scraperesult': ScrapeResult
    },
    data () {
        return {

        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
.fade-in-left-enter,
.fade-in-left-leave-active {
    transform: translate3d(100%, 0, 0);
    box-shadow: none;
}

.fade-out-left-enter,
.fade-out-left-leave-active {
    transform: translate3d(-100%, 0, 0);
    box-shadow: none;
}

.fade-in-bottom-enter,
.fade-in-bottom-leave-active {
    transform: translate3d(0, 100%, 0);
    box-shadow: none;
}


.fade-in-left-leave-active,
.fade-out-left-enter-active,
.fade-in-bottom-enter-active,
.fade-in-bottom-leave-active {
    transition: transform .2s ease;
}
.fade-in-left-enter-active,
.fade-out-left-leave-active {
    transition: transform .2s ease;
}
</style>

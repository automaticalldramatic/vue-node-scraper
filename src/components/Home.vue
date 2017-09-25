<template>
    <div class="container">
        <transition name="fade-out-left">
            <div class="row" v-if="!scrapedObj.fromParser">
                <div class="column column-50 column-offset-25">
                    <!-- <h2>Page Insights</h2> -->
                    <p>Enter a URL to get information about the website</p>
                    <form-com></form-com>
                </div>
            </div>
        </transition>
        <div class="row">
            <div class="column">
                <transition name="fade-in-left">
                    <scraperesult></scraperesult>
                </transition>
            </div>
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
    },
    computed: {

        scrapedObj () {
            return this.$store.getters.scrapedObj
        }

    },
    watch: {
        scrapedObj (newObj) {}
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
.fade-in-left-enter-active {
    transition: transform .6s ease;
}
.fade-out-left-enter-active,
.fade-in-bottom-enter-active,
.fade-in-bottom-leave-active {
    transition: transform .2s ease;
}

.fade-out-left-leave-active {
    transition: transform .1s ease;
}
</style>

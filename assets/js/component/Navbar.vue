<template>
    <nav>
        <div class="nav-wrapper container">
            <router-link :to="{name: 'home'}" class="brand-logo">SPYC Library</router-link>
            <a href="#" data-activates="side-nav" class="button-collapse">
                <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
                <li>
                    <router-link :to="{name: 'books'}">
                        Book Recommend
                    </router-link>
                </li>
            </ul>
            <ul class="side-nav" id="side-nav">
                <li>
                    <router-link :to="{name: 'books'}">
                        Book Recommend
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    export default{
        mounted() {
            $(".button-collapse").sideNav();
            $('.collapsible').collapsible();
            const $side = $(document.getElementById('side-nav'));
            $side.delegate('li a', 'click', () => $side.sideNav('hide'));
        }
    }
</script>

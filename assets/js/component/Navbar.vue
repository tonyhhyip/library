<template>
    <nav :class="{'nav-extended': navs}">
        <div class="nav-wrapper container">
            <router-link :to="{name: 'home'}" class="brand-logo">SPYC Library</router-link>
            <a href="#" data-activates="side-nav" class="button-collapse">
                <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
                <li>
                    <router-link :to="{name: 'intro', params: {section: 'aim'}}">
                        Introduction
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'books'}">
                        Book Recommend
                    </router-link>
                </li>
            </ul>
            <ul class="side-nav" id="side-nav">
                <li>
                    <router-link :to="{name: 'home'}">
                        <i class="material-icons">home</i>
                        Home
                    </router-link>
                </li>
                <li class="no-padding">
                    <ul class="collapsible collapsible-accordion">
                        <li>
                            <a class="collapsible-header">Introduction <i class="material-icons">arrow_drop_down</i></a>
                            <div class="collapsible-body">
                                <ul>
                                    <li>
                                        <router-link :to="{name: 'intro', params: {section: 'aim'}}">
                                            Aim
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name: 'intro', params: {section: 'rule'}}">
                                            Rule
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link :to="{name: 'books'}">
                        Book Recommend
                    </router-link>
                </li>
            </ul>
            <ul class="nav-tabs tabs-transparent hide-on-med-and-down" v-if="navs">
                <li class="tab" v-for="nav in navs">
                    <router-link active-class="active" :to="{name: name, params: {section: nav.name}}">
                        {{ nav.display }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
  import nav from '../../data/nav.json';
  export default{
    data() {
      console.log(this.$route);
      const name = this.$route.name;
      if (name in nav) {
        return {navs: nav[name], name}
      } else {
        return {navs: false};
      }
    },
    mounted() {
      $(".button-collapse").sideNav();
      $('.collapsible').collapsible();
      const $side = $(document.getElementById('side-nav'));
      $side.delegate('li a:not(.collapsible-header)', 'click', () => $side.sideNav('hide'));
    }
  }
</script>

<template>
    <div>
        <top />
        <main>
            <container>
                <row>
                    <div class="col s12">
                        <iframe src="https://library-spyc-edu-hk.tonyhhyip.me/WebOPAC.exe"></iframe>
                    </div>
                </row>
            </container>
        </main>
    </div>
</template>
<script>
  export default{
    components:{
      top: require('../component/Header.vue'),
      container: require('../component/Container.vue'),
      row: require('../component/Row.vue')
    }
  }
</script>

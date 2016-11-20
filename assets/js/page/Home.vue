<template>
    <div>
        <Header></Header>
        <main>
            <container>
                <row>
                    <div class="col s12">
                        <iframe src="http://library.pyc.edu.hk/WebOPAC.exe"></iframe>
                    </div>
                </row>
            </container>
        </main>
    </div>
</template>
<script>
  export default{
    components:{
      Header: require('../component/Header.vue'),
      container: require('../component/Container.vue'),
      row: require('../component/Row.vue')
    }
  }
</script>

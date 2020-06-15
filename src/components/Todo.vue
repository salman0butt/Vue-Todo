<template>
  <div style="max-height:96.3vh;">
    <v-container fluid fill-height pl-0 pr-0 pb-0 pt-0>
      <v-layout row align-content-space-between justify-space-between>
        <v-flex lg3 pr-2>
          <Lists></Lists>
        </v-flex>
        <v-flex lg-6 pr-2 pl-2>
          <Tasks></Tasks>
        </v-flex>
        <v-flex lg-3 pl-2>
            <OptionsBar></OptionsBar>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer height="auto" color="indigo">
       <v-layout justify-center>
        <v-flex indigo white--text text-xs-center style="text-align: center;">
            &copy;2020
          <strong>Dgital MediXpert</strong>
        </v-flex>
       </v-layout>
    </v-footer>
  </div>
</template>


<script>
  import Lists from './Lists'
  import Tasks from './Tasks'
  import OptionsBar from './OptionsBar'

  export default {
    name: "todo",
    components: {Lists, Tasks, OptionsBar}

  };
</script>

<style scoped>


</style>

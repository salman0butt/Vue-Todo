<template>
  <v-list-item @click.prevent="toggle(index)">
    <v-list-item-action>
      <v-btn icon>
        <v-icon color="pink">edit</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ task.title }}</v-list-item-title>
      <v-list-item-subtitle>
        {{ task.sub_title }}
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action-text>
      <v-icon v-if="task.isComplete" color="green">check_circle</v-icon>
      <v-icon v-else color="grey">check_circle</v-icon>
    </v-list-item-action-text>
  </v-list-item>


</template>

<script>
  export default {
    name: "Task",
    props: {
      task: Object,
      index: Number,
    },
    data: () =>({
      selected: [2],
    }),
    methods: {
      toggle(index) {
        // const i = this.selected.indexOf(index);
        // if (i > -1){
        //   this.selected.splice(index);
        // }else {
        //   this.selected.push(index);
        // }

        console.log(index);
      }
    }
    //TODO lecture no 4
  }
</script>

<style scoped>

</style>

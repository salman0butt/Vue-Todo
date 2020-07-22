<template>
  <div>
    <v-card style="height:100%;overflow: hidden">
      <v-toolbar color="blue" dark>
        <v-toolbar-title>
          Title of the list {{ listId }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list two-line style="height: 96.3vh;overflow-y: scroll;">
        <template
          v-for="(task,key) in tasks"
        >
          <Task v-bind:key="key" :task="task" :index="key"></Task>
        </template>
      </v-list>
      <v-divider></v-divider>
      <v-card-actions>
        <v-layout>
          <v-flex>
            <NewTask></NewTask>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
    <router-view :key="$route.fullPath" name="NotesModel"></router-view>
<!--    <NotesModel></NotesModel>-->
  </div>
</template>

<script>
  import Task from './Task'
  import NewTask from './NewTask'
  import NotesModel from './NotesModel'

  export default {
    name: "tasks",
    components: {Task, NewTask, NotesModel},
    data: () => ({
      tasks: [
        {
          id: 1,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },
        {
          id: 2,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },
        {
          id: 3,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },
        {
          id: 4,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },
        {
          id: 5,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },
        {
          id: 6,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },
        {
          id: 7,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },
        {
          id: 8,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },
        {
          id: 1,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },
        {
          id: 9,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },
        {
          id: 10,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },
        {
          id: 11,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },
        {
          id: 12,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },
        {
          id: 13,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },
        {
          id: 14,
          title: "Task Title",
          sub_title: "This task contains 8 notes",
          isComplete: true
        },

      ]
    }),
    computed: {
      listId () {
        return this.$route.params.id;
      }
    }
  };
</script>

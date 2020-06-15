<template>
  <v-navigation-drawer permanent style="width: 100%;" class="scroll-off">
    <v-toolbar color="blue" dark>
      <v-toolbar-title>Your lists</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
      <v-list-item color="blue">
        <v-list-item-content>
          <v-list-item-title>Create a new list</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-title>
            <v-icon>add</v-icon>
          </v-list-item-title>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list style="height: calc(100% - 128px);overflow-y: scroll;">
      <v-list-item
        v-for="(list,key) in lists"
        v-bind:key="key"
      >
        <v-list-item-content>
          <v-list-item-title>{{ list.title }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>{{ list.task }}</v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>


<script>
  export default {
    name: "Lists",
    data: () => ({
        lists: [
          {
            id: 1,
            title: "List 1",
            task: 12
          },
          {
            id: 2,
            title: "List 2",
            task: 2
          },
          {
            id: 3,
            title: "List 3",
            task: 4
          },      {
            id: 1,
            title: "List 1",
            task: 12
          },
          {
            id: 2,
            title: "List 2",
            task: 2
          },
          {
            id: 3,
            title: "List 3",
            task: 4
          },
          {
            id: 1,
            title: "List 1",
            task: 12
          },
          {
            id: 2,
            title: "List 2",
            task: 2
          },
          {
            id: 3,
            title: "List 3",
            task: 4
          },      {
            id: 1,
            title: "List 1",
            task: 12
          },
          {
            id: 2,
            title: "List 2",
            task: 2
          },
          {
            id: 3,
            title: "List 3",
            task: 4
          },
          {
            id: 1,
            title: "List 1",
            task: 12
          },
          {
            id: 2,
            title: "List 2",
            task: 2
          },
          {
            id: 3,
            title: "List 3",
            task: 4
          },      {
            id: 1,
            title: "List 1",
            task: 12
          },
          {
            id: 2,
            title: "List 2",
            task: 2
          },
          {
            id: 3,
            title: "List 3",
            task: 4
          },


        ]
    })
  }
</script>

  <style>
    /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
    .scroll-off {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      max-height: 100vh;
      overflow: hidden !important;
      padding-bottom: 1px;
    }
    .v-navigation-drawer__content {
      overflow-y: hidden;
      overflow-x: hidden;
    }

</style>

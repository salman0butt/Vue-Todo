<template>
  <v-card height="100%">
    <v-toolbar color="pink" dark>
      <v-toolbar-title>Options</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-group
        v-for="(item, key) in items"
        v-bind:key="key"
        v-model="item.isActive"
        :prepend-icon="item.action"
        no-action
      >
        <v-list-item slot="activator">
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(subItems, key) in item.items"
          v-bind:key="key"
          v-on="item.action === 'sort' ? { click: () => sort(subItems.by) } : { click: () => filter(subItems.by) }"
          active-class
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ subItems.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-group prepend-icon="filter" no-action>
        <v-list-item slot="activator">
          <v-list-item-content>
            <v-list-item-title>List Options</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="danger">Remove list</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="danger">Chnage Background</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: "OptionsBar",
    data: () => ({
      items: [
        {
          action: "sort",
          title: "Sort by",
          isActive: true,
          items: [
            {
              title: 'Date',
              by: 'date'
            },
            {
              title: 'Name',
              by: 'name'
            }
          ]
        },
        {
          action: "filter_list",
          title: "Filter by",
          isActive: false,
          items: [
            {
              title: 'Remaining',
              by: 'remaining'
            },
            {
              title: 'Completed',
              by: 'completed'
            },
            {
              title: 'All',
              by: 'all'
            }
          ]
        }
      ]
    }),
    methods: {
      sort(value) {
        console.log("Sort By " + value);
      },
      filter(value) {
        console.log("Filter By " + value);
      }
    }
  }
</script>

<style scoped>

</style>

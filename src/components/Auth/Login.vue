<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-form>
          <v-card class="elevation-12">
            <v-toolbar dark color="blue">
              <v-toolbar-title>
                Login form
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field prepend-icon="person" name="login" label="login" type="text">
              </v-text-field>
              <v-text-field prepend-icon="lock" name="password" label="password" type="password">
              </v-text-field>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions>
              <v-btn rounded color="indigo" dark to="/signup">
                Sign Up
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn rounded color="primary" dark @click.prevent="login()">
                Log In
                <v-icon>keyboard_arrow_right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "login",
    methods: {
      login() {
        this.$router.push('/')
      }
    }
  };
</script>

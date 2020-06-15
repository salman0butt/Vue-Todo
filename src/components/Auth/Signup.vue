<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="blue">
            <v-toolbar-title>
              Signup form
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-alert
                :value="true"
                color="error"
                icon="warning"
              >
                The user already exists, try different set data.
              </v-alert>
              <v-text-field
                prepend-icon="person"
                name="login"
                label="login"
                type="text"
                :rules="[rules.required]"
              >
              </v-text-field>
              <v-text-field
                prepend-icon="email"
                name="email"
                label="Email"
                type="email"
                :rules="[rules.required, rules.email]"
              >
              </v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="passowrd"
                label="Password"
                type="passowrd"
                :rules="[rules.required]"
                v-model="password"
              >
              </v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="confirm_passowrd"
                label="Confirm Password"
                type="passowrd"
                :rules="[rules.required]"
                v-model="confirm_passowrd"
                :error="!valid()"
              >
              </v-text-field>
          <v-divider light></v-divider>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              rounded
              color="black"
              dark
            >
              Sign In
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              rounded
              color="success"
              dark
            >
              Register
              <v-icon>keyboard_arrow_right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "signup",
    data:() =>({
      password: '',
      confirm_passowrd: '',
      rules: {
        required: value => !!value || "Required",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    }),
    methods: {
      valid() {
        return this.passowrd === this.confirm_passowrd;
      }
    }
  };
</script>

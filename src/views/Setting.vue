<template>
  <!-- <v-row align="center" justify="center">
    <v-switch v-model="$vuetify.theme.dark" primary label="Dark"></v-switch>
  </v-row>-->
  <v-container fluid>
    <v-card class="col-12">
      <v-card-title>Setting</v-card-title>
      <v-row align="center" justify="center">
        <v-switch v-model="$vuetify.theme.dark" primary label="Dark Mode"></v-switch>
      </v-row>
    </v-card>
  </v-container>
</template>
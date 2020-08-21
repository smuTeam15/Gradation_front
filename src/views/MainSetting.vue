<template>
  <v-container fill-height grid-list-md>
    <v-row dense wrap justify="center" align="center">
      <v-col cols="12" xs="12" sm="6" md="4" lg="3" x="12">
        <div class="pa-5">
          <template>
            <v-card
              @click="$router.push({ name: 'StorySetting' })"
              class="mx-auto"
              max-width="300"
              max-height="350"
            >
              <v-card-text>
                <h3 class="title primary--text my-2">Daily Misson</h3>
                <h3>Setting</h3>
              </v-card-text>
            </v-card>
          </template>
        </div>

        <div class="pa-5">
          <template>
            <v-card
              @click="$router.push({ name: 'TopicSetting' })"
              class="mx-auto"
              max-width="300"
              max-height="350"
            >
              <v-card-text>
                <h3 class="title blue--text my-2">Weekly Topic</h3>
                <h3>Setting</h3>
              </v-card-text>
            </v-card>
          </template>
        </div>

        <div class="pa-5">
          <template>
            <v-card
              @click="$router.push({ name: 'ChannelSetting' })"
              class="mx-auto"
              max-width="300"
              max-height="350"
            >
              <v-card-text>
                <h3 class="title my-2">Channel</h3>
                <h3>Setting</h3>
              </v-card-text>
            </v-card>
          </template>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

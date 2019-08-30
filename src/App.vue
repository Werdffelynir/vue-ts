<template>
  <VResponsive>
    <VApp>
        <VNavigationDrawer v-model="drawer" app>
          <VList dense>
            <VListItem @click="">
              <VListItemAction>
                <VIcon>mdi-home</VIcon>
                <VIcon>mdi-account</VIcon>
                <VIcon>mdi-account-switch</VIcon>
              </VListItemAction>
              <VListItemContent>
                <VListItemTitle>Home</VListItemTitle>
              </VListItemContent>
            </VListItem>
            <VListItem @click="">
              <VListItemAction>
                <VIcon>mdi-contact-mail</VIcon>
              </VListItemAction>
              <VListItemContent>
                <VListItemTitle>Contact</VListItemTitle>
              </VListItemContent>
            </VListItem>
          </VList>
        </VNavigationDrawer>

      <VAppBar app :color="orange" dark>
        <VAppBarNavIcon @click.stop="drawer = !drawer"></VAppBarNavIcon>
        <VToolbarTitle>Application</VToolbarTitle>
      </VAppBar>

      <VContent>
        <VContainer>
          <v-row>
            <v-col>Lorem ipsum dolor.</v-col>
            <v-col>Lorem ipsum dolor.</v-col>
            <v-col>Lorem ipsum dolor.</v-col>
          </v-row>
        </VContainer>
      </VContent>


    </VApp>
  </VResponsive>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import colors from 'vuetify/lib/util/colors';

export default Vue.extend({

  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    drawer: true,
    grey: colors.grey.base,
    orange: colors.orange.accent4,
  }),

});
</script>

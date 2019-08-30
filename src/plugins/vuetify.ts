import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import {Ripple} from 'vuetify/lib/directives';
import colors from 'vuetify/lib/util/colors';
import Vuetify from 'vuetify';
import VGrid from 'vuetify/lib/components/VGrid';

import {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VToolbar,
  VToolbarTitle,
  VToolbarItems,
  VNavigationDrawer,
  VFooter,
  VContent,
  VContainer,
  VSpacer,
  VList,
  VListItem,
  VListItemAction,
  VListItemContent,
  VListItemTitle,
  VBtn,
  VIcon,
  VRow,
  VTooltip,
  VResponsive,
} from 'vuetify/lib';


const components: any = {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VToolbar,
  VToolbarTitle,
  VToolbarItems,
  VNavigationDrawer,
  VFooter,
  VContent,
  VContainer,
  VSpacer,
  VRow,
  VList,
  VListItem,
  VListItemAction,
  VListItemContent,
  VListItemTitle,
  VBtn,
  VIcon,
  VTooltip,
  VResponsive,
};

Vue.use(Vuetify, {
  icons: {
    iconfont: 'mdi',
  },
  components: {...components},
  directives: {Ripple},
});

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.grey.darken1,
        secondary: colors.grey.lighten4,
        accent: colors.indigo.base,
      },
      dark: {
        primary: colors.lime.darken1,
        secondary: colors.lime.lighten4,
        accent: colors.indigo.base,
      },
    },
    dark: true,
  },
});

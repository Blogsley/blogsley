<template>
<div class="fit">
  <navbox-shell>
    <q-list>
      <q-item to="/users/create" exact v-if="$iam.needs('Admin')">
        <q-item-section avatar>
          <q-icon name="mdi-account-plus-outline" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Add User</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

  </navbox-shell>
</div>
</template>

<script>
import UiMixin from '~mixins/ui'
import NavboxShell from '~components/NavboxShell.vue'

export default {
  name: 'DefaultNavbox',
  mixins: [
    UiMixin
  ],
  props: [],
  components: {
    NavboxShell
  },
  methods: {
  }
}
</script>

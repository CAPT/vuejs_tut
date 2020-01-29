<template>
  <div>
    EDIT USER {{ id }}

    <div v-if="!user" class="alert alert-warning">
      Загрузка данных...
    </div>
    <user-form v-else :user="user" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from 'axios'
export default {
  name: 'EditUserPAge',
  components: {
    UserForm
  },
  data: function() {
    return {
      user: null
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get('http://localhost:3004/users/' + this.id)
        .then(response => (this.user = response.data))
        .catch(error => console.error(error))
    },
    addUser() {
      axios
        .post('http://localhost:3004/users/', '123')
        .then(response => (this.user = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>

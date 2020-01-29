<template>
  <div>
    EDIT USER {{ id }}

    <div v-if="!user" class="alert alert-warning">
      Загрузка данных...
    </div>
    <div v-else :user="user">
      <pre> {{ user }} </pre>
      Пользователь {{ id }} удален
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DeleteUserPage',
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
    this.deleteUser()
  },
  methods: {
    deleteUser() {
      axios
        .delete('http://localhost:3004/users/' + this.id)
        .then(response => (this.user = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>

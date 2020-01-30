<template>
  <div>
    <h2>Список пользователей</h2>
    <button type="button" class="btn btn-success">
      <router-link :to="'/add/'">
        Добавить пользователя
      </router-link>
    </button>
    <div v-if="!users.length" class="alert alert-warning">Загрузка...</div>
    <user-list v-else :users="users" />
  </div>
</template>

<script>
import UserList from '@/components/UsersList.vue'
import axios from 'axios'

export default {
  name: 'UsersPage',
  components: {
    'user-list': UserList
  },
  data: function() {
    return {
      users: []
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios
        .get('http://localhost:3004/users')
        .then(response => {
          this.users = response.data
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

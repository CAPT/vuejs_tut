<template>
   <div class="card">
    <div class="card-header">
      <span class="pull-right">
        Новый пользователь
      </span>

      Пользователь
    </div>
    <div class="card-body">
      <user-form :user="user">
        <button type="button" class="btn btn-success" @click="addUser">
          Создать пользователя
        </button>
      </user-form>
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from 'axios'

const defaultUser = {
  id: null,
  guid: '',
  isActive: false,
  balance: '',
  picture: 'http://placehold.it/128x128',
  age: 0,
  eyeColor: '',
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: ''
}

export default {
  name: 'AddUserPage',
  components: {
    UserForm
  },
  data: () => ({
    user: defaultUser
  }),
  methods: {
    addUser() {
      axios
        .post('http://localhost:3004/users/', this.user)
        .then(() => {
          this.$router.push({ path: '/users' })
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

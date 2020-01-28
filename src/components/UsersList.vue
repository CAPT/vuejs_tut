<template>
  <table v-cloak>
    <thead>
      <tr>
        <th>Фамилия</th>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Баланс</th>
        <th>Компания</th>
        <th>email</th>
        <th>Телефон</th>
        <th>Адрес</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.ind">
        <td>{{ user.lastName | uppercase }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.balance }}</td>
        <td>{{ user.company }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.address }}</td> 
      </tr>
    </tbody>
    <tfoot>
      <th colspan="8">Всего пользователей: {{ compute_users }}</th>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: 'UsersList',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    compute_users: function() {
      return this.users.length
    }
  },
  filters: {
    uppercase: function(value) {
      return value.toUpperCase()
    }
  }
}
</script>

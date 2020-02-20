<template>
  <div v-cloak>
    <slot name="header">Шапка по сеньке</slot>

    <table class="table table-hover">
      <thead>
        <slot name="table-header">
          <tr>
            <th>#</th>
            <th>Фамилия</th>
            <th>Имя</th>
            <!--  <th>Возраст</th>-->
            <th>Баланс</th>
            <th>Компания</th>
            <th>email</th>
            <th>Телефон</th>
            <th>Активен</th>
            <th>Удалить</th>
          </tr>
        </slot>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.ind">
          <slot name="table-row" :user="user" :choo="choo">
            <td>
              <router-link :to="'/edit/' + user.id">
                # {{ user.id }}
              </router-link>
            </td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName | uppercase }}</td>
            <!-- <td>{{ user.age }}</td> -->
            <td>{{ user.balance }}</td>
            <td>{{ user.company }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.isActive }}</td>
            <td>
              <router-link :to="'/delete/' + user.id" class="red">
                X
              </router-link>
            </td>
          </slot>
        </tr>
      </tbody>
      <tfoot>
        <th colspan="8">Всего пользователей: {{ compute_users }}</th>
      </tfoot>
    </table>
    <slot name="footer">Подвал по дефолту</slot>
  </div>
</template>
<style>
a.red {
  color: darkred;
  font-weight: 800;
  text-align: left;
  vertical-align: middle;
}
</style>
<script>
export default {
  name: "UsersList",
  filters: {
    uppercase: function(value) {
      return value.toUpperCase();
    }
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    compute_users: function() {
      return this.users.length;
    }
  },
  methods: {
    choo() {
      alert("Choo-Choo!!!");
    }
  }
};
</script>

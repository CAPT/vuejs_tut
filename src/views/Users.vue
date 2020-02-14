<template>
  <div>
    <h2>Список пользователей</h2>
    <router-link :to="'/add/'">
      <button type="button" class="btn btn-success">
        Добавить пользователя
      </button>
    </router-link>
    <div v-if="!users.length" class="alert alert-warning">Загрузка...</div>
    <user-list v-else :users="users">
    <!--  <template v-slot:header>
        <strong>Не по сеньке шапка, ХЕ-хе</strong>
      </template>
      <template v-slot:footer>
        <button type="button" class="btn btn-primary" @click="testButton">
          Проверочная кнопка
        </button>
      </template>
      <template slot="table-header">
        <tr>
          <th>#</th>
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Телефон</th>
        </tr>
      </template>
      <template v-slot:table-row="{ user, choo }">
        <td>
          <router-link :to="'/edit/' + user.id"> # {{ user.id }} </router-link>
        </td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>
          {{ user.phone }}
          <button type="button" class="btn btn-danger" @click="choo">
            Choo
          </button>
        </td>
      </template>-->
    </user-list>
  </div>
</template>

<script>
import UserList from "@/components/UsersList.vue";
import axios from "axios";

export default {
  name: "UsersPage",
  components: {
    "user-list": UserList
  },
  data: function() {
    return {
      users: []
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    testButton() {
      alert("0_o");
    },
    loadUsers() {
      const token = "1234567890";

      const config = {
        headers: {
          Authorization: `Owner ${token}`
        }
      };
      axios
        .get("http://localhost:3004/users", config)
        .then(response => {
          this.users = response.data;
        })
        .catch(error => console.error(error));
    }
  }
};
</script>

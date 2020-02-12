<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <span class="pull-right">
        Новый пользователь
      </span>
    </div>
    <div class="panel-body">
      <user-form v-model="user" @update="user = $event">
        <div slot="buttons">
          <button type="button" class="btn btn-success" @click="addUser">
            Создать пользователя
          </button>
        </div>
      </user-form>
    </div>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import axios from "axios";

const defaultUser = {
  id: 0,
  isActive: false,
  balance: "",
  picture: "",
  age: 0,
  accessLevel: "",
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  address: "",
  about: "",
  registered: ""
};

export default {
  name: "AddUserPage",
  components: {
    UserForm
  },
  data: () => ({
    // Пользователь
    user: defaultUser
  }),
  methods: {
    addUser() {
      axios
        .post("http://localhost:3004/users/", this.user)
        .then(() => {
          this.$router.push({ path: "/users" });
        })
        .catch(error => console.error(error));
    }
  }
};
</script>

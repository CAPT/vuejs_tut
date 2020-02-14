<template>
  <div>
    EDIT USER {{ id }}

    <div v-if="!user" class="alert alert-warning">
      Загрузка данных...
    </div>
    <user-form v-else v-model="user" @update="user = $event" />
    <!--/*:user="user"*/-->
    <button type="button" class="btn btn-primary" @click="saveUser">
      Сохранить
    </button>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import axios from "axios";
export default {
  name: "EditUserPAge",
  components: {
    UserForm
  },
  data: function() {
    return {
      user: null
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  mounted() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      axios
        .get("http://localhost:3004/users/" + this.id)
        .then(response => (this.user = response.data))
        .catch(error => console.error(error));
    },
    saveUser() {
      axios
        .patch("http://localhost:3004/users/" + this.id, this.user)
        .then(() => {
          this.$router.push("/users");
        })
        .catch(error => console.error(error));
    }
  }
};
</script>

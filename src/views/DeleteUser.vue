<template>
  <div>
    Удаляем пользователя {{ id }}

    <div v-if="!user" class="alert alert-warning">
      Удаление данных... <br />
      Вы будете переадресованы обратно на список
    </div>
    <div v-else :user="user">
      <pre> {{ user }} </pre>
      Пользователь {{ id }} удален
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DeleteUserPage",
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
    this.deleteUser();
  },
  methods: {
    deleteUser() {
      axios
        .delete("http://localhost:3004/users/" + this.id)
        .then(setTimeout(this.goBack, 3000))
        .catch(error => console.error(error));
    },
    goBack() {
      window.history.back();
    }
  }
};
</script>

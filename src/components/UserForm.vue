<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input v-model="localUser.firstName" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input v-model="localUser.lastName" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input v-model="localUser.email" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>URL картинки</label>
      <avatar-uploader v-model="localUser.picture" />
    </div>

    <div class="form-group">
      <label>Возраст</label>
      <input v-model="localUser.age" type="number" class="form-control" />
    </div>

    <div class="form-group">
      <label>Активный</label>
      <div class="checkbox-inline"><input v-model="localUser.isActive" type="checkbox" /> Да</div>
    </div>

    <div class="form-group">
      <label>Уровень доступа</label>
      <select v-model="localUser.accessLevel" class="form-control">
        <option v-for="item in accessList" :key="item">
          {{ item }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input v-model="localUser.balance" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input v-model="localUser.phone" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input v-model="localUser.address" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input v-model="localUser.company" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Биография</label>
      <textarea v-model="localUser.about" class="form-control"></textarea>
    </div>

    <div class="form-group">
      <label>Дата регистрации</label>
      <datepicker v-model="localUser.registered"></datepicker>
    </div>

    <hr />

    <!--<pre>{{ user }}</pre>
    <pre>{{ localUser }}</pre> -->

    <slot name="buttons"></slot>
  </div>
</template>
<style>
.form-group {
  text-align: left;
}
.form-group label {
  font-weight: 600;
  color: grey;
}
</style>
<script>
// Используемые плагины
//import Vue from 'vue'
//import VeeValidate from 'vee-validate'
// Подключаем vee-validate
//Vue.use(VeeValidate)
export default {
  name: 'UserForm',
  // Прокидываем область видимости родителя для валидации
  //inject: ['$validator'],
  /*components: {
    Datepicker: () => import('@/components/datepicker.vue'),
    AvatarUploader: () => import('@/components/avatar-uploader.vue'),
    RichEditor: () => import('@/components/rich-editor.vue')
  },*/
  model: {
    prop: 'user'
  },
  props: {
    // Объект с данными пользователя
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    // Локальный изменяемый объект пользователя
    localUser: null,
    accessList: ['guest', 'user', 'admin']
  }),
  watch: {
    // При изменении локального состояния
    // отправляем объект наверх
    localUser: {
      deep: true,
      handler: 'updateUser'
    }
  },
  created() {
    // Копируем пользователя в локальное состояние
    this.localUser = Object.assign({}, this.user)
  },
  methods:{
    updateUser(){
      this.$emit('update', Object.assign({}, this.localUser))
    }
  }
}
</script>

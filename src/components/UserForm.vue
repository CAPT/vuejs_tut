<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input type="text" class="form-control" :value="user.firstName" />
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input type="text" class="form-control" :value="user.lastName" />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" :value="user.email" />
    </div>

    <div class="form-group">
      <label>URL картинки</label>
      <avatar-uploader v-model="user.picture" />
    </div>

    <div class="form-group">
      <label>Возраст</label>
      <input type="number" class="form-control" :value="user.age" />
    </div>

    <div class="form-group">
      <label>Активный</label>
      <div class="checkbox-inline"><input type="checkbox" :value="user.isActive" /> Да</div>
    </div>

    <div class="form-group">
      <label>Уровень доступа</label>
      <select class="form-control" :value="user.accessLevel">
        <option v-for="item in accessList" :key="item">
          {{ item }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input type="text" class="form-control" :value="user.balance" />
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input type="text" class="form-control" :value="user.phone" />
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input type="text" class="form-control" :value="user.address" />
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input type="text" class="form-control" :value="user.company" />
    </div>

    <div class="form-group">
      <label>Биография</label>
      <textarea class="form-control" :value="user.about"></textarea>
    </div>

    <div class="form-group">
      <label>Дата регистрации</label>
      <datepicker :value="user.registered"></datepicker>
    </div>

    <hr />

    <pre>{{ user }}</pre>

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
      handler() {
        this.$emit('input', this.localUser)
      }
    }
  },
  created() {
    // Копируем пользователя в локальное состояние
    this.localUser = Object.assign({}, this.user)
  }
}
</script>

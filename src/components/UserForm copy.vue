<template>
  <div>
    <div class="form-group" :class="{ 'has-error': errors.has('firstName') }">
      <label>Имя</label>
      <input
        v-model="user.firstName"
        v-validate="'required'"
        type="text"
        class="form-control"
        name="firstName"
      />
      <span v-show="errors.has('firstName')" class="help-block text-danger">
        {{ errors.first("firstName") }}
      </span>
    </div>

    <div class="form-group" :class="{ 'has-error': errors.has('lastName') }">
      <label>Фамилия</label>
      <input
        v-model="user.lastName"
        v-validate="'required'"
        type="text"
        class="form-control"
        name="lastName"
      />
      <span v-show="errors.has('lastName')" class="help-block text-danger">
        {{ errors.first("lastName") }}
      </span>
    </div>

    <div class="form-group" :class="{ 'has-error': errors.has('email') }">
      <label>Email</label>
      <input
        v-model="user.email"
        v-validate="'required|email'"
        type="text"
        class="form-control"
        name="email"
      />
      <span v-show="errors.has('email')" class="help-block text-danger">
        {{ errors.first("email") }}
      </span>
    </div>

    <div class="form-group">
      <label>URL картинки</label>
      <avatar-uploader v-model="user.picture" />
    </div>

    <div class="form-group">
      <label>Возраст</label>
      <input v-model="user.age" type="number" class="form-control" />
    </div>

    <div class="form-group">
      <label>Активный</label>
      <div class="checkbox-inline">
        <input v-model="user.isActive" type="checkbox" /> Да
      </div>
    </div>

    <div class="form-group">
      <label>Уровень доступа</label>
      <select v-model="user.accessLevel" class="form-control">
        <option v-for="item in accessList" :key="item">
          {{ item }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input v-model="user.balance" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input v-model="user.phone" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input v-model="user.address" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input v-model="user.company" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Биография</label>
      <textarea v-model="user.about" class="form-control"></textarea>
    </div>

    <div class="form-group">
      <label>Дата регистрации</label>
      <datepicker v-model="user.registered"></datepicker>
    </div>

    <hr />

    <pre>{{ user }}</pre>

    <slot name="buttons"></slot>
  </div>
</template>

<script>
// Используемые плагины
//import Vue from 'vue'
//import VeeValidate from 'vee-validate'
// Подключаем vee-validate
//Vue.use(VeeValidate)
export default {
  name: "UserForm",
  // Прокидываем область видимости родителя для валидации
  inject: ["$validator"],
  /*components: {
    Datepicker: () => import('@/components/datepicker.vue'),
    AvatarUploader: () => import('@/components/avatar-uploader.vue')
  },*/
  model: {
    // Настраиваем компоненту работу с v-model
    prop: "user"
  },
  props: {
    // Пользователь
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    accessList: ["guest", "user", "admin"]
  })
};
</script>

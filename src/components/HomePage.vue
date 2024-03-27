<template>
  <div>
    <button @click="openPopup">Начать</button>
    <div v-if="isPopupOpen" class="popup-background" @click="closePopup">
      <div class="popup" @click.stop>
        <h2>Введите данные:</h2>
        <div class="input-container">
          <label for="name">Имя:</label>
          <input type="text" id="name" v-model="formData.name">
        </div>
        <div class="input-container">
          <label for="email">Email:</label>
          <input type="text" id="email" v-model="formData.email">
        </div>
        <div class="input-container">
          <label for="phone">Телефон:</label>
          <input type="text" id="phone" v-model="formData.phone">
        </div>
        <div class="input-container">
          <label for="age">Возраст:</label>
          <input type="text" id="age" v-model="formData.age">
        </div>
        <div class="input-container">
          <label for="comment">Комментарий:</label>
          <input type="text" id="comment" v-model="formData.comment">
        </div>
        <button @click="submitForm">Отправить</button>
      </div>
    </div>
    <div class="submitted-data" v-if="submittedData">
      <h3>Ваши данные:</h3>
      <pre>{{ submittedData }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPopupOpen: false,
      formData: {
        name: '',
        email: '',
        phone: '',
        age: '',
        comment: ''
      },
      submittedData: null
    };
  },
  methods: {
    openPopup() {
      this.isPopupOpen = true;
    },
    closePopup() {
      this.isPopupOpen = false;
    },
    submitForm() {
      this.closePopup();
      this.submittedData = JSON.stringify(this.formData, null, 2);
    }
  }
};
</script>

<style>
.popup-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  max-width: 500px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.input-container label {
  margin-bottom: 5px;
}

button {
  margin-top: 10px;
}

.submitted-data {
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
}

.submitted-data pre {
  white-space: pre-wrap;
}</style>
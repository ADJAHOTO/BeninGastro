<template>
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-4">
      <div class="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full animate-fade-in">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Contactez-Nous</h2>
        
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-gray-900 font-semibold mb-2">Nom d'Utiisateur</label>
            <input v-model="form.name" type="text" class="input-field" placeholder="John Doe" />
            <p v-if="errors.name" class="error-text">{{ errors.name }}</p>
          </div>
  
          <div>
            <label class="block text-gray-900 font-semibold mb-2">Email</label>
            <input v-model="form.email" type="email" class="input-field" placeholder="johndoe@example.com" />
            <p v-if="errors.email" class="error-text">{{ errors.email }}</p>
          </div>
  
          <div>
            <label class="block text-gray-900 font-semibold mb-2">Message</label>
            <textarea v-model="form.message" class="input-field h-32 resize-none" placeholder="Votre message"></textarea>
            <p v-if="errors.message" class="error-text">{{ errors.message }}</p>
          </div>
  
          <button type="submit" class="submit-button">Envoyer</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  
  const form = reactive({
    name: '',
    email: '',
    message: ''
  });
  
  const errors = ref({});
  
  const handleSubmit = () => {
    errors.value = {};
  
    if (!form.name) errors.value.name = "Name is required.";
    if (!form.email || !validEmail(form.email)) errors.value.email = "Please enter a valid email.";
    if (!form.message) errors.value.message = "Message is required.";
  
    if (Object.keys(errors.value).length === 0) {
      alert("Message sent successfully!");
      resetForm();
    }
  };
  
  const validEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };
  
  const resetForm = () => {
    form.name = '';
    form.email = '';
    form.message = '';
  };
  </script>
  
  <style scoped>
  .input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
    transition: border 0.3s;
  }
  .input-field:focus {
    border-color: indigo;
    box-shadow: 0 0 5px rgba(75, 0, 130, 0.5);
  }
  .error-text {
    color: red;
    font-size: 0.875rem;
    margin-top: 5px;
  }
  .submit-button {
    width: 100%;
    padding: 12px;
    background-color: indigo;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
  }
  .submit-button:hover {
    background-color: darkblue;
  }
  </style>
  
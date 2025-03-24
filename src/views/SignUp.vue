<template>
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-800 to-blue-900 p-4">
      <div class="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full animate-fade-in">
        <h2 class="text-2xl font-bold text-center text-indigo-800 mb-8">Create an Account</h2>
        
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-indigo-900 font-semibold mb-2">Username</label>
            <input v-model="form.username" type="text" class="input-field" placeholder="Enter your username" />
            <p v-if="errors.username" class="error-text">{{ errors.username }}</p>
          </div>
  
          <div>
            <label class="block text-indigo-900 font-semibold mb-2">Email</label>
            <input v-model="form.email" type="email" class="input-field" placeholder="Enter your email" />
            <p v-if="errors.email" class="error-text">{{ errors.email }}</p>
          </div>
  
          <div>
            <label class="block text-indigo-900 font-semibold mb-2">Password</label>
            <input v-model="form.password" type="password" class="input-field" placeholder="Enter your password" />
            <p v-if="errors.password" class="error-text">{{ errors.password }}</p>
          </div>
  
          <div>
            <label class="block text-indigo-900 font-semibold mb-2">Confirm Password</label>
            <input v-model="form.confirmPassword" type="password" class="input-field" placeholder="Confirm your password" />
            <p v-if="errors.confirmPassword" class="error-text">{{ errors.confirmPassword }}</p>
          </div>
  
          <button type="submit" class="submit-button">Register</button>
        </form>
  
        <p class="text-center text-gray-600 mt-6">
          Already have an account?
          <router-link to="/SignIn">
            <a href="#" class="text-indigo-800 font-semibold hover:text-blue-900 transition-colors duration-300">Sign In</a>
          </router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        },
        errors: {}
      };
    },
    methods: {
      handleSubmit() {
        this.errors = {};
  
        if (!this.form.username) this.errors.username = "Username is required.";
        if (!this.form.email || !this.validEmail(this.form.email)) this.errors.email = "Please enter a valid email.";
        if (!this.form.password) this.errors.password = "Password is required.";
        if (this.form.password !== this.form.confirmPassword) this.errors.confirmPassword = "Passwords do not match.";
  
        if (Object.keys(this.errors).length === 0) {
          alert("Form submitted successfully!");
          this.resetForm();
        }
      },
      validEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      },
      resetForm() {
        this.form.username = '';
        this.form.email = '';
        this.form.password = '';
        this.form.confirmPassword = '';
      }
    }
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
  
<script setup lang="ts">
const form = reactive({
  eid: '',
  pass: '',
})

async function attemptLogin() {}
</script>

<template>
  <div class="h-dvh grid place-items-center">
    <a-card class="w-sm max-w-full">
      <div class="mx-auto w-fit mb-16">
        <img
          class="w-16"
          src="https://login.macys.net/sso/XUI/themes/macys/images/login-logo-white.jpg"
          alt="Logo"
        />
      </div>

      <a-form
        :model="form"
        name="basic"
        layout="vertical"
        autocomplete="off"
        @finish="attemptLogin"
      >
        <a-form-item
          label="Employee ID"
          name="eid"
          :rules="[{ required: true, message: 'Please input your ID!' }]"
        >
          <a-input v-model:value="form.eid" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="pass"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password
            v-model:value="form.pass"
            type="password"
          />
        </a-form-item>

        <br />

        <a-button
          block
          type="primary"
          html-type="submit"
        >
          Log In
        </a-button>
      </a-form>
    </a-card>
  </div>
</template>

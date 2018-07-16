<template>
  <div class="send-message-form">
    <form @submit="submitHandler" className="send-message-form">
      <input v-model="message" placeholder="Type you message and hit ENTER" type="text" />
    </form>
  </div>
</template>
<script>
export default {
  name: 'SendMessageForm',
  data () {
    return {
      message: ''
    }
  },
  props: {
    sendMessage: {
      type: Function
    }
  },
  methods: {
    submitHandler (e) {
      e.preventDefault()
      this.sendMessage(this.message)
      this.message = ''
    }
  }
}
</script>
<style lang="css" scoped>
form {
  height: 100%;
  width: 100%;
}
</style>

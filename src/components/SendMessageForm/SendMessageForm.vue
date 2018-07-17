<template>
  <div class="send-message-form">
    <form @submit.prevent="submitHandler" className="send-message-form">
      <input
        v-model="message"
        placeholder="Type you message and hit ENTER"
        type="text"
        :disabled="disabled"
      />
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
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    submitHandler (e) {
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

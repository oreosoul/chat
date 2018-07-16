<template>
  <div class="message">
    <div class="message-usernamr">{{message.senderId}}</div>
    <div class="message-text">{{message.text}}</div>
  </div>
</template>
<script>
export default {
  name: 'Message',
  data () {
    return {

    }
  },
  props: {
    message: {
      type: Object,
      default: () => {}
    }
  },
  components: {

  }
}
</script>
<style lang="css" scoped>
</style>

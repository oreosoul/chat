<template>
 <div class="message-list">
   <message
    v-for="(message, index) in messages"
    :key="index"
    :message="message"></message>
 </div>
</template>
<script>
import Message from '../Message/Message'
export default {
  name: 'MessageList',
  data () {
    return {
    }
  },
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Message
  }
}
</script>
<style lang="css" scoped>
</style>

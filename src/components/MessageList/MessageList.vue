<template>
  <div v-if="roomId" class="message-list">
    <message
      :class="{'self-meassge': currentUser.id === message.senderId}"
      v-for="(message, index) in messages"
      :key="index"
      :message="message"></message>
  </div>
  <div v-else class="message-list">
    <div class="join-room">
      &larr; Join a room!
    </div>
  </div>
</template>

<script>
import Message from '../Message/Message'
export default {
  name: 'MessageList',
  data () {
    return {
      shouldScrollToBottom: false
    }
  },
  beforeUpdate () {
    const node = document.querySelector('.message-list')
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight >= node.scrollHeight
  },
  updated () {
    if (this.shouldScrollToBottom) {
      const node = document.querySelector('.message-list')
      node.scrollTop = node.scrollHeight
    }
  },
  props: {
    currentUser: {
      type: Object,
      default: null
    },
    messages: {
      type: Array,
      default: () => []
    },
    roomId: {
      type: Number,
      default: null
    }
  },
  components: {
    Message
  }
}
</script>
<style lang="css" scoped>
</style>

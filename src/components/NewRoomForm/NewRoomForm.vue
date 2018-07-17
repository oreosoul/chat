<template>
  <div class="new-room-form">
    <form @submit.prevent="createRoomHandler()">
      <input type="text" placeholder="NewRoomForm" v-model="roomName" required />
      <button id="create-room-btn" type="submit">+</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'NewRoomForm',
  data () {
    return {
      roomName: ''
    }
  },
  props: {
    createRoom: {
      type: Function
    }
  },
  methods: {
    createRoomHandler (e) {
      this.createRoom(this.roomName)
      this.roomName = ''
    }
  }
}
</script>
<style lang="css" scoped>
input {
  width: 140px;
}
</style>

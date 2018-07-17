<template>
  <div class="room-list">
    <h3>Your Rooms:</h3>
    <ul>
      <li class="room" :class="{'active':isActiveRoom(room)}" v-for="(room, index) in orderRooms" :key="index">
        <a @click="subscribeToRoom(room.id)" href="#"># {{room.name}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'RoomList',
  data () {
    return {

    }
  },
  props: {
    roomId: {
      type: Number,
      default: null
    },
    rooms: {
      type: Array,
      default: () => []
    },
    subscribeToRoom: {
      type: Function
    }
  },
  methods: {
    isActiveRoom (room) {
      return this.roomId === room.id
    }
  },
  computed: {
    orderRooms () {
      return this.rooms.slice(0).sort((a, b) => a.id - b.id)
    }
  }
}
</script>
<style lang="css" scoped>
</style>

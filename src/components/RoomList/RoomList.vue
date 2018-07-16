<template>
  <div class="room-list">
    <h3>Your Rooms:</h3>
    <ul>
      <li class="room" v-for="(room, index) in rooms" :key="index">
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
    rooms: {
      type: Array,
      default: () => []
    },
    subscribeToRoom: {
      type: Function
    }
  },
  components: {

  }
}
</script>
<style lang="css" scoped>
</style>

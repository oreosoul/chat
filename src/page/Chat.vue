<template>
 <div class="chat">
  <room-list
    :roomId="roomId"
    :subscribeToRoom="subscribeToRoom"
    :rooms="rooms"
  ></room-list>
  <message-list
    :currentUser="currentUser"
    :roomId="roomId"
    :messages="messages"
  ></message-list>
  <new-room-form
    :createRoom="createRoom"
  ></new-room-form>
  <send-message-form
    :disabled="!roomId"
    :sendMessage="sendMessage"
  ></send-message-form>
 </div>
</template>
<script>
import SendMessageForm from '../components/SendMessageForm/SendMessageForm'
import MessageList from '../components/MessageList/MessageList'
import RoomList from '../components/RoomList/RoomList'
import NewRoomForm from '../components/NewRoomForm/NewRoomForm'
import Chatkit from '@pusher/chatkit'
import { tokenUrl, instanceLocator } from '../assets/js/config'

export default {
  name: 'Chat',
  data () {
    return {
      roomId: null,
      messages: [],
      currentUser: null,
      joinableRooms: [],
      joinedRooms: []
    }
  },
  components: {
    SendMessageForm,
    MessageList,
    RoomList,
    NewRoomForm
  },
  methods: {
    createRoom (name, isPrivate = false, addUserIds = []) {
      this.currentUser.createRoom({
        name,
        private: isPrivate,
        addUserIds
      }).then(room => {
        this.subscribeToRoom(room.id)
      }).catch(err => {
        console.error('Error on creating room:', err)
      })
    },
    sendMessage (text) {
      this.currentUser.sendMessage({
        text,
        roomId: this.roomId
      })
    },
    subscribeToRoom (roomId) {
      this.messages = []
      this.currentUser.subscribeToRoom({
        roomId,
        hooks: {
          onNewMessage: message => {
            this.messages.push(message)
          }
        }
      })
        .then(room => {
          this.roomId = room.id
          this.getRooms()
        })
        .catch(err => console.error('Error on subscribing to room: ', err))
    },
    getRooms () {
      this.currentUser.getJoinableRooms()
        .then(joinableRooms => {
          this.joinableRooms = joinableRooms
          this.joinedRooms = this.currentUser.rooms
        })
        .catch(err => console.error('Error on joinerableRooms:', err))
    }
  },
  computed: {
    rooms () {
      return this.joinableRooms.concat(this.joinedRooms)
    }
  },
  mounted () {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'Cheuk',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.getRooms()
      })
      .catch(err => console.error('Error on connecting:', err))
  }
}
</script>
<style lang="css">
</style>

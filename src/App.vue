<template>
  <div id="app">
    <div class="add-task">
      <Input
        v-model="newTask.text"
        placeholder="Enter the task here."
        @on-enter="addTask"/>
    </div>
    <p class="feedback">{{ feedback }}</p>
    <br>
    <ul class="task-list">
      <li v-for="(item, index) in todoList"
        :key="index"
        class="task">
        <header class="task-header">
          <Row>
            <Col :xs="22">
              <Input
                :value="item.text"
                placeholder="Enter the task"/>
            </Col>
            <Col :xs="2"
              class="task-header-mark">
              <Icon
                color="#19be6b"
                v-if="item.type === 'IN_PROGRESS'"
                @click="toggleType(index)"
                type="md-checkbox"
                size="36"/>
              <Icon
                color="#c5c8ce"
                v-if="item.type === 'COMPLETE'"
                @click="toggleType(index)"
                type="md-square-outline"
                size="36"/>
            </Col>
          </Row>
        </header>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  mounted () {
    this.$store.dispatch('getTasks')
  },
  name: 'App',
  data () {
    return {
      newTask: {
        type: 'IN_PROGRESS',
        text: ''
      },
      feedback: ''
    }
  },
  computed: {
    todoList () {
      return this.$store.getters.tasks
    }
  },
  methods: {
    addTask () {
      if (!this.newTask.text) {
        this.feedback = 'Please enter text before send.'
      }
      this.$store.dispatch('postTask', this.newTask)
      this.reset()
    },
    reset () {
      this.newTask = {
        type: 'IN_PROGRESS',
        text: ''
      }
      this.feedback = ''
    },
    toggleType (index) {
      this.$store.dispatch('putTask', index)
    }
  }

}
</script>

<style lang="scss">
.add-task {
  width: 60%;
  min-width: 300px;
  margin: auto;
}

.task-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
}

.task {
  display: block;
  width: 60%;
  min-width: 300px;
  &-header{
    &-text {
      width :80%;
    }
    &-mark {
      display: flex;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>

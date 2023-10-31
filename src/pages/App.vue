<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
      v-model="novaTarefa"
      @keyup.enter="addTarefa"
      class="col"
      square=""
       filled
       bg-color="white"

       placeholder="Add atividade"
      dense >


        <template v-slot:append>
          <q-btn
          @click="addTarefa"
           round
            dense
             flat
             icon="add" />
        </template>
      </q-input>
    </div>
    <q-list
    class="bg-white"
    separator
    bordered>
      <q-item
      v-for="(task, index) in tasks"
      :key="task.title"
      @click="task.done = !task.done"
      :class="{'done bg-blue-1' : task.done}"
      clickable
      v-ripple>
        <q-item-section avatar>
          <q-checkbox
          v-model="task.done"
          class="no-pointer-events"

           color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <div class="button-container">
       <q-item-section>

    <q-btn
      @click.stop="editTask(index)"
      flat
      round
      dense
      color="primary"
      icon="edit"
    />
    <q-btn
      @click.stop="deleteTask(index)"
      flat
      round
      dense
      color="primary"
      icon="delete"
    />
  </q-item-section>
</div>
      </q-item>
       </q-list>
    <div
    v-if="!tasks.length"
    class="no-tasks absolute-center">
      <q-icon
      name="check"
      size="150px"
      color="primary"
      />

    <div class="text-h6 text-primary text-center">
      Sem atividade
    </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      novaTarefa: '',
      tasks: JSON.parse(localStorage.getItem("todos")) || []
    }
  },
  methods: {
    deleteTask(index) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Apagar atividade?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index, 1);
        this.$q.notify('Apagado com sucesso!');
        this.saveTasksToLocalStorage();
      });
    },
    editTask(index) {
      const newTitle = this.$q.dialog({
        title: "Edição",
        prompt: {
          model: this.tasks[index].title,
          type: "text",
        },
        cancel: true,
        persistent: true,
      }).onOk((data) => {
        this.tasks[index].title = data;
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        this.$q.notify("Editado com sucesso!");
      });
    },
    addTarefa() {
      this.tasks.push({
        title: this.novaTarefa,
        done: false
      });
      this.novaTarefa = '';
      this.saveTasksToLocalStorage();
    },
    saveTasksToLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.tasks));
    }
  }
}
</script>

<style lang="scss">
.done  {
  .q-item__label{
    text-decoration: line-through;
    color:#bbb ;
  }
}
.no-tasks{
  opacity: 0.5;
}
</style>

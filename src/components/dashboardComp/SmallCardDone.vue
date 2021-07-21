<template>
  <div>
      <font-awesome-icon icon="check" class="card-middle-done-icon" />
        <div>
           <p class="card-middle-done-text">{{ doneText }}</p>
        </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class SmallCard extends Vue {
  @Prop() readonly doneText! : string | undefined
}
</script>

<style lang="scss">
.card-middle-done-icon{
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 35px;
}

</style>

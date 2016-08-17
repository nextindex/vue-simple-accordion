<template>
  <div class="Accordion__item" :class="style">
    <div class="Accordion__heading" @click="isOpen = !isOpen">
      <div class="Accordion__title">
        <slot name="title"></slot>
      </div>
      <div class="Accordion__icon" v-bind:class="{'is-open': isOpen}">
        <slot name="icon"></slot>
      </div>
    </div>
    <div class="Accordion__content" v-bind:class="{'is-open': isOpen}">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      style: {
        default: '',
        type: String,
        required: false
      }
    },
    data () {
      return {
        isOpen: false
      }
    }
  }
</script>

<style>
  .Accordion__item {
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
  }

  .Accordion__heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
  }

  .Accordion__content {
    display: none;
  }

  .is-open.Accordion__content {
    display: block;
  }

</style>

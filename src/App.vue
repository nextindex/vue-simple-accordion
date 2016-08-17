<template>
  <div id="app">
    <div class="Accordion">
      <accordion-item style="Accordion__item--small">
          <div slot="title">Hello</div>
          <div slot="icon">v</div>
          <div slot="content">
            <p>I like swagger</p>
          </div>
      </accordion-item>

      <accordion-item>
          <div slot="title">Hello</div>
          <div slot="icon">x</div>
          <div slot="content">
            <p>I like swagger</p>
          </div>
      </accordion-item>
    </div>
  </div>
</template>

<script>
import AccordionItem from './components/AccordionItem'

export default {
  components: {
    AccordionItem
  }
}
</script>

<style>


.Accordion {
  width: 500px;
}
</style>

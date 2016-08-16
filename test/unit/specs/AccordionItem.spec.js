import Vue from 'vue'
import AccordionItem from 'src/components/AccordionItem'

describe('AccordionItem.vue', () => {
  it('should render correct headline', () => {
    const vm = new Vue({
      template: `<div>
        <accordion-item>
          <div slot="title">Hello</div>
          <div slot="icon">x</div>
          <div slot="content">
            <p>Content</p>
          </div>
        </accordion-item>
      </div>`,
      components: { AccordionItem }
    }).$mount()
    expect(vm.$el.querySelector('.Accordion__title').textContent).to.contain('Hello')
    expect(vm.$el.querySelector('.Accordion__content').textContent).to.contain('Content')
  })

  it('should be closed by default', () => {
    const vm = new Vue({
      template: `<div>
        <accordion-item>
          <div slot="title">Hello</div>
          <div slot="icon">x</div>
          <div slot="content">
            <p>Content</p>
          </div>
        </accordion-item>
      </div>`,
      components: { AccordionItem }
    }).$mount()
    expect(vm.$children[0].$data.isOpen).to.equal(false)
  })

  it('should open on click', (done) => {
    const vm = new Vue({
      template: `<div>
        <accordion-item>
          <div slot="title">Hello</div>
          <div slot="icon">x</div>
          <div slot="content">
            <p>Content</p>
          </div>
        </accordion-item>
      </div>`,
      components: { AccordionItem }
    }).$mount()
    expect(vm.$children[0].$data.isOpen).to.equal(false)

    // vm.$children[0].$data.isOpen = true
    vm.$children[0].$el.childNodes[1].click()

    vm.$nextTick(() => {
      expect(vm.$children[0].$data.isOpen).to.equal(true)
      done()
    })
  })

  it('should close on click', (done) => {
    const vm = new Vue({
      template: `<div>
        <accordion-item>
          <div slot="title">Hello</div>
          <div slot="icon">x</div>
          <div slot="content">
            <p>Content</p>
          </div>
        </accordion-item>
      </div>`,
      components: { AccordionItem }
    }).$mount()
    vm.$children[0].$data.isOpen = true
    expect(vm.$children[0].$data.isOpen).to.equal(true)

    vm.$children[0].$el.childNodes[1].click()

    vm.$nextTick(() => {
      expect(vm.$children[0].$data.isOpen).to.equal(false)
      done()
    })
  })
})

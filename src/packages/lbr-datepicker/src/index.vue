<template>
  <div von-datepicker class="item item-borderless item-input" @click="showPicker()">
    <span v-if="label != ''" class="input-label" v-text="label"></span>
    <input ref="datetime" type="datetime" :value="v">

    <span v-text="formatedDate"></span>

    <div class="hairline-top"></div>
    <div class="hairline-bottom"></div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Picker from './Picker.vue'
  import channel from './channel'

  const formatDate = (value, format) => {
    switch(format) {
      case 'yyyy/mm/dd':
        return value.split('-').join('/')
        break
      default:
        return value
    }
  }

  export default {
    name:'lbr-date-picker',
    props: {
      label: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      dateFormat: {
        type: String,
        default: 'yyyy-mm-dd',
        validator: function (value) {
          return ['yyyy-mm-dd', 'yyyy/mm/dd'].indexOf(value) > -1
        }
      }
    },

    computed: {
      v: function () {
        return this.value
      }
    },

    data() {
      return {
        picker: undefined, // picker vm
        formatedDate: '',
      }
    },

    mounted() {
      this.formatedDate = formatDate(this.value, this.dateFormat)
    },

    methods: {
      showPicker() {
        let el = document.createElement('div')
        el.setAttribute('von-picker', '')
        document.body.appendChild(el)

        let PickerComponent = Vue.extend(Picker)
        this.picker = new PickerComponent({
          data: {
            value: this.v
          }
        }).$mount('[von-picker]')

        channel.$on('PickerOkEvent', (value) => {
          this.v = value
          console.log('datetime input =>', this.$refs.datetime)
          this.$refs.datetime.value = value
          this.$emit('input', value)

          this.formatedDate = formatDate(value, this.dateFormat)
          if (this.picker)
            this.picker.hide()

          channel.$off('PickerOkEvent')
        })

        this.picker.show()
      }
    }
  }
</script>
<style lang="scss">
.von-datepicker, [von-picker] {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 0;
    background-color: #f5f5f5;
    z-index: 12;
    box-sizing: border-box;
    transition: transform .2s ease-in-out;
    -webkit-transition: -webkit-transform .2s ease-in-out;
    transform: translateY(100%);
    -webkit-transform: translateY(100%);
}
.von-datepicker.active, [von-picker].active {
    transform: translate(0);
    -webkit-transform: translate(0);
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    transition: transform .3s cubic-bezier(.4,0,0,1);
    -webkit-transition: -webkit-transform .3s cubic-bezier(.4,0,0,1);
}
.von-datepicker .dp-header, [von-picker] .dp-header {
    height: 45px;
    padding: 0;
    background: #fff;
    z-index: 2;
    position: relative;
    box-shadow: 0 0 5px rgba(0,0,0,.1);
}
.button.button-stable.button-clear, .button.button-stable.button-icon {
    border-color: transparent;
    background: none;
}
.button.button-stable.button-clear {
    box-shadow: none;
    color: #b2b2b2;
}
.button-clear.button-clear {
    color: transparent;
}
.button-clear, .button-clear.button-clear {
    border-color: transparent;
    background: none;
    box-shadow: none;
}
.button.button-stable {
    border-color: transparent;
    background-color: #f5f5f5;
    color: #444;
}
.von-datepicker .dp-body, [von-picker] .dp-body {
    height: 238px;
    padding: 0;
    position: relative;
    z-index: 1;
}
.von-datepicker .dp-body .dp-list.dp-months, [von-picker] .dp-body .dp-list.dp-months {
    left: 34%;
}
.von-datepicker .dp-body .dp-list.dp-dates, [von-picker] .dp-body .dp-list.dp-dates {
    left: 67%;
}
.von-datepicker .dp-body .dp-list .dp-item, [von-picker] .dp-body .dp-list .dp-item {
    height: 34px;
    font-size: 16px;
    line-height: 16px;
    padding: 9px 0;
    text-align: center;
    opacity: .2;
}
</style>

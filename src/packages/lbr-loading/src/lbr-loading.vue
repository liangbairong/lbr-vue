<template>
  <transition name="fade">
    <div
      class="loading-container"
      :class="{'visible': state == 1, 'visible active': state == 2}"
      v-if="show"
    >
      <div class="loading">
        <div>
          <div class="spinner spinner-ios">
            <svg viewBox="0 0 64 64">
              <g stroke-width="4" stroke-linecap="round">
                <line y1="17" y2="29" transform="translate(32,32) rotate(180)">
                  <animate
                    attributeName="stroke-opacity"
                    dur="750ms"
                    values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1"
                    repeatCount="indefinite"
                  />
                </line>
                <line y1="17" y2="29" transform="translate(32,32) rotate(210)">
                  <animate
                    attributeName="stroke-opacity"
                    dur="750ms"
                    values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0"
                    repeatCount="indefinite"
                  />
                </line>
                <line y1="17" y2="29" transform="translate(32,32) rotate(240)">
                  <animate
                    attributeName="stroke-opacity"
                    dur="750ms"
                    values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1"
                    repeatCount="indefinite"
                  />
                </line>
                <line y1="17" y2="29" transform="translate(32,32) rotate(270)">
                  <animate
                    attributeName="stroke-opacity"
                    dur="750ms"
                    values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15"
                    repeatCount="indefinite"
                  />
                </line>
                <line y1="17" y2="29" transform="translate(32,32) rotate(300)">
                  <animate
                    attributeName="stroke-opacity"
                    dur="750ms"
                    values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25"
                    repeatCount="indefinite"
                  />
                </line>
                <line y1="17" y2="29" transform="translate(32,32) rotate(330)">
                  <animate
                    attributeName="stroke-opacity"
                    dur="750ms"
                    values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35"
                    repeatCount="indefinite"
                  />
                </line>
                <line y1="17" y2="29" transform="translate(32,32) rotate(0)">
                  <animate
                    attributeName="stroke-opacity"
                    dur="750ms"
                    values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45"
                    repeatCount="indefinite"
                  />
                </line>
                <line y1="17" y2="29" transform="translate(32,32) rotate(30)">
                  <animate
                    attributeName="stroke-opacity"
                    dur="750ms"
                    values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55"
                    repeatCount="indefinite"
                  />
                </line>
                <line y1="17" y2="29" transform="translate(32,32) rotate(60)">
                  <animate
                    attributeName="stroke-opacity"
                    dur="750ms"
                    values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65"
                    repeatCount="indefinite"
                  />
                </line>
                <line y1="17" y2="29" transform="translate(32,32) rotate(90)">
                  <animate
                    attributeName="stroke-opacity"
                    dur="750ms"
                    values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7"
                    repeatCount="indefinite"
                  />
                </line>
                <line y1="17" y2="29" transform="translate(32,32) rotate(120)">
                  <animate
                    attributeName="stroke-opacity"
                    dur="750ms"
                    values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85"
                    repeatCount="indefinite"
                  />
                </line>
                <line y1="17" y2="29" transform="translate(32,32) rotate(150)">
                  <animate
                    attributeName="stroke-opacity"
                    dur="750ms"
                    values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1"
                    repeatCount="indefinite"
                  />
                </line>
              </g>
            </svg>
          </div>
          <div v-if="title" class="tips" v-html="title"></div>
        </div>
      </div>
    </div>
 </transition>
</template>
<script>
const removeElement = marker => {
  let el =
    document.querySelector(marker) || document.querySelector(`[${marker}]`);
  if (el) document.body.removeChild(el);
};
function preventDefault(e) {
  e.preventDefault();
}

export default {
  name: "lbrLoading",
  data() {
    return {
      state: 0,
    };
  },
   props: {
    title: {
      type: String,
      default: "加载中"
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  destroyed() {
    removeElement("von-loading");
  },

  methods: {
    // show(options) {
    //   this.tips = options.tips;
    //   this.showSpinner = !!options.showSpinner;

    //   this.state = 1;
    //   setTimeout(() => {
    //     this.state = 2;
    //   });

    //   document.body.addEventListener("touchmove", preventDefault);
    // },

    hide() {
      this.state = 1;
      setTimeout(() => {
        this.state = 0;
        setTimeout(() => {
          this.$destroy();
        });
      }, 300);

      document.body.removeEventListener("touchmove", preventDefault);
    },

    update(options) {
      this.tips = options.tips;
      this.showSpinner = !!options.showSpinner;
    },

    getState() {
      return this.state;
    }
  }
};
</script>
<style lang="scss" scoped>

.loading-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 99999;

  .loading {
    padding: 40px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    width: 120px;
    height: 120px;
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spinner svg {
    width: 48px;
    height: 48px;
    stroke: #fff;
    fill: #fff;
  }

  .tips {
    font-size: 24px;
    line-height: 24px;
    margin-top: 10px;
  }
}
</style>
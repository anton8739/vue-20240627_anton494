import {computed, defineComponent, ref, watch} from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    let x = ref(0)
    let y = ref(0)

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      x.value = event.offsetX
      y.value = event.offsetY
    }

    const style = computed( () => {
      return {
        left: `${x.value}px`,
        top: `${y.value}px`
      }
    })

    return {
      style,
      handleClick,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span :style="style" class="pin">📍</span>
    </div>
  `,
})

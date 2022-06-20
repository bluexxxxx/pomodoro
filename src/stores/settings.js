import { defineStore } from 'pinia'

// defineStore跟下面id state是固定的寫法
export const useSettingsStore = defineStore({
  // 定義一個保存資料的id
  id: 'settings',
  state () {
    return {
      selectedAlarm: 1,
      alarms: [
        { id: 1, name: 'Alarm', file: new URL('../assets/alarm.mp3', import.meta.url).href },
        { id: 2, name: 'Yay', file: new URL('../assets/yay.mp3', import.meta.url).href }
      ]
    }
  },
  getters: {
    selectedAlarmFile () {
      const idx = this.alarms.findIndex(a => a.id === this.selectedAlarm)
      return this.alarms[idx].file
    }
  },
  persist: {
    key: 'pomodoro-settings',
    paths: ['selectedAlarm'],
    }
})

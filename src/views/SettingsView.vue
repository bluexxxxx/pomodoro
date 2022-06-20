<template lang="pug">
v-row#settings
  v-col(cols="12")
    h1.text-center 設定
  v-col(cols="12")
    v-table
      thead
        tr
          th 名稱
          th 試聽
          th 選擇
      tbody
        tr(v-for="alarm in alarms")
          td {{ alarm.name }}
          td
            audio(controls :src="alarm.file")
          td
            //-如果沒解構就(26行跟30行不打)就變成v-model="settings.selectedAlarm"
            v-radio(v-model="selectedAlarm" :value="alarm.id")
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
// 配合storeToRefs讓他做響應式更新
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
// 把它解構出來用
const { selectedAlarm, alarms } = storeToRefs(settings)
</script>

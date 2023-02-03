<template>
  <AtomButton></AtomButton>
</template>

<script lang="ts" setup>
import './button.css';
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  /**
   * The label of the button
   */
  label: string,
  /**
   * primary or secondary button
   */
  primary?: boolean,
  /**
   * size of the button
   */
  size?: 'small' | 'medium' | 'large',
  /**
   * background color of the button
   */
  backgroundColor?: string,

}>(), { primary: false });




</script>
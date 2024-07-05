<template>
  <div class="w-[30vw] mx-auto text-2xl">
    <div class="grid grid-cols-2 justify-items-center gap-8">
      <div :class="{ 'opacity-20': $clicks === 0 || !pure, 'scale-[1.7] transition': $clicks > 0 && pure }">
        ✅ Pure
      </div>
      <div>
        <div :class="{ 'opacity-20': $clicks === 0 || pure, 'scale-[1.7] transition': $clicks > 0 && !pure }">
          ❌ Impure
        </div>
        <div v-if="impact" class="mt-6">
          <span :class="{ 'opacity-20 transition': $clicks <= 1 || pure }" class="text-lg">Impact:</span>
          <span
            :class="{
              'opacity-20': $clicks <= 1 || pure || !mildImpact,
              'scale-[1.7] transition': $clicks > 1 && !pure && mildImpact,
            }"
            class="inline-block ml-3"
            title="Mild impact"
          >
            😌
          </span>
          <span
            :class="{
              'opacity-20': $clicks <= 1 || pure || mildImpact,
              'scale-[1.7] transition': $clicks > 1 && !pure && !mildImpact,
            }"
            class="inline-block ml-3"
            title="Severe impact"
          >
            😱
          </span>
        </div>
      </div>
    </div>
  </div>
  <div v-click></div>
  <div v-if="impact" v-click></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface PureOrNotProps {
  answer: 'pure' | 'impure';
  impact?: 'mild' | 'severe';
}

const props = defineProps<PureOrNotProps>();
const pure = computed(() => props.answer === 'pure');
const mildImpact = computed(() => props.impact === 'mild');
</script>

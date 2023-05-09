<template>
  <div>
    <NavAppVue></NavAppVue>
    <SearchSection></SearchSection>
    <AngeboteSection></AngeboteSection>
    <ListSection></ListSection>
    <ElecSection></ElecSection>
    <FooterApp></FooterApp>
  </div>
</template>
<script setup>
import NavAppVue from '@/components/NavApp.vue';
import FooterApp from "@/components/FooterApp.vue"
import SearchSection from "@/components/SearchSection.vue"
import ListSection from '@/components/ListSection.vue';
import ElecSection from "@/components/ElecSection.vue"
import AngeboteSection from '@/components/AngeboteSection.vue';
</script>
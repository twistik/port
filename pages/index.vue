<script setup lang="ts">
import { HomeAbout } from '#build/components';

</script>

<template>
    <NuxtLayout>
        <HomeHeader />
        <HomeAbout/>
        <HomeSkills/>
        <HomeExperience/>
        <HomeProjects/>
        <HomeContact/>
        <HomeFooter/>
    </NuxtLayout>
</template>
<template>
    <section class="section-about indent">
        <the-cart
            :cartClass="['about']"
            :imgWrapperClass="['about__img-wrapper']"
            :imgClass="['about__img']"
            :srcMobile="content.img.mobile"
            :srcTablet="content.img.tablet"
            :srcDesktop="content.img.desktop"
            alt="man listening to music"
        >
            <div class="about__content">
                <h2 class="about__heading">
                    bringing you the <b>best</b> audio gear
                </h2>
                <p class="about__text">{{ content.text }}</p>
            </div>
        </the-cart>
    </section>
</template>

<script setup lang="ts">
import TheCart from '@/components/Shared/TheCart.vue';
import {computed} from 'vue';
import {dataStore} from '@/main';
const content = computed(() => dataStore.GET_ABOUT);
</script>

<style scoped>
.section-about {
    padding-top: 8rem;
    text-align: center;
    background: var(--white);
    position: relative;
}

.section-about::after {
    position: absolute;
    content: '';
    bottom: -0.4rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--orange);
    height: 0.4rem;
    width: 11rem;
}
.about__heading {
    margin: 3rem 0;
    padding-inline: 2rem;
    letter-spacing: 0.15rem;
    margin-bottom: 3rem;
    font-size: 2.7rem;
    font-weight: 700;
    color: var(--light-black);
    text-transform: uppercase;
}
.about__heading b {
    color: var(--orange);
    font-weight: 700;
}

.about__text {
    margin-inline: auto;
    padding-bottom: 6rem;
    color: var(--gray);
    font-size: 1.5rem;
    line-height: 1.6;
    font-weight: 500;
    /* max-width: 43rem; */
}

@media only screen and (min-width: 768px) {
    .about__content {
        margin-inline: auto;
        max-width: 67rem;
    }
    .about__heading {
        margin-inline: auto;
        padding-inline: 4rem;
        font-size: 4.2rem;
        line-height: 1.1;
        max-width: 74rem;
    }
    .about__text {
        padding-inline: 4rem;
    }
    .section-about::after {
        left: 10rem;
    }
}
@media only screen and (min-width: 1025px) {
    .section-about {
        padding-bottom: 8rem;
        text-align: left;
    }
    .about__content {
        margin-inline: auto;
        max-width: 80%;
    }
    .about__heading {
        margin-inline: auto;
        padding-inline: 0;
    }
    .about__text {
        padding-inline: 0;
        padding: 0;
        margin: 0;
    }
    .section-about::after {
        left: 15rem;
    }
}
</style>

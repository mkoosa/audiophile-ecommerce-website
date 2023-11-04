<template>
    <div class="hero">
        <div class="hero__content">
            <h2 class="hero__header">{{ text.header }}</h2>
            <div class="hero__paragraphs">
                <p class="hero__paragraph-first-line">{{ text.firstLine }}</p>
                <p class="hero__paragraph-second-line">{{ text.secondLine }}</p>
            </div>
            <p class="hero__description">{{ text.description }}</p>
            <action-btn :text="btnText" :class="['hero__btn']" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ActionBtn from '@/components/Shared/ActionBtn.vue';
import {ref} from 'vue';

const textListing = {
    header: 'New product',
    firstLine: 'XX99 Mark II',
    secondLine: 'Headphones',
    description:
        'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
};

const text = ref(textListing);
const btnText = ref('see product');
</script>

<style scoped>
.hero {
    margin-top: 8rem;
    margin-inline: auto;
    text-align: center;
    background-image: url(../../assets/home/mobile/image-header.jpg);
    background-size: cover;
    max-width: 40rem;
    min-height: 50rem;
    background-position-x: center;
    background-position-y: -10rem;
    background-repeat: no-repeat;
}

.hero__content {
    top: 9rem;
    position: relative;
}
.hero__header {
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.8rem;
}

.hero__paragraphs {
    text-transform: uppercase;
    margin: 2rem 0;
}
.hero__paragraph-first-line,
.hero__paragraph-second-line {
    color: var(--white);
    font-size: 3.8rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    line-height: 1;
}

.hero__description {
    padding: 0 4rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.5rem;
    line-height: 2.1;
}

@media only screen and (min-width: 769px) {
    .hero {
        background-image: url(../../assets/home/tablet/image-header.jpg);
        min-width: 80%;
        max-width: 83rem;
        min-height: 75rem;
        background-position-y: -8rem;
    }
    .hero__content {
        top: 14rem;
    }

    .hero__paragraphs {
        text-transform: uppercase;
        margin: 2.5rem 0;
    }
    .hero__paragraph-first-line,
    .hero__paragraph-second-line {
        color: var(--white);
        font-size: 4.5rem;
        font-weight: 700;
        letter-spacing: 0.3rem;
    }

    .hero__description {
        margin: 0 auto;
        width: 55%;
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.5rem;
        letter-spacing: 0.05rem;
        line-height: 1.9;
    }
}
@media only screen and (min-width: 1025px) {
    .hero {
        padding-inline: 6rem;
        min-width: 100%;
        margin-top: 2rem;
        text-align: left;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(../../assets/home/desktop/image-hero.jpg);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        background-position-y: -2rem;
        background-position-x: 8rem;
        min-height: 55rem;
    }

    .hero__paragraph-first-line,
    .hero__paragraph-second-line {
        color: var(--white);
        font-size: 4vw;
        font-weight: 700;
        letter-spacing: 0.3rem;
    }
    .hero__content {
        top: 5rem;
    }

    .hero__description {
        margin: 0;
        padding: 0;
        width: 50%;
    }
}
@media only screen and (min-width: 1201px) {
    .hero {
        padding-inline: 12rem;
        min-height: 65rem;
    }
}
@media only screen and (min-width: 1401px) {
    .hero__paragraph-first-line,
    .hero__paragraph-second-line {
        font-size: 5.5rem;
    }
}
</style>

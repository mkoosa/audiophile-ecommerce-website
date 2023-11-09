<template>
    <div class="hero">
        <div class="hero__body indent">
            <h2 class="hero__header">{{ text.header }}</h2>
            <div class="hero__headings">
                <p class="hero__heading">{{ text.firstLine }}</p>
                <p class="hero__heading">{{ text.secondLine }}</p>
            </div>
            <p class="hero__description">{{ text.description }}</p>
            <action-btn
                text="see product"
                :class="['hero__btn main-btn main-btn--orange']"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import ActionBtn from '@/components/Shared/MainButton.vue';
import {ref} from 'vue';

const textListing = {
    header: 'New product',
    firstLine: 'XX99 Mark II',
    secondLine: 'Headphones',
    description:
        'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
};

const text = ref(textListing);
</script>

<style scoped>
.hero {
    background-color: var(--light-black);
    margin-top: 6rem;
    margin-inline: auto;
    text-align: center;
    background-image: url(../../assets/home/mobile/image-header.jpg);
    background-size: cover;
    background-size: 33rem;
    min-height: 50rem;
    background-position-x: center;
    background-position-y: -6rem;
    background-repeat: no-repeat;
}

.hero__body {
    padding-top: 9rem;
    position: relative;
}
.hero__header {
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.8rem;
}

.hero__headings {
    text-transform: uppercase;
    margin: 2rem 0;
}
.hero__heading {
    color: var(--white);
    font-size: 3.8rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    line-height: 1;
}

.hero__description {
    margin-inline: auto;
    max-width: 38rem;
    padding: 0 4rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.5rem;
    line-height: 2.1;
}

.main-btn--orange {
    margin: 2.5rem;
    background: var(--orange);
    color: var(--white);
}

@media only screen and (min-width: 769px) {
    .hero {
        background-image: url(../../assets/home/tablet/image-header.jpg);
        background-size: 70rem;
        min-height: 70rem;
        background-position-y: 0;
    }
    .hero__body {
        padding-top: 16rem;
    }

    .hero__headings {
        text-transform: uppercase;
        margin: 2.5rem 0;
    }

    .hero__heading {
        color: var(--white);
        font-size: 4.5rem;
        font-weight: 700;
        letter-spacing: 0.3rem;
    }

    .hero__description {
        margin: 0 auto;
        width: 55%;
        max-width: 47rem;
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.5rem;
        letter-spacing: 0.05rem;
        line-height: 1.9;
    }
    .main-btn--orange {
        margin-top: 6rem;
    }
}
@media only screen and (min-width: 1025px) {
    .hero {
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
        background-position-x: calc(100%-24rem);
        min-height: 65rem;
    }

    .hero__heading {
        color: var(--white);
        font-size: 4vw;
        font-weight: 700;
        letter-spacing: 0.3rem;
    }
    .hero__body {
        padding-top: 0;
    }

    .hero__description {
        margin: 0;
        padding: 0;
        width: 70%;
    }
    .main-btn--orange {
        margin-left: 0;
    }
}
@media only screen and (min-width: 1201px) {
    .hero {
        min-height: 70rem;
    }
    .hero__description {
        margin: 0;
        padding: 0;
        width: 90%;
    }
}
@media only screen and (min-width: 1401px) {
    .hero__heading {
        font-size: 5.5rem;
    }
}
</style>

<template>
    <div class="hero">
        <div class="hero__body indent">
            <p class="hero__header">{{ text.header }}</p>
            <h2 class="hero__heading">{{ text.heading }}</h2>
            <p class="hero__description">{{ text.description }}</p>
            <action-btn
                @click="openProductPage(text.heading, productsStore, router)"
                text="see product"
                :class="['hero__btn main-btn main-btn--orange']"
            ></action-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import ActionBtn from '@/components/Shared/MainButton.vue';
import {ref} from 'vue';
import {openProductPage} from '@/api/getData';
import {useProductsStore} from '@/stores/products';
import {useRouter} from 'vue-router';

const router = useRouter();
const productsStore = useProductsStore();

const textListing = {
    header: 'New product',
    heading: 'XX99 Mark II Headphones',

    description:
        'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
};
const text = ref(textListing);
</script>

<style scoped>
.hero {
    padding: 1rem 0;
    background-color: var(--light-black);
    margin-top: 6rem;
    margin-inline: auto;
    text-align: center;
    background-image: url(../../assets/home/mobile/image-header.jpg);
    background-size: cover;
    background-size: 33rem;
    background-position-x: center;
    background-position-y: -11rem;
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

.hero__heading {
    text-transform: uppercase;
    margin: 2rem auto;
    width: min-content;
    color: var(--white);
    font-size: 3.8rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    line-height: 1.2;
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
    margin: 3rem 0;
    background: var(--orange);
    color: var(--white);
}

@media only screen and (min-width: 769px) {
    .hero {
        background-image: url(../../assets/home/tablet/image-header.jpg);
        background-size: 81rem;
        min-height: 70rem;
        background-position-y: -9rem;
    }
    .hero__body {
        padding-top: 16rem;
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
        margin-top: 4rem;
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
        background-position-y: -6rem;
        min-height: 60rem;
    }

    .hero__heading {
        color: var(--white);
        font-size: 4vw;
        font-weight: 700;
        letter-spacing: 0.3rem;
        margin: 2rem 0;
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
        min-height: 64rem;
    }
    .hero__description {
        margin: 0;
        padding: 0;
        width: 90%;
    }
}
@media only screen and (min-width: 1401px) {
    .hero {
        background-position-y: -10rem;
        min-height: 64rem;
    }
    .hero__heading {
        font-size: 5.5rem;
    }
}
</style>

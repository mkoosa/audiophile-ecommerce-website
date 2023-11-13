<template>
    <section class="category">
        <ul class="category__list indent">
            <li
                v-for="value in values"
                :key:string="value"
                class="category__list-item"
            >
                <div
                    class="category__img-container"
                    :class="imgContainerClass(value.category)"
                >
                    <img
                        class="category__img"
                        :src="value.img"
                        :alt="value.category"
                    />
                </div>
                <div
                    class="category__contents contents"
                    :class="contentsContainerClass(value.category)"
                >
                    <h2 class="contents__header">{{ value.category }}</h2>
                    <div class="contents__body body">
                        <p class="body__text">shop</p>
                        <font-awesome-icon
                            class="body__icon"
                            :icon="['fas', 'angle-right']"
                        />
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script lang="ts" setup>
import {dataStore} from '@/main';
import {computed} from 'vue';

const values = computed(() => dataStore.GET_CARTS);
const imgContainerClass = (value: string) => value;
const contentsContainerClass = (value: string) => value;
</script>

<style scoped>
.category__list {
    padding: 2rem 2rem;
}
.category__list-item {
    text-align: center;
    background: var(--middle-grey);
    margin: 7rem auto 0 auto;
    position: relative;
    height: 17.5rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 50rem;
}
.category__img-container {
    width: 15rem;
    position: absolute;
    top: -5rem;
    left: 50%;
    transform: translate(-50%);
}
.category__img-container.earphones {
    width: 18rem;
}
.contents {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 9rem;
}
.contents.speakers {
    top: 9rem;
}
.contents.earphones {
    top: 8.5rem;
}
.contents__header {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 700;
    font-size: 1.4rem;
}
.body {
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    display: flex;
}
.body__text {
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 800;
    font-size: 1.3rem;
}
.body__icon {
    margin-left: 1rem;
    font-size: 1.4rem;
    color: var(--orange);
}

@media only screen and (min-width: 769px) {
    .category__list {
        padding: 6rem 2rem 3rem 2rem;
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
    }
    .category__list-item {
        height: 18.5rem;
    }
    .contents__header {
        font-size: 1.5rem;
    }
    .category__list-item + .category__list-item {
        margin-left: 1rem;
    }
    .category__img-container.earphones {
        width: 19rem;
    }
    .contents.speakers,
    .contents.headphones,
    .contents.earphones {
        top: 10rem;
    }

    .category__img-container {
        width: 17rem;
    }
    .category__img-container.earphones {
        width: 18rem;
    }
}

@media only screen and (min-width: 1025px) {
    .category__list-item {
        height: 18.5rem;
    }
    .contents__header {
        font-size: 1.7rem;
    }
    .category__list-item + .category__list-item {
        margin-left: 1.5rem;
    }
    .category__img-container {
        width: 17.5rem;
    }
}
@media only screen and (min-width: 1201px) {
    .category__list-item {
        height: 20.5rem;
    }
    .category__list-item + .category__list-item {
        margin-left: 2.5rem;
    }
    .category__img-container {
        width: 20rem;
        top: -8rem;
    }
    .category__img-container.earphones {
        width: 20rem;
        top: -6.5rem;
    }
}
@media only screen and (min-width: 1401px) {
    .category__list-item + .category__list-item {
        margin-left: 3rem;
    }
}
</style>

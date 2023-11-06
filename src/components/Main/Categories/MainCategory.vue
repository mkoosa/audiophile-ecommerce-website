<template>
    <div v-for="value in values" :key:string="value" class="category">
        <div class="img-container" :class="imgContainerClass(value.category)">
            <img class="category__img" :src="value.img" alt="" />
        </div>
        <div
            class="contents-container"
            :class="contentsContainerClass(value.category)"
        >
            <h2 class="category__header">{{ value.category }}</h2>
            <div class="content-container">
                <p class="category__paragraph">shop</p>
                <font-awesome-icon
                    class="right-icon"
                    :icon="['fas', 'angle-right']"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {useDataStore} from '@/stores/data';
import {computed} from 'vue';

const dataStore = useDataStore();
const values = computed(() => dataStore.GET_CARTS);
const imgContainerClass = (value: string) => value;
const contentsContainerClass = (value: string) => value;
</script>

<style scoped>
.category {
    /* margin: 0 auto; */
    text-align: center;
    background: var(--middle-grey);
    margin: 7rem auto 0 auto;
    position: relative;
    height: 17.5rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 38rem;
}
.img-container {
    width: 15rem;
    position: absolute;
    top: -5rem;
    left: 50%;
    transform: translate(-50%);
}

.img-container.earphones {
    width: 18rem;
}
.contents-container {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 10rem;
}
.contents-container.speakers {
    top: 9rem;
}
.contents-container.earphones {
    top: 8.5rem;
}
.category__header {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 700;
}

.content-container {
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    display: flex;
}
.category__paragraph {
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 800;
    font-size: 1.3rem;
}

.right-icon {
    margin-left: 1rem;
    font-size: 1.4rem;
    color: var(--orange);
}

@media only screen and (min-width: 769px) {
    .category {
        height: 18.5rem;
    }
    .category + .category {
        margin-left: 1rem;
    }
    .contents-container.speakers {
        top: 10rem;
    }
    .contents-container.earphones {
        top: 10rem;
    }

    .img-container {
        width: 17rem;
    }
    .img-container.earphones {
        width: 18rem;
    }
}

@media only screen and (min-width: 1025px) {
    .category {
        height: 18.5rem;
    }
    .category + .category {
        margin-left: 1.5rem;
    }

    .img-container {
        width: 17.5rem;
    }
    .img-container.earphones {
        width: 18.5rem;
    }
}
@media only screen and (min-width: 1201px) {
    .category {
        height: 20.5rem;
    }
    .category + .category {
        margin-left: 2.5rem;
    }

    .img-container {
        width: 18rem;
    }
    .img-container.earphones {
        width: 19rem;
    }
}
@media only screen and (min-width: 1401px) {
    .category + .category {
        margin-left: 3rem;
    }
}
</style>

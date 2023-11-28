<template>
    <ul v-if="element == 'header'" :class="navListClass">
        <li
            @click="closeMobileNav()"
            v-for="item in listItems"
            :class="navListItemClass"
        >
            <router-link :to="{path: item.url}">
                {{ item.text }}
            </router-link>
        </li>
    </ul>
    <ul v-if="element == 'footer'" :class="navListClass">
        <li v-for="item in listItems" :class="navListItemClass">
            <router-link :to="{path: item.url}">
                {{ item.text }}
            </router-link>
        </li>
    </ul>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import {useNavStore} from '@/stores/nav';

const navStore = useNavStore();
const closeMobileNav = () => {
    //only for mobile screens
    if (window.screen.width < 768) navStore.toggleNavMobile();
};

const listItems = ref([
    {text: 'home', url: '/'},
    {text: 'headphones', url: '/headphones'},
    {text: 'speakers', url: '/speakers'},
    {text: 'earphones', url: '/earphones'},
]);

defineProps({
    element: {
        type: String,
        required: true,
    },
    navListClass: {
        type: Array,
        required: true,
    },
    navListItemClass: {
        type: Array,
        required: true,
    },
});
</script>

<style scoped>
.navigation__list {
    text-align: center;
    padding: 2.2rem 0 3rem 0;
}
a {
    color: var(--white);
}

.navigation__list-item {
    margin-bottom: 3rem;
    color: var(--white);
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
}

.header .navigation__list-item a {
    font-weight: 500;
    color: var(--orange);
}
.footer .navigation__list-item a {
    font-weight: 400;
    font-size: 1.65rem;
}
.mobile .navigation__list--header {
    height: 100vh;
}
.navigation__list--header {
    padding-top: 10rem;
}

.navigation__list-item--header {
    font-size: 2.1rem;
}

.navigation__list--footer {
    margin-bottom: 0;
    padding-bottom: 0;
}
.navigation__list-item--footer {
    margin-bottom: 0;
    margin-bottom: 2.3rem;
    font-size: 1.4rem;
    letter-spacing: 0.25rem;
}

.navigation__list-item--footer + .navigation__list-item--footer {
    margin-top: 2.3rem;
}

@media only screen and (min-width: 768px) {
    a {
        font-weight: 600;
    }
    .navigation__list-item--header .active-link {
        color: var(--orange);
        border-bottom: 0.2rem solid var(--orange);
    }
    .navigation__list {
        margin-inline: auto;
        margin-bottom: 0;
        width: 56%;
        padding: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .navigation__list--header {
        padding-top: 0;
        height: 100%;
    }
    .navigation__list--footer {
        justify-content: start;
        width: 70%;
        margin: 0;
    }
    .navigation__list-item {
        position: relative;
        margin-bottom: 0;
        text-align: center;
        font-size: 1.4rem;
        cursor: pointer;
        transition: color 0.2s;
        font-weight: 600;
        letter-spacing: 0.2rem;
    }
    .navigation__list-item--header {
        font-size: 1.4rem;
    }
    .navigation__list-item--footer {
        font-size: 1.3rem;
        letter-spacing: 0.2rem;
    }
    .navigation__list-item + .navigation__list-item {
        margin-left: 1.5rem;
    }
    .navigation__list-item--footer + .navigation__list-item--footer {
        margin-top: 0;
        margin-left: 3.5rem;
    }

    .navigation__list-item:hover a {
        color: var(--orange);
        transition: color 0.2s;
    }
}

@media only screen and (min-width: 768px) {
    .mobile .navigation__list--header {
        height: auto;
    }
}

@media only screen and (min-width: 1025px) {
    a {
        font-weight: 600;
    }
    .navigation__list {
        width: 47%;
    }
    .navigation__list--footer {
        justify-content: end;
        width: 100%;
        height: 100%;
        margin: 0;
    }
    .navigation__list-item a + .navigation__list-item a {
        margin-left: 1.4rem;
    }
}
</style>

<template>
    <ul :class="navListClass">
        <li v-for="item in listItems" :class="navListItemClass">
            {{ item }}
        </li>
    </ul>
</template>
<script lang="ts" setup>
const listItems = ['home', 'headphones', 'speakers', 'earphones'];

defineProps({
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
.navigation__list-item {
    margin-bottom: 3rem;
    color: var(--white);
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
}
.navigation__list-item--header {
    font-size: 2.1rem;
    letter-spacing: 0.2rem;
}
.navigation__list--header {
    height: 100vh;
    padding-top: 10rem;
}

@media only screen and (min-width: 840px) {
    .navigation__list {
        margin-inline: auto;
        margin-bottom: 0;
        width: 70%;
        padding: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .navigation__list--header {
        height: auto;
        padding-top: 0;
    }
    .navigation__list-item--header {
        font-size: 1.6rem;
        letter-spacing: initial;
    }
    .navigation__list-item {
        margin-bottom: 0;
        text-align: center;
        font-size: 1.4rem;
        cursor: pointer;
        transition: color 0.2s;
        font-weight: 600;
        letter-spacing: 0.2rem;
    }
    .navigation__list-item + .navigation__list-item {
        margin-left: 1.5rem;
    }

    .navigation__list-item:hover {
        color: var(--orange);
        transition: color 0.2s;
    }
}

@media only screen and (min-width: 1025px) {
    .navigation__list {
        width: 60%;
    }
    .navigation__list-item + .navigation__list-item {
        margin-left: 0;
    }
}
@media only screen and (min-width: 1025) {
    .navigation__list {
        width: 60%;
    }
}
</style>

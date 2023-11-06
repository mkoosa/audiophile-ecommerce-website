<template>
    <nav class="mb-3 navigation">
        <MDBNavbar>
            <button
                @click="collapse10 = !collapse10"
                class="navbar-toggler second-button"
                :aria-expanded="collapse10"
                aria-label="Toggle navigation"
                aria-controls="navbarToggleExternalContent10"
            >
                <div class="animated-icon" :class="[collapse10 && 'open']">
                    <span></span><span></span><span></span><span></span>
                </div>
            </button>
            <h1 class="navigation__heading">audiophile</h1>
            <div
                class="navigation__basket-icon navigation__basket-icon--mobile"
            >
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </div>
        </MDBNavbar>
        <MDBCollapse v-model="collapse10" id="navbarToggleExternalContent9">
            <ul class="navigation__list">
                <li v-for="item in listItems" class="navigation__list-item">
                    {{ item }}
                </li>
            </ul>
        </MDBCollapse>
        <div class="navigation__basket-icon navigation__basket-icon--desktop">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        </div>
    </nav>
</template>

<script lang="ts" setup>
import {MDBNavbar, MDBCollapse} from 'mdb-vue-ui-kit';
import {ref} from 'vue';

const listItems = ['home', 'headphones', 'speakers', 'earphones'];
const collapse10 = ref(false);
</script>

<style scoped>
@import 'mdb-vue-ui-kit/css/mdb.min.css';
.navigation {
    top: 0;
    left: 0;
    width: 100%;
    max-width: 140rem;
    position: fixed;
    padding: 1.5rem 2rem;
    margin-bottom: 0 !important;
    background-color: var(--light-black);
    z-index: 100;
}

.navigation::after {
    position: absolute;
    content: '';
    background-color: rgb(89, 88, 88);
    height: 0.1rem;
    bottom: 0;
    transform: translateX(-50%);
    left: 50%;
    width: 100%;
}
.animated-icon {
    width: 2.2rem;
    height: 2rem;
    position: relative;
    margin: 0px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
}
.animated-icon span {
    display: block;
    position: absolute;
    height: 3.2px;
    width: 100%;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
}

.animated-icon span {
    background: #e3f2fd;
}

.animated-icon span:nth-child(1) {
    top: 0px;
}

.animated-icon span:nth-child(2),
.animated-icon span:nth-child(3) {
    top: 8px;
}

.animated-icon span:nth-child(4) {
    top: 16px;
}

.animated-icon.open span:nth-child(1) {
    top: 11px;
    width: 0%;
    left: 50%;
}

.animated-icon.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.animated-icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.animated-icon.open span:nth-child(4) {
    top: 11px;
    width: 0%;
    left: 50%;
}

#navbarToggleExternalContent9 {
    position: absolute;
    background-color: var(--light-black);
    left: 0;
    top: 8.22rem;
    width: 100%;
}

.navbar-toggler {
    padding: 0;
}

.navigation__heading {
    color: var(--white);
    font-weight: 900;
    font-size: 2.7rem;
    margin-right: auto;
    margin-left: 4rem;
}
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

.navigation__basket-icon {
    color: var(--white);
    font-size: 2rem;
}

.navigation__basket-icon--desktop {
    display: none;
}

@media only screen and (min-width: 768px) {
    .navigation {
        left: 50%;
        transform: translate(-50%);
        padding-bottom: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navigation::after {
        width: 95%;
    }

    .navbar-toggler {
        display: none;
    }

    #navbarToggleExternalContent9 {
        display: block !important;
    }
    .navigation__list {
        margin-inline: auto;
        margin-bottom: 0;
        width: 70%;
        padding: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
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

    .navigation__basket-icon--mobile {
        display: none;
    }

    .navigation__basket-icon--desktop {
        display: block;
        margin-left: 2rem;
    }

    #navbarToggleExternalContent9 {
        position: static;
    }
}

@media only screen and (min-width: 1025px) {
    .navigation {
        padding-inline: 6rem;
    }

    .navigation::after {
        width: 90%;
    }

    .navigation__heading {
        margin-left: 0;
    }
    .navigation__list {
        width: 60%;
    }
    .navigation__list-item + .navigation__list-item {
        margin-left: 0;
    }
}
@media only screen and (min-width: 1201px) {
    .navigation {
        padding-inline: 12rem;
    }
    .navigation::after {
        width: 83%;
    }
    .navigation__heading {
        margin-left: 0;
    }
    .navigation__list {
        width: 60%;
    }
}
</style>

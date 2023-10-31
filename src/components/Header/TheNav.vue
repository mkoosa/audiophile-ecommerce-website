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
                <li class="navigation__list-item">home</li>
                <li class="navigation__list-item">headphones</li>
                <li class="navigation__list-item">speakers</li>
                <li class="navigation__list-item">earphones</li>
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

const collapse10 = ref(false);
</script>

<style scoped>
@import 'mdb-vue-ui-kit/css/mdb.min.css';
.navigation {
    padding: 1.5rem 2rem;
    border-bottom: 0.1rem solid rgb(89, 88, 88);
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

.navigation__heading {
    color: var(--white);
    font-weight: 900;
    font-size: 3rem;
}
.navigation__list {
    text-align: center;
    margin-top: 2rem;
}
.navigation__list-item {
    color: var(--white);
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
}

.navigation__list-item {
    padding-bottom: 2rem;
}
.navigation__basket-icon {
    color: var(--white);
    font-size: 2rem;
}

.navigation__basket-icon--desktop {
    display: none;
}

@media only screen and (min-width: 868px) {
    .navigation {
        margin-inline: auto;
        padding-bottom: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        border-bottom: 0.1rem solid var(--white);
    }

    .navbar-toggler {
        display: none;
    }

    #navbarToggleExternalContent9 {
        display: block !important;
    }
    .navigation__list {
        display: flex;
        height: 3rem;
        width: 100%;
        justify-content: space-evenly;
    }

    .navigation__list-item {
        font-size: 1.4rem;
        cursor: pointer;
        transition: color 0.2s;
        font-weight: 600;
        letter-spacing: 0.2rem;
    }
    .navigation__list-item + .navigation__list-item {
        margin-left: 3rem;
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
}
</style>

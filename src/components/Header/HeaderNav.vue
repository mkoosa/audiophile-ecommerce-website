<template>
    <TheDrawer :close="showHideCart" :openDrawer="openDrawer" />
    <nav :class="[mobile ? 'mobile' : '']" class="mb-3 navigation">
        <MDBNavbar>
            <button
                @click="closeOpenMobileNav()"
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
                <font-awesome-icon
                    @click="if (ACTIVE_CART) showHideCart();"
                    :icon="['fas', 'cart-shopping']"
                />
                <cart-badge></cart-badge>
            </div>
        </MDBNavbar>
        <MDBCollapse v-model="collapse10" id="navbarToggleExternalContent9">
            <navigation-list
                element="header"
                :navListClass="['navigation__list', 'navigation__list--header']"
                :navListItemClass="[
                    {bold: navStore.IS_NAV_MOBILE_ACTIVE},
                    'navigation__list-item',
                    'navigation__list-item--header',
                ]"
            ></navigation-list>
        </MDBCollapse>

        <div class="navigation__basket-icon navigation__basket-icon--desktop">
            <font-awesome-icon
                @click="if (ACTIVE_CART) showHideCart();"
                :icon="['fas', 'cart-shopping']"
            />
            <cart-badge></cart-badge>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import NavigationList from '@/components/Shared/NavigationList.vue';
import TheDrawer from '../Shared/TheDrawer.vue';
import {MDBNavbar, MDBCollapse} from 'mdb-vue-ui-kit';
import CartBadge from '@/components/Cart/CartBadge.vue';
import {computed} from 'vue';
import {useNavStore} from '@/stores/nav';
import {useCartStore} from '@/stores/cart';
import {useDrawerStore} from '@/stores/drawer';

const cartStore = useCartStore();
const navStore = useNavStore();
const drawerStore = useDrawerStore();

const showHideCart = () => drawerStore.toggleDrawer();

const ACTIVE_CART = computed(() =>
    cartStore.PRODUCTS_IN_CART.length > 0 ? true : false,
);

let collapse10 = computed(() => navStore.IS_NAV_MOBILE_ACTIVE);
const mobile = computed(() =>
    navStore.IS_NAV_MOBILE_ACTIVE && window.screen.width < 768 ? true : false,
);
const closeOpenMobileNav = () => {
    navStore.toggleNavMobile();
};
const openDrawer = computed(() => drawerStore.OPEN_DRAWER);
</script>

<style scoped>
@import 'mdb-vue-ui-kit/css/mdb.min.css';

.header .navigation {
    height: 8rem;
}
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
    background-color: rgb(72, 72, 72);
    height: 0.1rem;
    bottom: 0;
    transform: translateX(-50%);
    left: 50%;
    width: 100%;
    opacity: 0.6;
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
    top: 7.8rem;
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
.navigation__basket-icon {
    /* padding: 0.5rem 0; */
    color: var(--white);
    font-size: 2rem;
    position: relative;
}
.navigation__basket-icon--mobile .fa-cart-shopping {
    padding: 0.6rem 0;
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
        /* background-color: aquamarine; */
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
    .cart-shopping {
        cursor: pointer;
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
}
</style>

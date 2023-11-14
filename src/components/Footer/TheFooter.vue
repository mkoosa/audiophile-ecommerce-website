import NavigationList from '@/components/Shared/NavigationList.vue'; import {
fab } from '@fortawesome/free-brands-svg-icons';
<template>
    <footer class="footer indent">
        <div class="sub-container-first">
            <h2 class="footer__heading">{{ values.heading }}</h2>
            <navigation-list
                :navListClass="['navigation__list', 'navigation__list--footer']"
                :navListItemClass="[
                    'navigation__list-item',
                    'navigation__list-item--footer',
                ]"
            ></navigation-list>
        </div>
        <p class="footer__paragraph">{{ values.paragraph }}</p>
        <div class="sub-container-second">
            <p class="footer__copy">
                &copy Copyright 2021. All Rights Reserved
            </p>
            <div class="footer__social-media">
                <div class="footer__icon">
                    <font-awesome-icon :icon="['fab', 'square-facebook']" />
                </div>
                <div class="footer__icon">
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                </div>
                <div class="footer__icon">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                </div>
            </div>
        </div>
    </footer>
</template>
<script lang="ts" setup>
import NavigationList from '@/components/Shared/NavigationList.vue';

const values = {
    heading: 'audiophile',
    paragraph: `
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                visit our demo facility - we’re open 7 days a week.`,
};
</script>
<style scoped>
.footer {
    text-align: center;
    color: var(--light-grey);
}
.footer__heading {
    margin: 4rem 0 3rem 0;
    font-size: 2.7rem;
    font-weight: 900;
}
.footer__paragraph,
.footer__copy {
    font-size: 1.5rem;
    line-height: 1.6;
    font-weight: 500;
    color: #7b7979;
}
.footer__paragraph {
    margin: 4rem auto 4rem auto;
    width: 80%;
    line-height: 1.6;
}
.footer__social-media {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    padding-bottom: 3rem;
}

.footer__icon {
    font-size: 2.8rem;
}
.footer__icon + .footer__icon {
    margin-left: 1.8rem;
}

@media only screen and (min-width: 768px) {
    .footer {
        text-align: left;
    }
    .footer__heading {
        margin-top: 6rem;
    }
    .footer__paragraph {
        margin: 4rem auto 4rem auto;
        width: 100%;
        line-height: 1.6;
    }

    .footer__social-media {
        margin: 0rem;
        padding-bottom: 0;
    }
    .sub-container-second {
        padding-bottom: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
@media only screen and (min-width: 1025px) {
    .sub-container-first {
        margin-top: 7rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
    }

    .sub-container-second {
        padding-bottom: 0rem;
        height: 12rem;
    }
    .footer__heading {
        margin: 0;
    }
    .footer__paragraph {
        width: 50%;
        margin: 0;
        margin-top: 3rem;
    }
    .footer__social-media {
        margin: 0;
        align-self: flex-start;
    }
}
</style>

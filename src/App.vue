<template>
    <div class="app-container">
        <div class="header">
            <logo-big class="header__icon"></logo-big>
        </div>
        <div class="image"></div>
        <div class="card-container">
            <NewsCard v-for="card in cards" :key="card.code" :content="card"></NewsCard>
        </div>
        <button class="button" v-if="buttonIsShow" @click="loadNews(currentPage)">Загрузить ещё</button>
        <div class="footer">
            <div class="footer__content">
                <logo-icon></logo-icon>
                <span class="footer__text">© alpha, 2023</span>
            </div>
        </div>
    </div>
</template>

<script>

import {fetchNews} from "@/api";
import LogoBig from "@/components/icons/LogoBig.vue";
import NewsCard from "@/components/NewsCard.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";

export default {
    name: 'App',
    components: {LogoIcon, NewsCard, LogoBig},
    data() {
        return {
            cards: [],
            currentPage: 1,
            buttonIsShow: true
        }
    },
    mounted() {
        this.loadNews(this.currentPage)
    },
    methods: {
        async loadNews(page) {
            const {items} = await fetchNews(page)
            const nextPageNews = await fetchNews(page + 1)
            this.cards.push(...items)
            if (Array.isArray(nextPageNews.items)) {
                this.currentPage++
            } else {
                this.buttonIsShow = false
            }
        },
    }
}
</script>

<style lang="scss">

* {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
}

.app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;

    &__icon {
        margin-left: 100px;
    }
}

.image {
    height: 320px;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1980px;
    background: url("./assets/background-image.jpg") no-repeat;
}

.card-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 64px 100px;
    max-width: 1920px;
    width: 100%;
}

.button {
    cursor: pointer;
    border-radius: 16px;
    border: 1px solid #0F62FE;
    background: #ffffff;
    padding: 16px 32px;
    color: #002DBF;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -0.2px;
}

.footer {
    margin-top: 72px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 200px;
    background: #F0F6FE;

    &__content {
        display: flex;
        flex-direction: column;
        margin-left: 100px;
    }

    &__text {
        margin-top: 16px;
        color: #81899D;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
    }
}
</style>

<template>
    <div class="card">
        <img v-if="content.image" :src="content.image" alt="" class="image">
        <div class="container" :class="{ 'container-with-image' : hasImage }">
            <div class="container__value">
                <div class="container__date">
                    <div class="container__day">{{ formattedDate.day }}</div>
                    <div class="container__month-year">
                        <div class="container__month-year--value">{{ formattedDate.month }}</div>
                        <div class="container__month-year--value">{{ formattedDate.year }}</div>
                    </div>
                </div>
                <a :href="content.link" class="container__link"
                   :class="{ 'text-with-image' : hasImage }">{{ content.name }}</a>
                <div class="container__text" :class="{ 'text-with-image' : hasImage }">{{ content.previewText }}</div>
            </div>
            <div class="container__type">{{ content.type.value }}</div>
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    name: "NewsCard",
    props: {
        content: {
            type: Object,
            required: true
        }
    },
    computed: {
        formattedDate() {
            const date = this.content.date
            const day = moment(date).format("DD")
            const month = moment(date).format("MMMM")
            const year = moment(date).format("YYYY")
            return {day: day, month: month, year: year}
        },
        hasImage() {
            return this.content.image
        },
    },
}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
}

.image {
    position: absolute;
    max-width: 538px;
    height: 250px;
    border-radius: 14px 14px 0 0;
}

.container {
    padding: 32px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    border: 1px solid #0F62FE;
    width: 536px;
    height: 554px;
    text-align: left;
    margin-bottom: 64px;

    &__value {
        margin-bottom: auto;
    }

    &__date {
        display: flex;
        margin: 16px 0;
        color: #A1A7B5;
        font-size: 15px;
        font-weight: 700;
        line-height: 110%;
        letter-spacing: -0.15px;
    }

    &__day {
        font-size: 36px;
        margin-right: 4px;
        line-height: 36px;
    }

    &__month-year {
        display: flex;
        flex-direction: column;

        &--value {
            font-size: 15px;
            font-weight: 700;
            line-height: 110%;
            letter-spacing: -0.15px;
        }
    }

    &__link {
        display: block;
        color: #0C5BEF;
        line-height: 120%;
        font-size: 22px;
        text-decoration: none;
        margin-bottom: 16px;
    }

    &__text {
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        overflow: clip;
        letter-spacing: -0.2px;
        line-height: 130%;
        font-size: 20px;
    }

    &__type {
        padding: 4px 16px;
        background: #F0F6FE;
        border-radius: 50px;
        font-size: 14px;
        line-height: 140%;
        width: fit-content;
    }
}

.container-with-image {
    padding: 282px 32px 32px 32px;
}

.text-with-image {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: clip;
}

.large-title {
    overflow: clip;
}
</style>
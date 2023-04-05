<template>
    <div>
        <TypeNav />
        <ListContainer />
        <Recommend/>
        <Rank/>
        <Like/>
        <Floor v-for="(floor) in floorList " :key="floor.id" :list="floor" />
        <Brand/>
        <!-- <button @click="add">+1</button>
        <span>{{count}}</span>
        <button>-1</button> -->
    </div>
</template>

<script>
import ListContainer from '@/views/Home/ListContainer'
import Recommend from '@/views/Home/Recommend'
import Rank from '@/views/Home/Rank'
import Like from '@/views/Home/Like'
import Floor from '@/views/Home/Floor'
import Brand from '@/views/Home/Brand'

import { mapState } from 'vuex'
export default {

    name: 'Home',
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    computed: {
        ...mapState({
            floorList:state=>state.home.floorList 
        })
    },
    data() {
        return {
        };
    },
    mounted() {
        this.$store.dispatch('getFloorList');
        this.$store.dispatch('getUserInfo');

    },

    methods: {
            // add(){
            //     this.$store.dispatch('add')
            // }
    },
};
</script>

<style lang="less" scoped></style>
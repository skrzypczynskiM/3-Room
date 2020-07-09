import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoRoom from './views/TodoRoom.vue';
import MotivationRoom from './views/MotivationRoom.vue';


Vue.use(VueRouter);


const routes = [{
    path: '/',
    name: 'TodoRoom',
    component: TodoRoom,
  },

  {
    path: '/motivation-room',
    name: 'MotivationRoom',
    component: MotivationRoom,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
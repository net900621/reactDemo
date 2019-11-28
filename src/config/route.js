import Index from "../views/index/index";
import List from "../views/list/index";

export const routes = [{
    path: '/',
    title: '首页',
    component: Index
},{
    path: '/list',
    title: '影评列表',
    component: List
}]
export default routes;
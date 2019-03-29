
import Information from '../pages/infomation/Infomation';
import Collect from '../pages/collect/Collect';
import Basic from '../pages/infomation/info/Basic';
import Collection from '../pages/collect/Collection';
import Feedback from '../pages/collect/Feedback';
import Share from '../pages/collect/Share';
import Exclusive from '../pages/infomation/info/Exclusive';

const router = [
    {
        path: '/info',
        component: Information,
        // exact: true,
        routes: [
            {
                path: '/info/exclusive',
                component: Exclusive
            },
            {
                path: '/info/general',
                component: Basic
            },

        ]
    },
    {
        path: '/collection',
        component: Collect,
        // exact: true,
        routes: [
            {
                path:'/collection/collect',
                component: Collection,
                exact:true
            },
            {
                path:'/collection/feedback',
                component: Feedback,
                exact:true
            },
            {
                path:'/collection/share',
                component: Share,
                exact:true
            }
        ]

    },
    // {
    //     path:'/',
    //     component: ,

    // },
    // {
    //     path:'/',
    //     component: ,

    // },
    // {
    //     path:'/',
    //     component: ,

    // },
    // {
    //     path:'/',
    //     component: ,

    // }




]

export default router
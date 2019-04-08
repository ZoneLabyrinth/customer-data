
import asyncComponent from '@/utils/asyncComponent';
import Information from '../pages/infomation/Infomation';
import Collect from '../pages/collect/Collect';
import General from '../pages/infomation/info/General';
import Collection from '../pages/collect/Collection';
import Feedback from '../pages/collect/Feedback';
import Share from '../pages/collect/Share';
import Exclusive from '../pages/infomation/info/Exclusive';
import Basic from '../pages/infomation/info/exclusive/Basic';
import Marks from '../pages/infomation/info/exclusive/Marks';
import Management from '../pages/infomation/info/exclusive/Management';
import History from '../pages/infomation/info/exclusive/History';
import Industry from '../pages/infomation/info/exclusive/Industry';
import Sentiment from '../pages/infomation/info/exclusive/Sentiment';
import Relation from '../pages/infomation/info/exclusive/Relation';
import Strategy from '@/pages/infomation/info/general/Strategy';
import ShareOrg from '@/pages/infomation/info/general/ShareOrg';
import Production from '@/pages/infomation/info/general/Production';
import Dynamic from '@/pages/infomation/info/general/Dynamic';
import ManagementSearch from '@/pages/infomation/info/general/ManagementSearch';








const router = [
    {
        path: '/info',
        component: Information,
        // exact: true,
        routes: [
            {
                path: '/info/exclusive',
                component: Exclusive,
                routes: [
                    {
                        path: '/info/exclusive/basic',
                        component: Basic,
                    },
                    {
                        path: '/info/exclusive/marks',
                        component: Marks
                    },
                    {
                        path: '/info/exclusive/management',
                        component: Management
                    },
                    {
                        path: '/info/exclusive/history',
                        component: History
                    },
                    {
                        path: '/info/exclusive/industry',
                        component: Industry
                    },
                    {
                        path: '/info/exclusive/sentiment',
                        component: Sentiment
                    },
                    {
                        path: '/info/exclusive/relation',
                        component: Relation
                    }
                ]
            },
            {
                path: '/info/general',
                component: General,
                routes: [
                    { path: '/info/general/strategy', component: Strategy },
                    { path: '/info/general/shareOrg', component: ShareOrg },
                    { path: '/info/general/production', component: Production },
                    { path: '/info/general/dynamic', component: Dynamic },
                    { path: '/info/general/managementSearch', component: ManagementSearch },
                ]
            },

        ]
    },
    {
        path: '/collection',
        component: Collect,
        // exact: true,
        routes: [
            {
                path: '/collection/collect',
                component: Collection,
                exact: true
            },
            {
                path: '/collection/feedback',
                component: Feedback,
                exact: true
            },
            {
                path: '/collection/share',
                component: Share,
                exact: true
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
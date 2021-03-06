import FindMusic from "../components/FindMusic";
import Order from "../components/FindMusic/Order";
import Recommend from "../components/FindMusic/Recommend";
import SongList from '../components/FindMusic/SongList'
import Rank from '../components/FindMusic/Rank'
import Singer from '../components/FindMusic/Singer'
import NewSongs from '../components/FindMusic/NewSongs'
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import Songs from "../pages/DetailPage/Middle/Songs";
import Comment from "../pages/DetailPage/Middle/Comment";
import Collect from "../pages/DetailPage/Middle/Collect";
import { Navigate } from "react-router-dom";
const routes = [
    {
        path: '/findmusic',
        element: <Navigate replace to={'/findmusic/recommend'} />
    },
    {
        path: 'findmusic',
        element: <FindMusic />,
        children: [
            {
                path: 'recommend',
                element: <Recommend />,
                children: [
                    {
                        path:'list/:id',
                        element:<Navigate replace to={'songlist'}/>
                    },
                    {
                        path: 'list/:id',
                        element: <DetailPage />,
                        children: [
                            {
                                path: 'songlist',
                                element: <Songs />
                            },
                            {
                                path: 'comment',
                                element: <Comment />
                            },
                            {
                                path: 'collect',
                                element: <Collect />
                            }
                        ],
                    },
                ]
            },
            {
                path: "order",
                element: <Order />
            },
            {
                path: "songlist",
                element: <SongList />
            },
            {
                path: "rank",
                element: <Rank />
            },
            {
                path: "singer",
                element: <Singer />
            },
            {
                path: "newsongs",
                element: <NewSongs />
            }
        ]
    },
    {
        path: '/',
        element: <HomePage />
        // element: <Navigate to='/findmusic/recommend' />
    },

]
export default routes
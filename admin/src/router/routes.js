import Layout_right from "../component/layout_right";

const routes = [	
    {
        path:'/',
        exact: true,
        main : (history)=> <Layout_right history={history}/>		  
    }
]

export default routes;
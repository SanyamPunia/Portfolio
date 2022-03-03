import { useRouter } from "next/router";

const routeName = () => {
    const router = useRouter()
    let routeName = router.pathname.substring(1);

    // null route name (index.js)
    if(!routeName) return 'Home';

    let capitalizeRouteName = routeName[0].toUpperCase() + routeName.slice(1);
    return capitalizeRouteName;
}

export default routeName
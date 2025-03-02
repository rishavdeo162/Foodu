import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { MdFoodBank } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

export const categoreis= [
    {
        id:1,
        name: "All",
        image:<TiThSmallOutline className="w-[60px] h-[60px] text-green-600" /> 

    },
    {
        id:2,
        name: "breakfast",
        image:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />

    },
    {
        id:3,
        name: "soups",
        image:<LuSoup className="w-[60px] h-[60px] text-green-600" />

    },
    {
        id:4,
        name: "pasta",
        image: <CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />


    },
    {
        id:5,
        name: "main_course",
        image:<MdFoodBank className="w-[60px] h-[60px] text-green-600" />

    },
    {
        id:6,
        name: "pizza",
        image:<GiFullPizza className="w-[60px] h-[60px] text-green-600" /> 

    },
    {
        id:7,
        name: "burger",
        image:<GiHamburger className="w-[60px] h-[60px] text-green-600" /> 

    },
] 
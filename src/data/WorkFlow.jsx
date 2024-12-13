import { FaBinoculars, FaChartLine, FaShieldAlt, FaRocket } from "react-icons/fa";


export const WorkFlow = [
    {
        id: 1,
        title: "Plan",
        icon: <FaBinoculars />, 
        bg: "bg-[#EABEAB]",
        textColor: "text-[#333]",
        orderNumber: 1
    },
    {
        id: 2,
        title: "Sprint",
        icon: <FaChartLine />, 
        bg: "bg-[#53B596]",
        textColor: "text-[#333]",
        orderNumber: 2
    },
    {
        id: 3,
        title: "Iteration",
        icon: <FaShieldAlt />, 
        bg: "bg-[#9566D6]",
        textColor: "text-[#333]",
        orderNumber: 3
    },
    {
        id: 4,
        title: "Release",
        icon: <FaRocket />, 
        bg: "bg-[#1CA5DA]",
        textColor: "text-[#333]",
        orderNumber: 4
    }
];



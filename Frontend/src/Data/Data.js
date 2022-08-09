// Sidebar imports 
import{
    UilEstate,
    UilTicket,
    UilUser,
    UilPlaneFly,
    UilChart,
    UilBill,   
    UilUsdSquare, 
    UilMoneyWithdrawal,
    UilClipboardAlt,
}from "@iconscout/react-unicons";
export const SidebarData = [
    {
        icon:UilEstate,
        heading:"Dashboard",
    },
    {
        icon:UilTicket,
        heading:"Ticket",
    },
    {
        icon:UilUser,
        heading:"Client",
    },
    {
        icon:UilPlaneFly,
        heading:"Visa",
    },
    {
        icon:UilChart,
        heading:"Revenue",
    },
    {
        icon:UilBill,
        heading:"Cost",
    },
    

]; 

//Cards Data 

export const CardsData = [
    {
        title: "Sales",
        color:{
            backGround: "linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)",
            boxShadow : "0px 10px 20px 0px #e0c6f5",
        },
        barValue : 70 , 
        value : "25,970", 
        png: UilUsdSquare,
        series:[
           {
            name: "Sales", 
            data:[31,40,28,51,42,109,100],
           }
        ],
    },
    {
        title: "Revenue",
        color:{
            backGround: "linear-gradient(180deg,#FF919D 0%,#Fc929D 100%)",
            boxShadow : "0px 10px 20px 0px #FDC0C7",
        },
        barValue : 80 , 
        value : "25,970", 
        png: UilMoneyWithdrawal,
        series:[
           {
            name: "Sales", 
            data:[31,40,28,51,42,109,100],
           }
        ],
    },
    {
        title: "Expenses",
        color:{
            backGround: "linear-gradient(rgb(248,212,154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow : "0px 10px 20px 0px #F9D59B",
        },
        barValue : 60 , 
        value : "4,270", 
        png: UilClipboardAlt,
        series:[
           {
            name: "Expenses", 
            data:[31,40,28,51,42,109,100],
           }
        ], 
    },
]
import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import CasteTable from "views/admin/selectTables/caste/CasteTable";
import ComplexionTable from "views/admin/selectTables/complexion/ComplexionTable";
import HoroscopeTable from "views/admin/selectTables/horoscope/HoroscopeTable";
import FamilyStatusTable from "views/admin/selectTables/familyStatus/FamilyStatusTable";
import MaritalStatusTable from "views/admin/selectTables/maritalStatus/MaritalStatusTable";
import BloodgroupTable from "views/admin/selectTables/bloodGroup/BloodGroupTable";
import PhysiqueTable from "views/admin/selectTables/physique/PhysiqueTable";
import ProfessionTable from "views/admin/selectTables/profession/ProfessionTable";
import ProfileCreatedforTable from "views/admin/selectTables/profileCreatedFor/ProfileCreatedFor";

// import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";

// const routes = [
//   {
//     name: "Main Dashboard",
//     layout: "/admin",
//     path: "/default",
//     icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
//     component: MainDashboard,
//   },
//   {
//     name: "NFT Marketplace",
//     layout: "/admin",
//     path: "/nft-marketplace",
//     icon: (
//       <Icon
//         as={MdOutlineShoppingCart}
//         width='20px'
//         height='20px'
//         color='inherit'
//       />
//     ),
//     component: NFTMarketplace,
//     secondary: true,
//   },
//   {
//     name: "Data Tables",
//     layout: "/admin",
//     icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
//     path: "/data-tables",
//     component: DataTables,
//   },

//   {
//     name: "Select Tables",
//     layout: "/admin",
//     icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
//     path: "",
//     component: DataTables,
//     items: [
//       {
//         name: "BloodGroupTable",
//         layout: "/admin/selectTables",
//         // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
//         path: "/bloodGroup",
//         component: BloodgroupTable,
//       },

//       {
//         name: "Caste",
//         layout: "/admin/selectTables",
//         // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
//         path: "/caste",
//         component: CasteTable,
//       },

//       {
//         name: "Complexion",
//         layout: "/admin/selectTables",
//         // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
//         path: "/complexion",
//         component: ComplexionTable,
//       },

//       {
//         name: "FamilyStatus",
//         layout: "/admin/selectTables",
//         // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
//         path: "/familyStatus",
//         component: FamilyStatusTable,
//       },

//       {
//         name: "Horoscope",
//         layout: "/admin/selectTables",
//         // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
//         path: "/horoscope",
//         component: HoroscopeTable,
//       },

//       {
//         name: "MaritalStatus",
//         layout: "/admin/selectTables",
//         // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
//         path: "/maritalStatus",
//         component: MaritalStatusTable,
//       },

//       {
//         name: "Physique",
//         layout: "/admin/selectTables",
//         // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
//         path: "/physique",
//         component: PhysiqueTable,
//       },

//       {
//         name: "Profession",
//         layout: "/admin/selectTables",
//         // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
//         path: "/profession",
//         component: ProfessionTable,
//       },

//       {
//         name: "ProfileCreatedFor",
//         layout: "/admin/selectTables",
//         // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
//         path: "/profileCreatedFor",
//         component: ProfileCreatedforTable,
//       },

//       {
//         name: "Profile",
//         layout: "/admin/selectTables",
//         path: "/profile",
//         icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
//         component: Profile,
//       },
//     ],
//   },


//   {
//     name: "Sign In",
//     layout: "",
//     path: "/",
//     icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
//     component: SignInCentered,
//   },
//   {
//     name: "Blank Page",
//     layout: "/admin",
//     path: "/navbar",
//     icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
//   },
//   {
//     name: "Blank Page",
//     layout: "/admin",
//     path: "/navbar",
//     icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
//   },
// ];

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },

  {
    name: "Select Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "",
    component: DataTables,
    items: [
      {
        name: "BloodGroupTable",
        layout: "/admin/selectTables",
        // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/bloodgroup",
        component: BloodgroupTable,
      },

      {
        name: "Caste",
        layout: "/admin/selectTables",
        // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/caste",
        component: CasteTable,
      },

      {
        name: "Complexion",
        layout: "/admin/selectTables",
        // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/complexion",
        component: ComplexionTable,
      },

      {
        name: "FamilyStatus",
        layout: "/admin/selectTables",
        // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/familystatus",
        component: FamilyStatusTable,
      },

      {
        name: "Horoscope",
        layout: "/admin/selectTables",
        // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/horoscope",
        component: HoroscopeTable,
      },

      {
        name: "MaritalStatus",
        layout: "/admin/selectTables",
        // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/maritalstatus",
        component: MaritalStatusTable,
      },

      {
        name: "Physique",
        layout: "/admin/selectTables",
        // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/physique",
        component: PhysiqueTable,
      },

      {
        name: "Profession",
        layout: "/admin/selectTables",
        // icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/profession",
        component: ProfessionTable,
      },

      {
        name: "ProfileCreatedFor",
        layout: "/admin/selectTables",
        ///profilecreatedfor icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/profilecreatedfor",
        component: ProfileCreatedforTable,
      },

      
    ],
  },

  {
    name: "Sign In",
    layout: "",
    path: "/",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  // {
  //   name: "Blank Page 1",
  //   layout: "/admin",
  //   path: "",
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  // },
  // {
  //   name: "Blank Page 2",
  //   layout: "/admin",
  //   path: "",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  // },
];


export default routes;

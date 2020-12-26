import Buttons from "views/Components/Buttons.js";
import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import MentorDataContainer_DashboardData from "containers/MentorDataContainer_DashboardData.js";
import MentorDataContainer_MentorListTablesData from "containers/MentorDataContainer_MentorListTablesData.js";
import MentorDataContainer_MentorCreateForms from "containers/MentorDataContainer_MentorCreateForms.js";
import MentorDataContainer_MentorUpdateForms from "containers/MentorDataContainer_MentorUpdateForms.js";
import ErrorPage from "views/Pages/ErrorPage.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import GridSystem from "views/Components/GridSystem.js";
import Icons from "views/Components/Icons.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import AdminLoginDataContainer from "containers/AdminLoginDataContainer.js";
import Notifications from "views/Components/Notifications.js";
import Panels from "views/Components/Panels.js";
import PricingPage from "views/Pages/PricingPage.js";
import RTLSupport from "views/Pages/RTLSupport.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import RegularForms from "views/Forms/RegularForms.js";
import RegularTables from "views/Tables/RegularTables.js";
import SweetAlert from "views/Components/SweetAlert.js";
import TimelinePage from "views/Pages/Timeline.js";
import Typography from "views/Components/Typography.js";
import UserProfile from "views/Pages/UserProfile.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import VectorMap from "views/Maps/VectorMap.js";
import Widgets from "views/Widgets/Widgets.js";
import Wizard from "views/Forms/Wizard.js";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "상황판",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: MentorDataContainer_DashboardData,
    layout: "/admin"
  },
  {
    isView: false,
    collapse: true,
    name: "Pages",
    rtlName: "صفحات",
    icon: Image,
    state: "pageCollapse",
    views: [
      // {
      //   path: "/rtl-support-page",
      //   name: "RTL Support",
      //   rtlName: "صودعم رتل",
      //   mini: "RS",
      //   rtlMini: "صو",
      //   component: RTLSupport,
      //   layout: "/rtl"
      // },
      // {
      //   path: "/timeline-page",
      //   name: "Timeline Page",
      //   rtlName: "تيالجدول الزمني",
      //   mini: "T",
      //   rtlMini: "تي",
      //   component: TimelinePage,
      //   layout: "/admin"
      // },
      // {
      //   path: "/user-page",
      //   name: "User Profile",
      //   rtlName: "ملف تعريفي للمستخدم",
      //   mini: "UP",
      //   rtlMini: "شع",
      //   component: UserProfile,
      //   layout: "/admin"
      // },
      {
        path: "/login-page",
        name: "Login Page",
        rtlName: "هعذاتسجيل الدخول",
        mini: "L",
        rtlMini: "هعذا",
        component: AdminLoginDataContainer,
        layout: "/auth"
      }
    ]
  },
  // {
  //   collapse: true,
  //   name: "Components",
  //   rtlName: "المكونات",
  //   icon: Apps,
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       collapse: true,
  //       name: "Multi Level Collapse",
  //       rtlName: "انهيار متعدد المستويات",
  //       mini: "MC",
  //       rtlMini: "ر",
  //       state: "multiCollapse",
  //       views: [
  //         {
  //           path: "/buttons",
  //           name: "Buttons",
  //           rtlName: "وصفت",
  //           mini: "B",
  //           rtlMini: "ب",
  //           component: Buttons,
  //           layout: "/admin"
  //         }
  //       ]
  //     },
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       rtlName: "وصفت",
  //       mini: "B",
  //       rtlMini: "ب",
  //       component: Buttons,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/grid-system",
  //       name: "Grid System",
  //       rtlName: "نظام الشبكة",
  //       mini: "GS",
  //       rtlMini: "زو",
  //       component: GridSystem,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/panels",
  //       name: "Panels",
  //       rtlName: "لوحات",
  //       mini: "P",
  //       rtlMini: "ع",
  //       component: Panels,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/sweet-alert",
  //       name: "Sweet Alert",
  //       rtlName: "الحلو تنبيه",
  //       mini: "SA",
  //       rtlMini: "ومن",
  //       component: SweetAlert,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/notifications",
  //       name: "Notifications",
  //       rtlName: "إخطارات",
  //       mini: "N",
  //       rtlMini: "ن",
  //       component: Notifications,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/icons",
  //       name: "Icons",
  //       rtlName: "الرموز",
  //       mini: "I",
  //       rtlMini: "و",
  //       component: Icons,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/typography",
  //       name: "Typography",
  //       rtlName: "طباعة",
  //       mini: "T",
  //       rtlMini: "ر",
  //       component: Typography,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  {
    isView: true,
    collapse: true,
    name: "선생님 관리",
    rtlName: "إستمارات",
    icon: "content_paste",
    state: "formsCollapse",
    views: [
      {
        path: "/data-list",
        name: "데이터 목록",
        rtlName: "رد فعل الطاولة",
        mini: "List",
        rtlMini: "در",
        component: MentorDataContainer_MentorListTablesData,
        layout: "/admin"
      },
      {
        path: "/data-create",
        name: "데이터 생성",
        rtlName: "أشكال عادية",
        mini: "ADD",
        rtlMini: "صو",
        component: MentorDataContainer_MentorCreateForms,
        layout: "/admin"
      },
      {
        path: "/data-update",
        name: "데이터 수정",
        rtlName: "أشكال عادية",
        mini: "MOD",
        rtlMini: "صو",
        component: MentorDataContainer_MentorUpdateForms,
        layout: "/admin"
      },
      // {
      //   path: "/regular-forms",
      //   name: "Regular Forms",
      //   rtlName: "أشكال عادية",
      //   mini: "RF",
      //   rtlMini: "صو",
      //   component: RegularForms,
      //   layout: "/admin"
      // },
      // {
      //   path: "/extended-forms",
      //   name: "Extended Forms",
      //   rtlName: "نماذج موسعة",
      //   mini: "EF",
      //   rtlMini: "هوو",
      //   component: ExtendedForms,
      //   layout: "/admin"
      // },
      // {
      //   path: "/validation-forms",
      //   name: "Validation Forms",
      //   rtlName: "نماذج التحقق من الصحة",
      //   mini: "VF",
      //   rtlMini: "تو",
      //   component: ValidationForms,
      //   layout: "/admin"
      // },
      // {
      //   path: "/wizard",
      //   name: "Wizard",
      //   rtlName: "ساحر",
      //   mini: "W",
      //   rtlMini: "ث",
      //   component: Wizard,
      //   layout: "/admin"
      // }
    ]
  },
  // {
  //   collapse: true,
  //   name: "Tables",
  //   rtlName: "الجداول",
  //   icon: GridOn,
  //   state: "tablesCollapse",
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       name: "Regular Tables",
  //       rtlName: "طاولات عادية",
  //       mini: "RT",
  //       rtlMini: "صر",
  //       component: RegularTables,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/extended-tables",
  //       name: "Extended Tables",
  //       rtlName: "جداول ممتدة",
  //       mini: "ET",
  //       rtlMini: "هور",
  //       component: ExtendedTables,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/react-tables",
  //       name: "React Tables",
  //       rtlName: "رد فعل الطاولة",
  //       mini: "RT",
  //       rtlMini: "در",
  //       component: ReactTables,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: Place,
  //   state: "mapsCollapse",
  //   views: [
  //     {
  //       path: "/google-maps",
  //       name: "Google Maps",
  //       rtlName: "خرائط جوجل",
  //       mini: "GM",
  //       rtlMini: "زم",
  //       component: GoogleMaps,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/full-screen-maps",
  //       name: "Full Screen Map",
  //       rtlName: "خريطة كاملة الشاشة",
  //       mini: "FSM",
  //       rtlMini: "ووم",
  //       component: FullScreenMap,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/vector-maps",
  //       name: "Vector Map",
  //       rtlName: "خريطة المتجه",
  //       mini: "VM",
  //       rtlMini: "تم",
  //       component: VectorMap,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   rtlName: "الحاجيات",
  //   icon: WidgetsIcon,
  //   component: Widgets,
  //   layout: "/admin"
  // },
  // {
  //   path: "/charts",
  //   name: "Charts",
  //   rtlName: "الرسوم البيانية",
  //   icon: Timeline,
  //   component: Charts,
  //   layout: "/admin"
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   rtlName: "التقويم",
  //   icon: DateRange,
  //   component: Calendar,
  //   layout: "/admin"
  // }
];
export default dashRoutes;

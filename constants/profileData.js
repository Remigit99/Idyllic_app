import {
  UserCircle2Icon,
  MapPinCheck,
  LucideInfo,
  Settings2,
  LucideShoppingBag,
  Phone,
  LogOut,
} from "lucide-react-native";

export const profileData = [
    
  {
    id: 1,
    icon: <UserCircle2Icon color={"blue"} size={25}/>,
    title: "Profile",
  },

  {
    id: 2,
    icon: <MapPinCheck color={"blue"} size={25}/>,
    title: "Saved Locations",
  },

  {
    id: 3,
    icon: <LucideInfo color={"blue"} size={25}/>,
    title: "FAQs",
  },

  {
    id: 4,
    icon: <Settings2 color={"blue"} size={25}/>,
    title: "Settings",
  },

  {
    id: 5,
    icon: <LucideShoppingBag color={"blue"} size={25}/>,
    title: "About Us",
  },

  {
    id: 6,
    icon: <Phone color={"blue"} size={25}/>,
    title: "Contact Us",
  },

  {
    id: 7,
    icon: <LogOut color={"blue"} size={25}/>,
    title: "Logout",
  },

];

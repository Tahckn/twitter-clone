import HomeIcon from "@/assets/icons/home.svg";
import HomeIconActive from "@/assets/icons/homeActive.svg";
import ExploreIcon from "@/assets/icons/explore.svg";
import ExploreIconActive from "@/assets/icons/exploreActive.svg";
import NotificationIcon from "@/assets/icons/notification.svg";
import NotificationIconActive from "@/assets/icons/notificationsActive.svg"
import MessageIcon from "@/assets/icons/messages.svg"
import MessageIconActive from "@/assets/icons/messagesActive.svg"
import ListIcon from "@/assets/icons/lists.svg"
import ListIconActive from "@/assets/icons/listsActive.svg"
import BookmarkIcon from "@/assets/icons/bookmarks.svg"
import BookmarkIconActive from "@/assets/icons/bookmarksActive.svg"
import UserIcon from "@/assets/icons/user.svg"
import UserIconActive from "@/assets/icons/userActive.svg"
import CommunitiesIcon from "@/assets/icons/communities.svg"
import CommunitiesIconActive from "@/assets/icons/communitiesActive.svg"
import PremiumIcon from "@/assets/icons/premium.svg"
import store from "@/store";


export const mainMenu = [
    {
        path: "/",
        title: "Anasayfa",
        icon: {
            active: (
                <HomeIconActive/>
            ),
            passive: (
                <HomeIcon/>
            )
        }
    },
    {
        path: "/explore",
        title: "Keşfet",
        icon: {
            active: (
                <ExploreIconActive/>
            ),
            passive: (
                <ExploreIcon/>
            )
        }
    },
    {
        path: "/notifications",
        title: "Bildirimler",
        notification: 4,
        icon: {
            active: (
                <NotificationIconActive/>
            ),
            passive: (
                <NotificationIcon/>
            )
        }
    },
    {
        path: "/messages",
        title: "Mesajlar",
        icon: {
            active: (
                <MessageIconActive/>
            ),
            passive: (
                <MessageIcon/>
            )
        }
    },
    {
        path: "/lists",
        title: "Listeler",
        icon: {
            active: (
                <ListIconActive/>
            ),
            passive: (
                <ListIcon/>
            )
        }
    },
    {
        path: "/bookmarks",
        title: "Yer İşaretleri",
        icon: {
            active: (
                <BookmarkIconActive/>
            ),
            passive: (
                <BookmarkIcon/>
            )
        }
    },
    {
        path: "/communities",
        title: "Topluluklar",
        icon: {
            active: (
                <CommunitiesIconActive/>
            ),
            passive: (
                <CommunitiesIcon/>
            )
        }
    },
    {
        path: "/verified-choose",
        title: "Onaylanmış",
        icon: {
            active: (
                <PremiumIcon/>
            ),
            passive: (
                <PremiumIcon/>
            )
        }
    },
    {
        path: () => {
            return `/${store.getState()?.auth?.currentAccount?.username}`
        },
        title: "Profil",
        icon: {
            active: (
                <UserIconActive/>
            ),
            passive: (
                <UserIcon/>
            )
        }
    },
]
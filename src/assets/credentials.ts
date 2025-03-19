import { FcGoogle as google } from "react-icons/fc"; 
import { LuGithub as github, LuFacebook as facebook } from "react-icons/lu"

export const credentialsArray: { icon: React.ElementType, title: string, color?: string }[] = [
    {
        icon: google, 
        title: 'Google',
    },
    {
        icon: github, 
        title: 'Github'
    },
    {
        icon: facebook, 
        title: 'Facebook',
        color: '#1877F2'
    },
]
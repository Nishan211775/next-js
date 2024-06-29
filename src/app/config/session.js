import { useSession } from 'next-auth/react';

const Session = () => {
    const { data: session } = useSession();

    console.log(session)

    return {
        userName: session.user.name,
        email: session.user.email,
        accessToken: session.user.access_token,
        userSession: session
    }

}

export default Session;
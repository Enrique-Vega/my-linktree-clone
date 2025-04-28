import { useRouter } from 'next/router';
import { LinkCard } from '@/components/LinkCard';
import Image from "next/image";
import { generateClient } from '@aws-amplify/api';
import { userByUsername } from "@/graphql/queries"; // import the real query
import { useEffect, useState } from "react";

const client = generateClient();

interface Link {
    id: string;
    title: string;
    url: string;
}

interface User {
    id: string;
    username: string;
    profileImage?: string;
    bio?: string;
    links?: {
        items: Link[];
    };
}

export default function UsernamePage() {
    const router = useRouter();
    const { username } = router.query;

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        // ⏳ If username hasn't loaded yet, don't run anything
        if (!username) return;

        // 📡 Fetch user data from AWS Amplify GraphQL
        const fetchUser = async () => {
            try {
                // 🛰️ Send GraphQL request to fetch user by username
                const result: any = await client.graphql({
                    query: userByUsername,
                    variables: { username },
                });

                // 🧹 Extract the first user returned (should only be one)
                const fetchedUser = result.data.userByUsername.items[0];

                if (!fetchedUser) {
                    // ❌ If no user is found, mark as "not found"
                    setNotFound(true);
                } else {
                    // ✅ Otherwise, store the user in state
                    setUser(fetchedUser);
                }

            } catch (err) {
                console.error("Error fetching user:", err);
                setNotFound(true);
            } finally {
                // 🎯 After request is done (success or fail), stop loading
                setLoading(false);
            }
        };

        fetchUser();
    }, [username]);

    console.log("notFound: ", notFound)
    console.log("loading: ", loading)
    console.log("user: ", user)

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen text-gray-600">Loading...</div>;
    }

    if (notFound) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-red-50 text-red-600 p-6">
                <h1 className="text-3xl font-bold mb-2">User Not Found</h1>
                <p>The username you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-purple-600 to-indigo-700 p-6 pt-20">

            {/* --- Profile Section --- */}
            <div className="flex flex-col items-center mb-10">
                {/* Profile Picture */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                        src={user.profileImage || "https://via.placeholder.com/150"}
                        width={100}
                        height={100}
                        alt="Profile"
                    />
                </div>

                {/* Username */}
                <h1 className="text-white text-2xl font-bold mb-2">@{user.username}</h1>

                {/* Bio */}
                <p className="text-white text-center max-w-xs">
                    {user.bio || "no bio available"}
                </p>
            </div>

            {/* --- Link List --- */}
            <div className="flex flex-col gap-5 w-full max-w-md">
                {user.links?.items.map((link, index) => (
                    <LinkCard key={index} title={link.title} url={link.url} />
                ))}
            </div>

        </div>
    );
}

import { useRouter } from 'next/router';
import { LinkCard } from '@/components/LinkCard';
import Image from "next/image";

export default function UsernamePage() {
    const router = useRouter();
    const { username } = router.query;

    const links = [
        { title: "My Website", url: "https://example.com" },
        { title: "Instagram", url: "https://instagram.com" },
        { title: "Twitter", url: "https://twitter.com" },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-purple-600 to-indigo-700 p-6 pt-20">

            {/* --- Profile Section --- */}
            <div className="flex flex-col items-center mb-10">
                {/* Profile Picture */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                        width={100}
                        height={100}
                        alt="Profile"
                    />
                </div>

                {/* Username */}
                <h1 className="text-white text-2xl font-bold mb-2">@{username}</h1>

                {/* Bio */}
                <p className="text-white text-center max-w-xs">
                    Just building my Linktree clone 🚀🔥 Follow me on my journey!
                </p>
            </div>

            {/* --- Link List --- */}
            <div className="flex flex-col gap-5 w-full max-w-md">
                {links.map((link, index) => (
                    <LinkCard key={index} title={link.title} url={link.url} />
                ))}
            </div>

        </div>
    );
}

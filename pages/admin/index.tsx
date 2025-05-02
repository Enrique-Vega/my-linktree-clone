import { generateClient } from '@aws-amplify/api';
import { createLink, deleteLink } from '@/graphql/mutations';
import { listLinks } from '@/graphql/queries';
import { useEffect, useState } from 'react';

interface Link {
    id: string;
    title: string;
    url: string;
}

const client = generateClient();

export default function AdminDashboard() {
    const [links, setLinks] = useState<Link[]>([]);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        fetchLinks();
    }, []);

    const fetchLinks = async () => {
        try {
            const result: any = await client.graphql({
                query: listLinks,
            });
            setLinks(result.data.listLinks.items);
        } catch (error) {
            console.error('Error fetching links:', error);
        }
    };

    const handleCreateLink = async () => {
        try {
            await client.graphql({
                query: createLink,
                variables: {
                    input: { title, url, userID: 'manual-user-id' }, // <- TEMP hardcoded userID
                },
            });
            setTitle('');
            setUrl('');
            fetchLinks(); // Refresh list
        } catch (error) {
            console.error('Error creating link:', error);
        }
    };

    const handleDeleteLink = async (id: string) => {
        try {
            await client.graphql({
                query: deleteLink,
                variables: { input: { id } },
            });
            fetchLinks(); // Refresh list
        } catch (error) {
            console.error('Error deleting link:', error);
        }
    };

    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Link Title"
                    className="border p-2 mr-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Link URL"
                    className="border p-2 mr-2"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button onClick={handleCreateLink} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add Link
                </button>
            </div>

            <div className="space-y-4">
                {links.map((link) => (
                    <div key={link.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
                        <div>
                            <div className="font-bold">{link.title}</div>
                            <div className="text-gray-500 text-sm">{link.url}</div>
                        </div>
                        <button
                            onClick={() => handleDeleteLink(link.id)}
                            className="bg-red-400 text-white px-3 py-1 rounded"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

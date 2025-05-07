import { useState } from "react";
import { generateClient } from "@aws-amplify/api";
import { updateLink } from "@/graphql/mutations";
import { client } from "./amplifyClient";

export function LinkEditor({ link, onUpdate, deleteLink }: any) {

    const [title, setTitle] = useState(link.title);
    const [url, setUrl] = useState(link.url);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        setLoading(true);
        try {
            const result = await client.graphql({
                query: updateLink,
                variables: {
                    input: {
                        id: link.id,
                        title,
                        url,
                    },
                },
                authMode: 'apiKey'
            });

            onUpdate(result.data.updateLink);
            setIsEditing(false);
        } catch (err) {
            console.error("Error updating link:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 bg-white rounded shadow flex flex-col gap-2">
            {isEditing ? (
                <>
                    <input
                        className="border p-2 rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        className="border p-2 rounded"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <div className="flex gap-2">
                        <button
                            onClick={handleSave}
                            disabled={loading}
                            className="bg-green-500 text-white px-3 py-1 rounded"
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="bg-gray-300 px-3 py-1 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </>
            ) : (
                <div className="flex justify-between items-center">
                    <div>
                        <div className="font-bold">{link.title}</div>
                        <div className="text-gray-500 text-sm">{link.url}</div>
                    </div>
                    <div className="flex gap-2">
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-500 text-white px-3 py-1 rounded text-sm"
                        >
                            Preview
                        </a>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                            Edit
                        </button>
                        <button
                            onClick={deleteLink}
                            className="bg-red-400 text-white px-3 py-1 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

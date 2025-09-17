// app/(marketing)/page.tsx or any client component
"use client";

import Script from "next/script";

export default function Page() {
    return (
        <main className="bg-white text-gray-800">
            <iframe
                src="/conventus-login.html"
                title="Conventus login"
                className={"max-w-7xl mx-auto h-[100%]"}
            />
        </main>
    );
}
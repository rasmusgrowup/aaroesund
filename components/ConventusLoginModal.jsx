"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ConventusLoginModal({
                                                open,
                                                onClose,
                                                src = "/conventus.html",
                                                title = "Medlemslogin",
                                                minHeight = 520,
                                            }) {
    const dialogRef = useRef(null);
    const lastFocused = useRef(null);

    useEffect(() => {
        if (!open) return;
        lastFocused.current = document.activeElement;
        const onKey = (e) => e.key === "Escape" && onClose?.();
        document.addEventListener("keydown", onKey);
        // focus the close button
        dialogRef.current?.querySelector("[data-autofocus]")?.focus();
        return () => {
            document.removeEventListener("keydown", onKey);
            lastFocused.current?.focus?.();
        };
    }, [open, onClose]);

    if (!open) return null;

    return createPortal(
        <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            {/* Dialog */}
            <div className="absolute inset-0 m-4 md:m-10 flex items-center justify-center">
                <div ref={dialogRef} className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b">
                        <h2 className="text-base font-semibold">{title}</h2>
                        <button
                            type="button"
                            data-autofocus
                            onClick={onClose}
                            className="rounded-lg p-2 hover:bg-black/5"
                            aria-label="Luk"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="p-0">
                        <iframe
                            title="Conventus login"
                            style={{ width: "100%", minHeight: 560, border: 0 }}
                            srcDoc={`<!doctype html>
                            <html>
                              <head>
                                <meta charset="utf-8" />
                              </head>
                              <body>
                                <script src="https://www.conventus.dk/dataudv/www/medlemslogin.php?foreningsid=3446&boks=1&popup=1"></script>
                              </body>
                            </html>`}
                        />
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
'use client';

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react'

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
        }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div ref={modalRef} className="bg-white rounded-lg shadow-lg max-w-lg w-full relative overflow-hidden">
                <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-sm"
                aria-label="Close"
                >
                <X size={24} />
                </button>
                <div className="p-6 overflow-y-auto max-h-[90vh]">{children}</div>
            </div>
        </div>
    );
}
import React from "react";
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Oops! Página não encontrada</h1>
            <p className="text-lg text-gray-600 mb-4">A página que você está procurando não foi encontrada.</p>
            <Link to="/" className="text-lg text-blue-600 hover:underline">Voltar para a página inicial</Link>
        </div>
    )
}
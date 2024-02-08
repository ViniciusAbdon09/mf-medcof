import React, { useRef, useEffect } from 'react';
import { ErrorBoundary } from '../../components/Error';
import placeCards from 'mf_about/placeAbout';


export default function About() {
    const aboutRef = useRef(null);

    useEffect(() => {
        placeCards(aboutRef.current);
    }, [])

    return (
        <ErrorBoundary>
            <div ref={aboutRef} />
        </ErrorBoundary>
    )
}
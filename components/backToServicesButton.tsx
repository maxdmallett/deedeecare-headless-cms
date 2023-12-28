import Link from 'next/link'
import React from 'react'
import { handleLinkClick } from './navbar'

const BackToServicesButton = () => {
    return (
        <Link
            legacyBehavior={false}
            href="/#services"
            data-sectionid="services"
            onClick={handleLinkClick}
            className="primary-cta-button button shadow mt-2"
        >
            Back to all services
        </Link>
    )
}

export default BackToServicesButton
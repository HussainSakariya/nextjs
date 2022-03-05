import React from 'react'
import { useRouter } from 'next/router'

function Blog() {
    const router = useRouter();
    const {slug} = router.query;
    return (
        <div>Blog:{slug}</div>
    )
}

export default Blog
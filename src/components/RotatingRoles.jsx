import React, { useEffect, useState } from 'react'


export default function RotatingRoles({ roles = [], interval = 2000 }) {
const [index, setIndex] = useState(0)


useEffect(() => {
if (!roles || roles.length === 0) return
const id = setInterval(() => {
setIndex(i => (i + 1) % roles.length)
}, interval)
return () => clearInterval(id)
}, [roles, interval])


return (
<div className="inline-block text-sm font-medium neon">
{roles[index]}
</div>
)
}
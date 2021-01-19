import React, { useState } from 'react'

export default () => {
  const contactName = process.env.CONTACT_NAME
  const contactEmail = process.env.CONTACT_EMAIL
  const mailto = `mailto:${contactEmail}`

  return (
    <footer>
      <span>
        {contactName} <a href={mailto}>{contactEmail}</a>
      </span>
    </footer>
  )
}

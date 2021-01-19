import React, { useState } from 'react'

import { HOST } from '../../src/lib/notion/server-constants.js'

export default () => {
  const contactName = process.env.CONTACT_NAME
  const contactEmail = process.env.CONTACT_EMAIL
  const host = process.env.HOME
  const mailto = `mailto:${contactEmail}`

  return (
    <footer>
      <span>
        {contactName} <a href={mailto}>{contactEmail}</a>
      </span>
    </footer>
  )
}

# reactive-svg-icons-generator

A React component for generating and rendering SVG icons dynamically.

## Installation

You can install the package via npm:

```bash
npm install reactive-svg-icons-generator
```

## Usage

```javascript
import React from 'react'
import ReactiveSvgIconsGenerator from 'reactive-svg-icons-generator'

const MyComponent = () => {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.41-11.59l-4.58 4.58L7 11.5l5-5 5 5-1.41 1.41-4.59-4.59z"/></svg>`

  return <ReactiveSvgIconsGenerator svgContent={svgContent}/>

}

export default MyComponent
```

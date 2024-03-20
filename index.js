import React, { Component } from 'react';
import SVG from 'svg.js';

/**
 * A React component for generating and rendering SVG icons dynamically.
 */
class ReactiveSvgIconsGenerator extends Component {
  /**
   * Renders an SVG icon based on the provided SVG content.
   * @param {string} svgContent - The SVG content to render.
   * @returns {JSX.Element} The SVG icon rendered as a React component.
   */
  renderIcon(svgContent) {
    return (
      <div
        ref={(node) => {
          if (node) {
            node.innerHTML = '';
            const draw = SVG().addTo(node).size(100, 100);
            draw.svg(svgContent);
          }
        }}
      />
    );
  }

  render() {
    return this.renderIcon(this.props.svgContent);
  }
}

export default ReactiveSvgIconsGenerator;
